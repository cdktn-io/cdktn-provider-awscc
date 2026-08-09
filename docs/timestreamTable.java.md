# `timestreamTable` Submodule <a name="`timestreamTable` Submodule" id="@cdktn/provider-awscc.timestreamTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreamTable <a name="TimestreamTable" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table awscc_timestream_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTable;

TimestreamTable.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .databaseName(java.lang.String)
//  .magneticStoreWriteProperties(TimestreamTableMagneticStoreWriteProperties)
//  .retentionProperties(TimestreamTableRetentionProperties)
//  .schema(TimestreamTableSchema)
//  .tableName(java.lang.String)
//  .tags(IResolvable|java.util.List<TimestreamTableTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name for the database which the table to be created belongs to. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.magneticStoreWriteProperties">magneticStoreWriteProperties</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a></code> | The properties that determine whether magnetic store writes are enabled. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.retentionProperties">retentionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a></code> | The retention duration of the memory store and the magnetic store. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a></code> | A Schema specifies the expected data model of the table. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.tableName">tableName</a></code> | <code>java.lang.String</code> | The name for the table. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

The name for the database which the table to be created belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#database_name TimestreamTable#database_name}

---

##### `magneticStoreWriteProperties`<sup>Optional</sup> <a name="magneticStoreWriteProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.magneticStoreWriteProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a>

The properties that determine whether magnetic store writes are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#magnetic_store_write_properties TimestreamTable#magnetic_store_write_properties}

---

##### `retentionProperties`<sup>Optional</sup> <a name="retentionProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.retentionProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a>

The retention duration of the memory store and the magnetic store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#retention_properties TimestreamTable#retention_properties}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a>

A Schema specifies the expected data model of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#schema TimestreamTable#schema}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.tableName"></a>

- *Type:* java.lang.String

The name for the table.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#table_name TimestreamTable#table_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#tags TimestreamTable#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.putMagneticStoreWriteProperties">putMagneticStoreWriteProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.putRetentionProperties">putRetentionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetMagneticStoreWriteProperties">resetMagneticStoreWriteProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetRetentionProperties">resetRetentionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMagneticStoreWriteProperties` <a name="putMagneticStoreWriteProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putMagneticStoreWriteProperties"></a>

```java
public void putMagneticStoreWriteProperties(TimestreamTableMagneticStoreWriteProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putMagneticStoreWriteProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a>

---

##### `putRetentionProperties` <a name="putRetentionProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putRetentionProperties"></a>

```java
public void putRetentionProperties(TimestreamTableRetentionProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putRetentionProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a>

---

##### `putSchema` <a name="putSchema" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putSchema"></a>

```java
public void putSchema(TimestreamTableSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<TimestreamTableTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>>

---

##### `resetMagneticStoreWriteProperties` <a name="resetMagneticStoreWriteProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetMagneticStoreWriteProperties"></a>

```java
public void resetMagneticStoreWriteProperties()
```

##### `resetRetentionProperties` <a name="resetRetentionProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetRetentionProperties"></a>

```java
public void resetRetentionProperties()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetTableName"></a>

```java
public void resetTableName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TimestreamTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isConstruct"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTable;

TimestreamTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTable;

TimestreamTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTable;

TimestreamTable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTable;

TimestreamTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TimestreamTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TimestreamTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TimestreamTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TimestreamTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TimestreamTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.magneticStoreWriteProperties">magneticStoreWriteProperties</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference">TimestreamTableMagneticStoreWritePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.retentionProperties">retentionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference">TimestreamTableRetentionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference">TimestreamTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList">TimestreamTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.magneticStoreWritePropertiesInput">magneticStoreWritePropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.retentionPropertiesInput">retentionPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.schemaInput">schemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `magneticStoreWriteProperties`<sup>Required</sup> <a name="magneticStoreWriteProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.magneticStoreWriteProperties"></a>

```java
public TimestreamTableMagneticStoreWritePropertiesOutputReference getMagneticStoreWriteProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference">TimestreamTableMagneticStoreWritePropertiesOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `retentionProperties`<sup>Required</sup> <a name="retentionProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.retentionProperties"></a>

```java
public TimestreamTableRetentionPropertiesOutputReference getRetentionProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference">TimestreamTableRetentionPropertiesOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.schema"></a>

```java
public TimestreamTableSchemaOutputReference getSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference">TimestreamTableSchemaOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tags"></a>

```java
public TimestreamTableTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList">TimestreamTableTagsList</a>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `magneticStoreWritePropertiesInput`<sup>Optional</sup> <a name="magneticStoreWritePropertiesInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.magneticStoreWritePropertiesInput"></a>

```java
public IResolvable|TimestreamTableMagneticStoreWriteProperties getMagneticStoreWritePropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a>

---

##### `retentionPropertiesInput`<sup>Optional</sup> <a name="retentionPropertiesInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.retentionPropertiesInput"></a>

```java
public IResolvable|TimestreamTableRetentionProperties getRetentionPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.schemaInput"></a>

```java
public IResolvable|TimestreamTableSchema getSchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tagsInput"></a>

```java
public IResolvable|java.util.List<TimestreamTableTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreamTableConfig <a name="TimestreamTableConfig" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTableConfig;

TimestreamTableConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .databaseName(java.lang.String)
//  .magneticStoreWriteProperties(TimestreamTableMagneticStoreWriteProperties)
//  .retentionProperties(TimestreamTableRetentionProperties)
//  .schema(TimestreamTableSchema)
//  .tableName(java.lang.String)
//  .tags(IResolvable|java.util.List<TimestreamTableTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name for the database which the table to be created belongs to. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.magneticStoreWriteProperties">magneticStoreWriteProperties</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a></code> | The properties that determine whether magnetic store writes are enabled. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.retentionProperties">retentionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a></code> | The retention duration of the memory store and the magnetic store. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a></code> | A Schema specifies the expected data model of the table. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.tableName">tableName</a></code> | <code>java.lang.String</code> | The name for the table. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

The name for the database which the table to be created belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#database_name TimestreamTable#database_name}

---

##### `magneticStoreWriteProperties`<sup>Optional</sup> <a name="magneticStoreWriteProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.magneticStoreWriteProperties"></a>

```java
public TimestreamTableMagneticStoreWriteProperties getMagneticStoreWriteProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a>

The properties that determine whether magnetic store writes are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#magnetic_store_write_properties TimestreamTable#magnetic_store_write_properties}

---

##### `retentionProperties`<sup>Optional</sup> <a name="retentionProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.retentionProperties"></a>

```java
public TimestreamTableRetentionProperties getRetentionProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a>

The retention duration of the memory store and the magnetic store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#retention_properties TimestreamTable#retention_properties}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.schema"></a>

```java
public TimestreamTableSchema getSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a>

A Schema specifies the expected data model of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#schema TimestreamTable#schema}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

The name for the table.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#table_name TimestreamTable#table_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.tags"></a>

```java
public IResolvable|java.util.List<TimestreamTableTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#tags TimestreamTable#tags}

---

### TimestreamTableMagneticStoreWriteProperties <a name="TimestreamTableMagneticStoreWriteProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTableMagneticStoreWriteProperties;

TimestreamTableMagneticStoreWriteProperties.builder()
//  .enableMagneticStoreWrites(java.lang.Boolean|IResolvable)
//  .magneticStoreRejectedDataLocation(TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties.property.enableMagneticStoreWrites">enableMagneticStoreWrites</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Boolean flag indicating whether magnetic store writes are enabled. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties.property.magneticStoreRejectedDataLocation">magneticStoreRejectedDataLocation</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a></code> | Location to store information about records that were asynchronously rejected during magnetic store writes. |

---

##### `enableMagneticStoreWrites`<sup>Optional</sup> <a name="enableMagneticStoreWrites" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties.property.enableMagneticStoreWrites"></a>

```java
public java.lang.Boolean|IResolvable getEnableMagneticStoreWrites();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Boolean flag indicating whether magnetic store writes are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#enable_magnetic_store_writes TimestreamTable#enable_magnetic_store_writes}

---

##### `magneticStoreRejectedDataLocation`<sup>Optional</sup> <a name="magneticStoreRejectedDataLocation" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties.property.magneticStoreRejectedDataLocation"></a>

```java
public TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation getMagneticStoreRejectedDataLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a>

Location to store information about records that were asynchronously rejected during magnetic store writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#magnetic_store_rejected_data_location TimestreamTable#magnetic_store_rejected_data_location}

---

### TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation <a name="TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation;

TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation.builder()
//  .s3Configuration(TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a></code> | S3 configuration for location to store rejections from magnetic store writes. |

---

##### `s3Configuration`<sup>Optional</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation.property.s3Configuration"></a>

```java
public TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration getS3Configuration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a>

S3 configuration for location to store rejections from magnetic store writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#s3_configuration TimestreamTable#s3_configuration}

---

### TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration <a name="TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration;

TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.builder()
//  .bucketName(java.lang.String)
//  .encryptionOption(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .objectKeyPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The bucket name used to store the data. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.encryptionOption">encryptionOption</a></code> | <code>java.lang.String</code> | Either SSE_KMS or SSE_S3. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Must be provided if SSE_KMS is specified as the encryption option. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.objectKeyPrefix">objectKeyPrefix</a></code> | <code>java.lang.String</code> | String used to prefix all data in the bucket. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The bucket name used to store the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#bucket_name TimestreamTable#bucket_name}

---

##### `encryptionOption`<sup>Optional</sup> <a name="encryptionOption" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.encryptionOption"></a>

```java
public java.lang.String getEncryptionOption();
```

- *Type:* java.lang.String

Either SSE_KMS or SSE_S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#encryption_option TimestreamTable#encryption_option}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Must be provided if SSE_KMS is specified as the encryption option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#kms_key_id TimestreamTable#kms_key_id}

---

##### `objectKeyPrefix`<sup>Optional</sup> <a name="objectKeyPrefix" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.objectKeyPrefix"></a>

```java
public java.lang.String getObjectKeyPrefix();
```

- *Type:* java.lang.String

String used to prefix all data in the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#object_key_prefix TimestreamTable#object_key_prefix}

---

### TimestreamTableRetentionProperties <a name="TimestreamTableRetentionProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTableRetentionProperties;

TimestreamTableRetentionProperties.builder()
//  .magneticStoreRetentionPeriodInDays(java.lang.String)
//  .memoryStoreRetentionPeriodInHours(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties.property.magneticStoreRetentionPeriodInDays">magneticStoreRetentionPeriodInDays</a></code> | <code>java.lang.String</code> | The duration for which data must be stored in the magnetic store. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties.property.memoryStoreRetentionPeriodInHours">memoryStoreRetentionPeriodInHours</a></code> | <code>java.lang.String</code> | The duration for which data must be stored in the memory store. |

---

##### `magneticStoreRetentionPeriodInDays`<sup>Optional</sup> <a name="magneticStoreRetentionPeriodInDays" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties.property.magneticStoreRetentionPeriodInDays"></a>

```java
public java.lang.String getMagneticStoreRetentionPeriodInDays();
```

- *Type:* java.lang.String

The duration for which data must be stored in the magnetic store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#magnetic_store_retention_period_in_days TimestreamTable#magnetic_store_retention_period_in_days}

---

##### `memoryStoreRetentionPeriodInHours`<sup>Optional</sup> <a name="memoryStoreRetentionPeriodInHours" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties.property.memoryStoreRetentionPeriodInHours"></a>

```java
public java.lang.String getMemoryStoreRetentionPeriodInHours();
```

- *Type:* java.lang.String

The duration for which data must be stored in the memory store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#memory_store_retention_period_in_hours TimestreamTable#memory_store_retention_period_in_hours}

---

### TimestreamTableSchema <a name="TimestreamTableSchema" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTableSchema;

TimestreamTableSchema.builder()
//  .compositePartitionKey(IResolvable|java.util.List<TimestreamTableSchemaCompositePartitionKey>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema.property.compositePartitionKey">compositePartitionKey</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>></code> | A list of partition keys defining the attributes used to partition the table data. |

---

##### `compositePartitionKey`<sup>Optional</sup> <a name="compositePartitionKey" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema.property.compositePartitionKey"></a>

```java
public IResolvable|java.util.List<TimestreamTableSchemaCompositePartitionKey> getCompositePartitionKey();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>>

A list of partition keys defining the attributes used to partition the table data.

The order of the list determines the partition hierarchy. The name and type of each partition key as well as the partition key order cannot be changed after the table is created. However, the enforcement level of each partition key can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#composite_partition_key TimestreamTable#composite_partition_key}

---

### TimestreamTableSchemaCompositePartitionKey <a name="TimestreamTableSchemaCompositePartitionKey" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTableSchemaCompositePartitionKey;

TimestreamTableSchemaCompositePartitionKey.builder()
//  .enforcementInRecord(java.lang.String)
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.enforcementInRecord">enforcementInRecord</a></code> | <code>java.lang.String</code> | The level of enforcement for the specification of a dimension key in ingested records. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.name">name</a></code> | <code>java.lang.String</code> | The name of the attribute used for a dimension key. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.type">type</a></code> | <code>java.lang.String</code> | The type of the partition key. Options are DIMENSION (dimension key) and MEASURE (measure key). |

---

##### `enforcementInRecord`<sup>Optional</sup> <a name="enforcementInRecord" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.enforcementInRecord"></a>

```java
public java.lang.String getEnforcementInRecord();
```

- *Type:* java.lang.String

The level of enforcement for the specification of a dimension key in ingested records.

Options are REQUIRED (dimension key must be specified) and OPTIONAL (dimension key does not have to be specified).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#enforcement_in_record TimestreamTable#enforcement_in_record}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the attribute used for a dimension key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#name TimestreamTable#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the partition key. Options are DIMENSION (dimension key) and MEASURE (measure key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#type TimestreamTable#type}

---

### TimestreamTableTags <a name="TimestreamTableTags" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTableTags;

TimestreamTableTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#key TimestreamTable#key}. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#value TimestreamTable#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#key TimestreamTable#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#value TimestreamTable#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference <a name="TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference;

new TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.putS3Configuration">putS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resetS3Configuration">resetS3Configuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Configuration` <a name="putS3Configuration" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.putS3Configuration"></a>

```java
public void putS3Configuration(TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a>

---

##### `resetS3Configuration` <a name="resetS3Configuration" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resetS3Configuration"></a>

```java
public void resetS3Configuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3ConfigurationInput">s3ConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3Configuration"></a>

```java
public TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference getS3Configuration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference</a>

---

##### `s3ConfigurationInput`<sup>Optional</sup> <a name="s3ConfigurationInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3ConfigurationInput"></a>

```java
public IResolvable|TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration getS3ConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a>

---


### TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference <a name="TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference;

new TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetEncryptionOption">resetEncryptionOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetObjectKeyPrefix">resetObjectKeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetEncryptionOption` <a name="resetEncryptionOption" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetEncryptionOption"></a>

```java
public void resetEncryptionOption()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetObjectKeyPrefix` <a name="resetObjectKeyPrefix" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetObjectKeyPrefix"></a>

```java
public void resetObjectKeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOptionInput">encryptionOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefixInput">objectKeyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOption">encryptionOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefix">objectKeyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionOptionInput`<sup>Optional</sup> <a name="encryptionOptionInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOptionInput"></a>

```java
public java.lang.String getEncryptionOptionInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `objectKeyPrefixInput`<sup>Optional</sup> <a name="objectKeyPrefixInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefixInput"></a>

```java
public java.lang.String getObjectKeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `encryptionOption`<sup>Required</sup> <a name="encryptionOption" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOption"></a>

```java
public java.lang.String getEncryptionOption();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `objectKeyPrefix`<sup>Required</sup> <a name="objectKeyPrefix" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefix"></a>

```java
public java.lang.String getObjectKeyPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a>

---


### TimestreamTableMagneticStoreWritePropertiesOutputReference <a name="TimestreamTableMagneticStoreWritePropertiesOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTableMagneticStoreWritePropertiesOutputReference;

new TimestreamTableMagneticStoreWritePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.putMagneticStoreRejectedDataLocation">putMagneticStoreRejectedDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resetEnableMagneticStoreWrites">resetEnableMagneticStoreWrites</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resetMagneticStoreRejectedDataLocation">resetMagneticStoreRejectedDataLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMagneticStoreRejectedDataLocation` <a name="putMagneticStoreRejectedDataLocation" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.putMagneticStoreRejectedDataLocation"></a>

```java
public void putMagneticStoreRejectedDataLocation(TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.putMagneticStoreRejectedDataLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a>

---

##### `resetEnableMagneticStoreWrites` <a name="resetEnableMagneticStoreWrites" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resetEnableMagneticStoreWrites"></a>

```java
public void resetEnableMagneticStoreWrites()
```

##### `resetMagneticStoreRejectedDataLocation` <a name="resetMagneticStoreRejectedDataLocation" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resetMagneticStoreRejectedDataLocation"></a>

```java
public void resetMagneticStoreRejectedDataLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocation">magneticStoreRejectedDataLocation</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWritesInput">enableMagneticStoreWritesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocationInput">magneticStoreRejectedDataLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWrites">enableMagneticStoreWrites</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `magneticStoreRejectedDataLocation`<sup>Required</sup> <a name="magneticStoreRejectedDataLocation" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocation"></a>

```java
public TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference getMagneticStoreRejectedDataLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference</a>

---

##### `enableMagneticStoreWritesInput`<sup>Optional</sup> <a name="enableMagneticStoreWritesInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWritesInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableMagneticStoreWritesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `magneticStoreRejectedDataLocationInput`<sup>Optional</sup> <a name="magneticStoreRejectedDataLocationInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocationInput"></a>

```java
public IResolvable|TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation getMagneticStoreRejectedDataLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a>

---

##### `enableMagneticStoreWrites`<sup>Required</sup> <a name="enableMagneticStoreWrites" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWrites"></a>

```java
public java.lang.Boolean|IResolvable getEnableMagneticStoreWrites();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamTableMagneticStoreWriteProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a>

---


### TimestreamTableRetentionPropertiesOutputReference <a name="TimestreamTableRetentionPropertiesOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTableRetentionPropertiesOutputReference;

new TimestreamTableRetentionPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resetMagneticStoreRetentionPeriodInDays">resetMagneticStoreRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resetMemoryStoreRetentionPeriodInHours">resetMemoryStoreRetentionPeriodInHours</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMagneticStoreRetentionPeriodInDays` <a name="resetMagneticStoreRetentionPeriodInDays" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resetMagneticStoreRetentionPeriodInDays"></a>

```java
public void resetMagneticStoreRetentionPeriodInDays()
```

##### `resetMemoryStoreRetentionPeriodInHours` <a name="resetMemoryStoreRetentionPeriodInHours" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resetMemoryStoreRetentionPeriodInHours"></a>

```java
public void resetMemoryStoreRetentionPeriodInHours()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDaysInput">magneticStoreRetentionPeriodInDaysInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHoursInput">memoryStoreRetentionPeriodInHoursInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDays">magneticStoreRetentionPeriodInDays</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHours">memoryStoreRetentionPeriodInHours</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `magneticStoreRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="magneticStoreRetentionPeriodInDaysInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDaysInput"></a>

```java
public java.lang.String getMagneticStoreRetentionPeriodInDaysInput();
```

- *Type:* java.lang.String

---

##### `memoryStoreRetentionPeriodInHoursInput`<sup>Optional</sup> <a name="memoryStoreRetentionPeriodInHoursInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHoursInput"></a>

```java
public java.lang.String getMemoryStoreRetentionPeriodInHoursInput();
```

- *Type:* java.lang.String

---

##### `magneticStoreRetentionPeriodInDays`<sup>Required</sup> <a name="magneticStoreRetentionPeriodInDays" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDays"></a>

```java
public java.lang.String getMagneticStoreRetentionPeriodInDays();
```

- *Type:* java.lang.String

---

##### `memoryStoreRetentionPeriodInHours`<sup>Required</sup> <a name="memoryStoreRetentionPeriodInHours" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHours"></a>

```java
public java.lang.String getMemoryStoreRetentionPeriodInHours();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamTableRetentionProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a>

---


### TimestreamTableSchemaCompositePartitionKeyList <a name="TimestreamTableSchemaCompositePartitionKeyList" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTableSchemaCompositePartitionKeyList;

new TimestreamTableSchemaCompositePartitionKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.get"></a>

```java
public TimestreamTableSchemaCompositePartitionKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TimestreamTableSchemaCompositePartitionKey> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>>

---


### TimestreamTableSchemaCompositePartitionKeyOutputReference <a name="TimestreamTableSchemaCompositePartitionKeyOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTableSchemaCompositePartitionKeyOutputReference;

new TimestreamTableSchemaCompositePartitionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetEnforcementInRecord">resetEnforcementInRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnforcementInRecord` <a name="resetEnforcementInRecord" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetEnforcementInRecord"></a>

```java
public void resetEnforcementInRecord()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecordInput">enforcementInRecordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecord">enforcementInRecord</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enforcementInRecordInput`<sup>Optional</sup> <a name="enforcementInRecordInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecordInput"></a>

```java
public java.lang.String getEnforcementInRecordInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `enforcementInRecord`<sup>Required</sup> <a name="enforcementInRecord" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecord"></a>

```java
public java.lang.String getEnforcementInRecord();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamTableSchemaCompositePartitionKey getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>

---


### TimestreamTableSchemaOutputReference <a name="TimestreamTableSchemaOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTableSchemaOutputReference;

new TimestreamTableSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.putCompositePartitionKey">putCompositePartitionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.resetCompositePartitionKey">resetCompositePartitionKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCompositePartitionKey` <a name="putCompositePartitionKey" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.putCompositePartitionKey"></a>

```java
public void putCompositePartitionKey(IResolvable|java.util.List<TimestreamTableSchemaCompositePartitionKey> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.putCompositePartitionKey.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>>

---

##### `resetCompositePartitionKey` <a name="resetCompositePartitionKey" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.resetCompositePartitionKey"></a>

```java
public void resetCompositePartitionKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.compositePartitionKey">compositePartitionKey</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList">TimestreamTableSchemaCompositePartitionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.compositePartitionKeyInput">compositePartitionKeyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compositePartitionKey`<sup>Required</sup> <a name="compositePartitionKey" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.compositePartitionKey"></a>

```java
public TimestreamTableSchemaCompositePartitionKeyList getCompositePartitionKey();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList">TimestreamTableSchemaCompositePartitionKeyList</a>

---

##### `compositePartitionKeyInput`<sup>Optional</sup> <a name="compositePartitionKeyInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.compositePartitionKeyInput"></a>

```java
public IResolvable|java.util.List<TimestreamTableSchemaCompositePartitionKey> getCompositePartitionKeyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamTableSchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a>

---


### TimestreamTableTagsList <a name="TimestreamTableTagsList" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTableTagsList;

new TimestreamTableTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.get"></a>

```java
public TimestreamTableTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TimestreamTableTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>>

---


### TimestreamTableTagsOutputReference <a name="TimestreamTableTagsOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_table.TimestreamTableTagsOutputReference;

new TimestreamTableTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamTableTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>

---



