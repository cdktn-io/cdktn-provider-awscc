# `gluePartition` Submodule <a name="`gluePartition` Submodule" id="@cdktn/provider-awscc.gluePartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GluePartition <a name="GluePartition" id="@cdktn/provider-awscc.gluePartition.GluePartition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition awscc_glue_partition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartition;

GluePartition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogId(java.lang.String)
    .databaseName(java.lang.String)
    .partitionInput(GluePartitionPartitionInput)
    .tableName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.catalogId">catalogId</a></code> | <code>java.lang.String</code> | The name of the catalog database in which to create the partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The AWS account ID of the catalog in which the partion is to be created. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.partitionInput">partitionInput</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a></code> | The structure used to create and update a partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.tableName">tableName</a></code> | <code>java.lang.String</code> | The name of the metadata table in which the partition is to be created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.catalogId"></a>

- *Type:* java.lang.String

The name of the catalog database in which to create the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#catalog_id GluePartition#catalog_id}

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

The AWS account ID of the catalog in which the partion is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#database_name GluePartition#database_name}

---

##### `partitionInput`<sup>Required</sup> <a name="partitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.partitionInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

The structure used to create and update a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#partition_input GluePartition#partition_input}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.tableName"></a>

- *Type:* java.lang.String

The name of the metadata table in which the partition is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#table_name GluePartition#table_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.putPartitionInput">putPartitionInput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gluePartition.GluePartition.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gluePartition.GluePartition.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.gluePartition.GluePartition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gluePartition.GluePartition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.gluePartition.GluePartition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.gluePartition.GluePartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.gluePartition.GluePartition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.gluePartition.GluePartition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.gluePartition.GluePartition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.gluePartition.GluePartition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.gluePartition.GluePartition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gluePartition.GluePartition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.gluePartition.GluePartition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.gluePartition.GluePartition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gluePartition.GluePartition.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPartitionInput` <a name="putPartitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.putPartitionInput"></a>

```java
public void putPartitionInput(GluePartitionPartitionInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartition.putPartitionInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GluePartition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.gluePartition.GluePartition.isConstruct"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartition;

GluePartition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gluePartition.GluePartition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartition;

GluePartition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartition;

GluePartition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartition;

GluePartition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GluePartition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GluePartition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GluePartition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GluePartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GluePartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.identifierPartitionInputValues">identifierPartitionInputValues</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInput">partitionInput</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference">GluePartitionPartitionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInputInput">partitionInputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identifierPartitionInputValues`<sup>Required</sup> <a name="identifierPartitionInputValues" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.identifierPartitionInputValues"></a>

```java
public java.lang.String getIdentifierPartitionInputValues();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Required</sup> <a name="partitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInput"></a>

```java
public GluePartitionPartitionInputOutputReference getPartitionInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference">GluePartitionPartitionInputOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `partitionInputInput`<sup>Optional</sup> <a name="partitionInputInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInputInput"></a>

```java
public IResolvable|GluePartitionPartitionInput getPartitionInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GluePartitionConfig <a name="GluePartitionConfig" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionConfig;

GluePartitionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogId(java.lang.String)
    .databaseName(java.lang.String)
    .partitionInput(GluePartitionPartitionInput)
    .tableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | The name of the catalog database in which to create the partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The AWS account ID of the catalog in which the partion is to be created. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.partitionInput">partitionInput</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a></code> | The structure used to create and update a partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.tableName">tableName</a></code> | <code>java.lang.String</code> | The name of the metadata table in which the partition is to be created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

The name of the catalog database in which to create the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#catalog_id GluePartition#catalog_id}

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

The AWS account ID of the catalog in which the partion is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#database_name GluePartition#database_name}

---

##### `partitionInput`<sup>Required</sup> <a name="partitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.partitionInput"></a>

```java
public GluePartitionPartitionInput getPartitionInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

The structure used to create and update a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#partition_input GluePartition#partition_input}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

The name of the metadata table in which the partition is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#table_name GluePartition#table_name}

---

### GluePartitionPartitionInput <a name="GluePartitionPartitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInput;

GluePartitionPartitionInput.builder()
    .values(java.util.List<java.lang.String>)
//  .parameters(java.lang.String)
//  .storageDescriptor(GluePartitionPartitionInputStorageDescriptor)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The values of the partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Key-value pairs defining partition parameters. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a></code> | Provides information about the physical location where the partition is stored. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The values of the partition.

Although this parameter is not required by the SDK, you must specify this parameter for a valid input. The values for the keys for the new partition must be passed as an array of String objects that must be ordered in the same order as the partition keys appearing in the Amazon S3 prefix. Otherwise AWS Glue will add the values to the wrong keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#values GluePartition#values}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Key-value pairs defining partition parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

##### `storageDescriptor`<sup>Optional</sup> <a name="storageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.storageDescriptor"></a>

```java
public GluePartitionPartitionInputStorageDescriptor getStorageDescriptor();
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

Provides information about the physical location where the partition is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#storage_descriptor GluePartition#storage_descriptor}

---

### GluePartitionPartitionInputStorageDescriptor <a name="GluePartitionPartitionInputStorageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInputStorageDescriptor;

GluePartitionPartitionInputStorageDescriptor.builder()
//  .bucketColumns(java.util.List<java.lang.String>)
//  .columns(IResolvable|java.util.List<GluePartitionPartitionInputStorageDescriptorColumns>)
//  .compressed(java.lang.Boolean|IResolvable)
//  .inputFormat(java.lang.String)
//  .location(java.lang.String)
//  .numberOfBuckets(java.lang.Number)
//  .outputFormat(java.lang.String)
//  .parameters(java.lang.String)
//  .schemaReference(GluePartitionPartitionInputStorageDescriptorSchemaReference)
//  .serdeInfo(GluePartitionPartitionInputStorageDescriptorSerdeInfo)
//  .skewedInfo(GluePartitionPartitionInputStorageDescriptorSkewedInfo)
//  .sortColumns(IResolvable|java.util.List<GluePartitionPartitionInputStorageDescriptorSortColumns>)
//  .storedAsSubDirectories(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.bucketColumns">bucketColumns</a></code> | <code>java.util.List<java.lang.String></code> | A list of reducer grouping columns, clustering columns, and bucketing columns in the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.columns">columns</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>></code> | A list of the Columns in the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.compressed">compressed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | True if the data in the table is compressed, or False if not. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.inputFormat">inputFormat</a></code> | <code>java.lang.String</code> | The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.location">location</a></code> | <code>java.lang.String</code> | The physical location of the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.numberOfBuckets">numberOfBuckets</a></code> | <code>java.lang.Number</code> | The number of buckets. You must specify this property if the partition contains any dimension columns. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.parameters">parameters</a></code> | <code>java.lang.String</code> | The user-supplied properties in key-value form. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.schemaReference">schemaReference</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a></code> | An object that references a schema stored in the AWS Glue Schema Registry. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.serdeInfo">serdeInfo</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a></code> | The serialization/deserialization (SerDe) information. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.skewedInfo">skewedInfo</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a></code> | The information about values that appear frequently in a column (skewed values). |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.sortColumns">sortColumns</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>></code> | A list specifying the sort order of each bucket in the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.storedAsSubDirectories">storedAsSubDirectories</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | True if the table data is stored in subdirectories, or False if not. |

---

##### `bucketColumns`<sup>Optional</sup> <a name="bucketColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.bucketColumns"></a>

```java
public java.util.List<java.lang.String> getBucketColumns();
```

- *Type:* java.util.List<java.lang.String>

A list of reducer grouping columns, clustering columns, and bucketing columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#bucket_columns GluePartition#bucket_columns}

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.columns"></a>

```java
public IResolvable|java.util.List<GluePartitionPartitionInputStorageDescriptorColumns> getColumns();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>>

A list of the Columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#columns GluePartition#columns}

---

##### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.compressed"></a>

```java
public java.lang.Boolean|IResolvable getCompressed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

True if the data in the table is compressed, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#compressed GluePartition#compressed}

---

##### `inputFormat`<sup>Optional</sup> <a name="inputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.inputFormat"></a>

```java
public java.lang.String getInputFormat();
```

- *Type:* java.lang.String

The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#input_format GluePartition#input_format}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The physical location of the table.

By default, this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#location GluePartition#location}

---

##### `numberOfBuckets`<sup>Optional</sup> <a name="numberOfBuckets" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.numberOfBuckets"></a>

```java
public java.lang.Number getNumberOfBuckets();
```

- *Type:* java.lang.Number

The number of buckets. You must specify this property if the partition contains any dimension columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#number_of_buckets GluePartition#number_of_buckets}

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#output_format GluePartition#output_format}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

The user-supplied properties in key-value form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

##### `schemaReference`<sup>Optional</sup> <a name="schemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.schemaReference"></a>

```java
public GluePartitionPartitionInputStorageDescriptorSchemaReference getSchemaReference();
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

An object that references a schema stored in the AWS Glue Schema Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_reference GluePartition#schema_reference}

---

##### `serdeInfo`<sup>Optional</sup> <a name="serdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.serdeInfo"></a>

```java
public GluePartitionPartitionInputStorageDescriptorSerdeInfo getSerdeInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

The serialization/deserialization (SerDe) information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#serde_info GluePartition#serde_info}

---

##### `skewedInfo`<sup>Optional</sup> <a name="skewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.skewedInfo"></a>

```java
public GluePartitionPartitionInputStorageDescriptorSkewedInfo getSkewedInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

The information about values that appear frequently in a column (skewed values).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_info GluePartition#skewed_info}

---

##### `sortColumns`<sup>Optional</sup> <a name="sortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.sortColumns"></a>

```java
public IResolvable|java.util.List<GluePartitionPartitionInputStorageDescriptorSortColumns> getSortColumns();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>>

A list specifying the sort order of each bucket in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#sort_columns GluePartition#sort_columns}

---

##### `storedAsSubDirectories`<sup>Optional</sup> <a name="storedAsSubDirectories" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.storedAsSubDirectories"></a>

```java
public java.lang.Boolean|IResolvable getStoredAsSubDirectories();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

True if the table data is stored in subdirectories, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#stored_as_sub_directories GluePartition#stored_as_sub_directories}

---

### GluePartitionPartitionInputStorageDescriptorColumns <a name="GluePartitionPartitionInputStorageDescriptorColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInputStorageDescriptorColumns;

GluePartitionPartitionInputStorageDescriptorColumns.builder()
//  .comment(java.lang.String)
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.comment">comment</a></code> | <code>java.lang.String</code> | A free-form text comment. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Column. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.type">type</a></code> | <code>java.lang.String</code> | The data type of the Column. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

A free-form text comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#comment GluePartition#comment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#name GluePartition#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The data type of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#type GluePartition#type}

---

### GluePartitionPartitionInputStorageDescriptorSchemaReference <a name="GluePartitionPartitionInputStorageDescriptorSchemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInputStorageDescriptorSchemaReference;

GluePartitionPartitionInputStorageDescriptorSchemaReference.builder()
//  .schemaId(GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId)
//  .schemaVersionId(java.lang.String)
//  .schemaVersionNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaId">schemaId</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a></code> | A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionId">schemaVersionId</a></code> | <code>java.lang.String</code> | The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionNumber">schemaVersionNumber</a></code> | <code>java.lang.Number</code> | The version number of the schema. |

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaId"></a>

```java
public GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId getSchemaId();
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_id GluePartition#schema_id}

---

##### `schemaVersionId`<sup>Optional</sup> <a name="schemaVersionId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionId"></a>

```java
public java.lang.String getSchemaVersionId();
```

- *Type:* java.lang.String

The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_version_id GluePartition#schema_version_id}

---

##### `schemaVersionNumber`<sup>Optional</sup> <a name="schemaVersionNumber" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionNumber"></a>

```java
public java.lang.Number getSchemaVersionNumber();
```

- *Type:* java.lang.Number

The version number of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_version_number GluePartition#schema_version_number}

---

### GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId <a name="GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId;

GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.builder()
//  .registryName(java.lang.String)
//  .schemaArn(java.lang.String)
//  .schemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.registryName">registryName</a></code> | <code>java.lang.String</code> | The name of the schema registry that contains the schema. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaArn">schemaArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | The name of the schema. One of SchemaArn or SchemaName has to be provided. |

---

##### `registryName`<sup>Optional</sup> <a name="registryName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.registryName"></a>

```java
public java.lang.String getRegistryName();
```

- *Type:* java.lang.String

The name of the schema registry that contains the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#registry_name GluePartition#registry_name}

---

##### `schemaArn`<sup>Optional</sup> <a name="schemaArn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaArn"></a>

```java
public java.lang.String getSchemaArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_arn GluePartition#schema_arn}

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

The name of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_name GluePartition#schema_name}

---

### GluePartitionPartitionInputStorageDescriptorSerdeInfo <a name="GluePartitionPartitionInputStorageDescriptorSerdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInputStorageDescriptorSerdeInfo;

GluePartitionPartitionInputStorageDescriptorSerdeInfo.builder()
//  .name(java.lang.String)
//  .parameters(java.lang.String)
//  .serializationLibrary(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.name">name</a></code> | <code>java.lang.String</code> | Name of the SerDe. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.parameters">parameters</a></code> | <code>java.lang.String</code> | These key-value pairs define initialization parameters for the SerDe. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.serializationLibrary">serializationLibrary</a></code> | <code>java.lang.String</code> | Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#name GluePartition#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

These key-value pairs define initialization parameters for the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

##### `serializationLibrary`<sup>Optional</sup> <a name="serializationLibrary" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.serializationLibrary"></a>

```java
public java.lang.String getSerializationLibrary();
```

- *Type:* java.lang.String

Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#serialization_library GluePartition#serialization_library}

---

### GluePartitionPartitionInputStorageDescriptorSkewedInfo <a name="GluePartitionPartitionInputStorageDescriptorSkewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInputStorageDescriptorSkewedInfo;

GluePartitionPartitionInputStorageDescriptorSkewedInfo.builder()
//  .skewedColumnNames(java.util.List<java.lang.String>)
//  .skewedColumnValueLocationMaps(java.lang.String)
//  .skewedColumnValues(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnNames">skewedColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | A list of values that appear so frequently as to be considered skewed. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps">skewedColumnValueLocationMaps</a></code> | <code>java.lang.String</code> | A mapping of skewed values to the columns that contain them. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValues">skewedColumnValues</a></code> | <code>java.util.List<java.lang.String></code> | A list of names of columns that contain skewed values. |

---

##### `skewedColumnNames`<sup>Optional</sup> <a name="skewedColumnNames" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnNames"></a>

```java
public java.util.List<java.lang.String> getSkewedColumnNames();
```

- *Type:* java.util.List<java.lang.String>

A list of values that appear so frequently as to be considered skewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_names GluePartition#skewed_column_names}

---

##### `skewedColumnValueLocationMaps`<sup>Optional</sup> <a name="skewedColumnValueLocationMaps" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps"></a>

```java
public java.lang.String getSkewedColumnValueLocationMaps();
```

- *Type:* java.lang.String

A mapping of skewed values to the columns that contain them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_value_location_maps GluePartition#skewed_column_value_location_maps}

---

##### `skewedColumnValues`<sup>Optional</sup> <a name="skewedColumnValues" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValues"></a>

```java
public java.util.List<java.lang.String> getSkewedColumnValues();
```

- *Type:* java.util.List<java.lang.String>

A list of names of columns that contain skewed values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_values GluePartition#skewed_column_values}

---

### GluePartitionPartitionInputStorageDescriptorSortColumns <a name="GluePartitionPartitionInputStorageDescriptorSortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInputStorageDescriptorSortColumns;

GluePartitionPartitionInputStorageDescriptorSortColumns.builder()
//  .column(java.lang.String)
//  .sortOrder(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.column">column</a></code> | <code>java.lang.String</code> | The name of the column. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.sortOrder">sortOrder</a></code> | <code>java.lang.Number</code> | Indicates that the column is sorted in ascending order (== 1), or in descending order (==0). |

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.column"></a>

```java
public java.lang.String getColumn();
```

- *Type:* java.lang.String

The name of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#column GluePartition#column}

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.sortOrder"></a>

```java
public java.lang.Number getSortOrder();
```

- *Type:* java.lang.Number

Indicates that the column is sorted in ascending order (== 1), or in descending order (==0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#sort_order GluePartition#sort_order}

---

## Classes <a name="Classes" id="Classes"></a>

### GluePartitionPartitionInputOutputReference <a name="GluePartitionPartitionInputOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInputOutputReference;

new GluePartitionPartitionInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor">putStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetStorageDescriptor">resetStorageDescriptor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStorageDescriptor` <a name="putStorageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor"></a>

```java
public void putStorageDescriptor(GluePartitionPartitionInputStorageDescriptor value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

---

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetStorageDescriptor` <a name="resetStorageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetStorageDescriptor"></a>

```java
public void resetStorageDescriptor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference">GluePartitionPartitionInputStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptorInput">storageDescriptorInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageDescriptor`<sup>Required</sup> <a name="storageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptor"></a>

```java
public GluePartitionPartitionInputStorageDescriptorOutputReference getStorageDescriptor();
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference">GluePartitionPartitionInputStorageDescriptorOutputReference</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `storageDescriptorInput`<sup>Optional</sup> <a name="storageDescriptorInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptorInput"></a>

```java
public IResolvable|GluePartitionPartitionInputStorageDescriptor getStorageDescriptorInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.internalValue"></a>

```java
public IResolvable|GluePartitionPartitionInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

---


### GluePartitionPartitionInputStorageDescriptorColumnsList <a name="GluePartitionPartitionInputStorageDescriptorColumnsList" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInputStorageDescriptorColumnsList;

new GluePartitionPartitionInputStorageDescriptorColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.get"></a>

```java
public GluePartitionPartitionInputStorageDescriptorColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GluePartitionPartitionInputStorageDescriptorColumns> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>>

---


### GluePartitionPartitionInputStorageDescriptorColumnsOutputReference <a name="GluePartitionPartitionInputStorageDescriptorColumnsOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference;

new GluePartitionPartitionInputStorageDescriptorColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|GluePartitionPartitionInputStorageDescriptorColumns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>

---


### GluePartitionPartitionInputStorageDescriptorOutputReference <a name="GluePartitionPartitionInputStorageDescriptorOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInputStorageDescriptorOutputReference;

new GluePartitionPartitionInputStorageDescriptorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putColumns">putColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSchemaReference">putSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSerdeInfo">putSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSkewedInfo">putSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSortColumns">putSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetBucketColumns">resetBucketColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetColumns">resetColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetCompressed">resetCompressed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetInputFormat">resetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetNumberOfBuckets">resetNumberOfBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSchemaReference">resetSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSerdeInfo">resetSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSkewedInfo">resetSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSortColumns">resetSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetStoredAsSubDirectories">resetStoredAsSubDirectories</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumns` <a name="putColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putColumns"></a>

```java
public void putColumns(IResolvable|java.util.List<GluePartitionPartitionInputStorageDescriptorColumns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>>

---

##### `putSchemaReference` <a name="putSchemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSchemaReference"></a>

```java
public void putSchemaReference(GluePartitionPartitionInputStorageDescriptorSchemaReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSchemaReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

---

##### `putSerdeInfo` <a name="putSerdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSerdeInfo"></a>

```java
public void putSerdeInfo(GluePartitionPartitionInputStorageDescriptorSerdeInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSerdeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

---

##### `putSkewedInfo` <a name="putSkewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSkewedInfo"></a>

```java
public void putSkewedInfo(GluePartitionPartitionInputStorageDescriptorSkewedInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSkewedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

---

##### `putSortColumns` <a name="putSortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSortColumns"></a>

```java
public void putSortColumns(IResolvable|java.util.List<GluePartitionPartitionInputStorageDescriptorSortColumns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSortColumns.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>>

---

##### `resetBucketColumns` <a name="resetBucketColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetBucketColumns"></a>

```java
public void resetBucketColumns()
```

##### `resetColumns` <a name="resetColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetColumns"></a>

```java
public void resetColumns()
```

##### `resetCompressed` <a name="resetCompressed" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetCompressed"></a>

```java
public void resetCompressed()
```

##### `resetInputFormat` <a name="resetInputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetInputFormat"></a>

```java
public void resetInputFormat()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetNumberOfBuckets` <a name="resetNumberOfBuckets" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetNumberOfBuckets"></a>

```java
public void resetNumberOfBuckets()
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetOutputFormat"></a>

```java
public void resetOutputFormat()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetSchemaReference` <a name="resetSchemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSchemaReference"></a>

```java
public void resetSchemaReference()
```

##### `resetSerdeInfo` <a name="resetSerdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSerdeInfo"></a>

```java
public void resetSerdeInfo()
```

##### `resetSkewedInfo` <a name="resetSkewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSkewedInfo"></a>

```java
public void resetSkewedInfo()
```

##### `resetSortColumns` <a name="resetSortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSortColumns"></a>

```java
public void resetSortColumns()
```

##### `resetStoredAsSubDirectories` <a name="resetStoredAsSubDirectories" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetStoredAsSubDirectories"></a>

```java
public void resetStoredAsSubDirectories()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList">GluePartitionPartitionInputStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReference">schemaReference</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfo">serdeInfo</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfo">skewedInfo</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumns">sortColumns</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList">GluePartitionPartitionInputStorageDescriptorSortColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumnsInput">bucketColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columnsInput">columnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressedInput">compressedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormatInput">inputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBucketsInput">numberOfBucketsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormatInput">outputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReferenceInput">schemaReferenceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfoInput">serdeInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfoInput">skewedInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumnsInput">sortColumnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput">storedAsSubDirectoriesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumns">bucketColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressed">compressed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormat">inputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBuckets">numberOfBuckets</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectories">storedAsSubDirectories</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columns"></a>

```java
public GluePartitionPartitionInputStorageDescriptorColumnsList getColumns();
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList">GluePartitionPartitionInputStorageDescriptorColumnsList</a>

---

##### `schemaReference`<sup>Required</sup> <a name="schemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReference"></a>

```java
public GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference getSchemaReference();
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference</a>

---

##### `serdeInfo`<sup>Required</sup> <a name="serdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfo"></a>

```java
public GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference getSerdeInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference</a>

---

##### `skewedInfo`<sup>Required</sup> <a name="skewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfo"></a>

```java
public GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference getSkewedInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference</a>

---

##### `sortColumns`<sup>Required</sup> <a name="sortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumns"></a>

```java
public GluePartitionPartitionInputStorageDescriptorSortColumnsList getSortColumns();
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList">GluePartitionPartitionInputStorageDescriptorSortColumnsList</a>

---

##### `bucketColumnsInput`<sup>Optional</sup> <a name="bucketColumnsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumnsInput"></a>

```java
public java.util.List<java.lang.String> getBucketColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columnsInput"></a>

```java
public IResolvable|java.util.List<GluePartitionPartitionInputStorageDescriptorColumns> getColumnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>>

---

##### `compressedInput`<sup>Optional</sup> <a name="compressedInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressedInput"></a>

```java
public java.lang.Boolean|IResolvable getCompressedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inputFormatInput`<sup>Optional</sup> <a name="inputFormatInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormatInput"></a>

```java
public java.lang.String getInputFormatInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `numberOfBucketsInput`<sup>Optional</sup> <a name="numberOfBucketsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBucketsInput"></a>

```java
public java.lang.Number getNumberOfBucketsInput();
```

- *Type:* java.lang.Number

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormatInput"></a>

```java
public java.lang.String getOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `schemaReferenceInput`<sup>Optional</sup> <a name="schemaReferenceInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReferenceInput"></a>

```java
public IResolvable|GluePartitionPartitionInputStorageDescriptorSchemaReference getSchemaReferenceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

---

##### `serdeInfoInput`<sup>Optional</sup> <a name="serdeInfoInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfoInput"></a>

```java
public IResolvable|GluePartitionPartitionInputStorageDescriptorSerdeInfo getSerdeInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

---

##### `skewedInfoInput`<sup>Optional</sup> <a name="skewedInfoInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```java
public IResolvable|GluePartitionPartitionInputStorageDescriptorSkewedInfo getSkewedInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

---

##### `sortColumnsInput`<sup>Optional</sup> <a name="sortColumnsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumnsInput"></a>

```java
public IResolvable|java.util.List<GluePartitionPartitionInputStorageDescriptorSortColumns> getSortColumnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>>

---

##### `storedAsSubDirectoriesInput`<sup>Optional</sup> <a name="storedAsSubDirectoriesInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput"></a>

```java
public java.lang.Boolean|IResolvable getStoredAsSubDirectoriesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bucketColumns`<sup>Required</sup> <a name="bucketColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumns"></a>

```java
public java.util.List<java.lang.String> getBucketColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compressed`<sup>Required</sup> <a name="compressed" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressed"></a>

```java
public java.lang.Boolean|IResolvable getCompressed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inputFormat`<sup>Required</sup> <a name="inputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormat"></a>

```java
public java.lang.String getInputFormat();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `numberOfBuckets`<sup>Required</sup> <a name="numberOfBuckets" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBuckets"></a>

```java
public java.lang.Number getNumberOfBuckets();
```

- *Type:* java.lang.Number

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `storedAsSubDirectories`<sup>Required</sup> <a name="storedAsSubDirectories" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectories"></a>

```java
public java.lang.Boolean|IResolvable getStoredAsSubDirectories();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.internalValue"></a>

```java
public IResolvable|GluePartitionPartitionInputStorageDescriptor getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

---


### GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference;

new GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId">putSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId">resetSchemaVersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionNumber">resetSchemaVersionNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchemaId` <a name="putSchemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId"></a>

```java
public void putSchemaId(GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaId"></a>

```java
public void resetSchemaId()
```

##### `resetSchemaVersionId` <a name="resetSchemaVersionId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId"></a>

```java
public void resetSchemaVersionId()
```

##### `resetSchemaVersionNumber` <a name="resetSchemaVersionNumber" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionNumber"></a>

```java
public void resetSchemaVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId">schemaId</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput">schemaIdInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput">schemaVersionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput">schemaVersionNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId">schemaVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber">schemaVersionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId"></a>

```java
public GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference getSchemaId();
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a>

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput"></a>

```java
public IResolvable|GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId getSchemaIdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `schemaVersionIdInput`<sup>Optional</sup> <a name="schemaVersionIdInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput"></a>

```java
public java.lang.String getSchemaVersionIdInput();
```

- *Type:* java.lang.String

---

##### `schemaVersionNumberInput`<sup>Optional</sup> <a name="schemaVersionNumberInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput"></a>

```java
public java.lang.Number getSchemaVersionNumberInput();
```

- *Type:* java.lang.Number

---

##### `schemaVersionId`<sup>Required</sup> <a name="schemaVersionId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId"></a>

```java
public java.lang.String getSchemaVersionId();
```

- *Type:* java.lang.String

---

##### `schemaVersionNumber`<sup>Required</sup> <a name="schemaVersionNumber" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber"></a>

```java
public java.lang.Number getSchemaVersionNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue"></a>

```java
public IResolvable|GluePartitionPartitionInputStorageDescriptorSchemaReference getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

---


### GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference;

new GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName">resetRegistryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn">resetSchemaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegistryName` <a name="resetRegistryName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName"></a>

```java
public void resetRegistryName()
```

##### `resetSchemaArn` <a name="resetSchemaArn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn"></a>

```java
public void resetSchemaArn()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput">registryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput">schemaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName">registryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn">schemaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `registryNameInput`<sup>Optional</sup> <a name="registryNameInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput"></a>

```java
public java.lang.String getRegistryNameInput();
```

- *Type:* java.lang.String

---

##### `schemaArnInput`<sup>Optional</sup> <a name="schemaArnInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput"></a>

```java
public java.lang.String getSchemaArnInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName"></a>

```java
public java.lang.String getRegistryName();
```

- *Type:* java.lang.String

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn"></a>

```java
public java.lang.String getSchemaArn();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue"></a>

```java
public IResolvable|GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

---


### GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference;

new GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetSerializationLibrary">resetSerializationLibrary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetSerializationLibrary` <a name="resetSerializationLibrary" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetSerializationLibrary"></a>

```java
public void resetSerializationLibrary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput">serializationLibraryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary">serializationLibrary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `serializationLibraryInput`<sup>Optional</sup> <a name="serializationLibraryInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput"></a>

```java
public java.lang.String getSerializationLibraryInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `serializationLibrary`<sup>Required</sup> <a name="serializationLibrary" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary"></a>

```java
public java.lang.String getSerializationLibrary();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|GluePartitionPartitionInputStorageDescriptorSerdeInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

---


### GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference;

new GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames">resetSkewedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps">resetSkewedColumnValueLocationMaps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues">resetSkewedColumnValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSkewedColumnNames` <a name="resetSkewedColumnNames" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames"></a>

```java
public void resetSkewedColumnNames()
```

##### `resetSkewedColumnValueLocationMaps` <a name="resetSkewedColumnValueLocationMaps" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps"></a>

```java
public void resetSkewedColumnValueLocationMaps()
```

##### `resetSkewedColumnValues` <a name="resetSkewedColumnValues" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues"></a>

```java
public void resetSkewedColumnValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput">skewedColumnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput">skewedColumnValueLocationMapsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput">skewedColumnValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames">skewedColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps">skewedColumnValueLocationMaps</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues">skewedColumnValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `skewedColumnNamesInput`<sup>Optional</sup> <a name="skewedColumnNamesInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput"></a>

```java
public java.util.List<java.lang.String> getSkewedColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skewedColumnValueLocationMapsInput`<sup>Optional</sup> <a name="skewedColumnValueLocationMapsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput"></a>

```java
public java.lang.String getSkewedColumnValueLocationMapsInput();
```

- *Type:* java.lang.String

---

##### `skewedColumnValuesInput`<sup>Optional</sup> <a name="skewedColumnValuesInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput"></a>

```java
public java.util.List<java.lang.String> getSkewedColumnValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skewedColumnNames`<sup>Required</sup> <a name="skewedColumnNames" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames"></a>

```java
public java.util.List<java.lang.String> getSkewedColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skewedColumnValueLocationMaps`<sup>Required</sup> <a name="skewedColumnValueLocationMaps" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps"></a>

```java
public java.lang.String getSkewedColumnValueLocationMaps();
```

- *Type:* java.lang.String

---

##### `skewedColumnValues`<sup>Required</sup> <a name="skewedColumnValues" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues"></a>

```java
public java.util.List<java.lang.String> getSkewedColumnValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|GluePartitionPartitionInputStorageDescriptorSkewedInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

---


### GluePartitionPartitionInputStorageDescriptorSortColumnsList <a name="GluePartitionPartitionInputStorageDescriptorSortColumnsList" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInputStorageDescriptorSortColumnsList;

new GluePartitionPartitionInputStorageDescriptorSortColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.get"></a>

```java
public GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GluePartitionPartitionInputStorageDescriptorSortColumns> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>>

---


### GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_partition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference;

new GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetColumn">resetColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetSortOrder">resetSortOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumn` <a name="resetColumn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetColumn"></a>

```java
public void resetColumn()
```

##### `resetSortOrder` <a name="resetSortOrder" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetSortOrder"></a>

```java
public void resetSortOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.columnInput">columnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrderInput">sortOrderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.column">column</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrder">sortOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.columnInput"></a>

```java
public java.lang.String getColumnInput();
```

- *Type:* java.lang.String

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrderInput"></a>

```java
public java.lang.Number getSortOrderInput();
```

- *Type:* java.lang.Number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.column"></a>

```java
public java.lang.String getColumn();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrder"></a>

```java
public java.lang.Number getSortOrder();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|GluePartitionPartitionInputStorageDescriptorSortColumns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>

---



