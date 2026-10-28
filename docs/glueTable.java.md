# `glueTable` Submodule <a name="`glueTable` Submodule" id="@cdktn/provider-awscc.glueTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueTable <a name="GlueTable" id="@cdktn/provider-awscc.glueTable.GlueTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table awscc_glue_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTable;

GlueTable.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogId(java.lang.String)
    .databaseName(java.lang.String)
//  .name(java.lang.String)
//  .openTableFormatInput(GlueTableOpenTableFormatInput)
//  .tableInput(GlueTableTableInput)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.catalogId">catalogId</a></code> | <code>java.lang.String</code> | The ID of the Data Catalog in which to create the Table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name of the database where the table metadata resides. For Hive compatibility, this must be all lowercase. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The table name. For Hive compatibility, this is folded to lowercase when it is stored. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.openTableFormatInput">openTableFormatInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput">GlueTableOpenTableFormatInput</a></code> | Specifies an OpenTableFormatInput structure when creating an open format table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.tableInput">tableInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput">GlueTableTableInput</a></code> | A structure used to define a table. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.catalogId"></a>

- *Type:* java.lang.String

The ID of the Data Catalog in which to create the Table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#catalog_id GlueTable#catalog_id}

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

The name of the database where the table metadata resides. For Hive compatibility, this must be all lowercase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#database_name GlueTable#database_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The table name. For Hive compatibility, this is folded to lowercase when it is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `openTableFormatInput`<sup>Optional</sup> <a name="openTableFormatInput" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.openTableFormatInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput">GlueTableOpenTableFormatInput</a>

Specifies an OpenTableFormatInput structure when creating an open format table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#open_table_format_input GlueTable#open_table_format_input}

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.tableInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput">GlueTableTableInput</a>

A structure used to define a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#table_input GlueTable#table_input}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.putOpenTableFormatInput">putOpenTableFormatInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.putTableInput">putTableInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.resetOpenTableFormatInput">resetOpenTableFormatInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.resetTableInput">resetTableInput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueTable.GlueTable.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueTable.GlueTable.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueTable.GlueTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueTable.GlueTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueTable.GlueTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueTable.GlueTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueTable.GlueTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueTable.GlueTable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueTable.GlueTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueTable.GlueTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueTable.GlueTable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueTable.GlueTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueTable.GlueTable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueTable.GlueTable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTable.GlueTable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTable.GlueTable.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueTable.GlueTable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTable.GlueTable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueTable.GlueTable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueTable.GlueTable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueTable.GlueTable.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueTable.GlueTable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTable.GlueTable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOpenTableFormatInput` <a name="putOpenTableFormatInput" id="@cdktn/provider-awscc.glueTable.GlueTable.putOpenTableFormatInput"></a>

```java
public void putOpenTableFormatInput(GlueTableOpenTableFormatInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTable.putOpenTableFormatInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput">GlueTableOpenTableFormatInput</a>

---

##### `putTableInput` <a name="putTableInput" id="@cdktn/provider-awscc.glueTable.GlueTable.putTableInput"></a>

```java
public void putTableInput(GlueTableTableInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTable.putTableInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput">GlueTableTableInput</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueTable.GlueTable.resetName"></a>

```java
public void resetName()
```

##### `resetOpenTableFormatInput` <a name="resetOpenTableFormatInput" id="@cdktn/provider-awscc.glueTable.GlueTable.resetOpenTableFormatInput"></a>

```java
public void resetOpenTableFormatInput()
```

##### `resetTableInput` <a name="resetTableInput" id="@cdktn/provider-awscc.glueTable.GlueTable.resetTableInput"></a>

```java
public void resetTableInput()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueTable.GlueTable.isConstruct"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTable;

GlueTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTable.GlueTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueTable.GlueTable.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTable;

GlueTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTable.GlueTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueTable.GlueTable.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTable;

GlueTable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTable.GlueTable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueTable.GlueTable.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTable;

GlueTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GlueTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GlueTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueTable.GlueTable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueTable.GlueTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GlueTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueTable.GlueTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GlueTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTable.GlueTable.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GlueTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.openTableFormatInput">openTableFormatInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference">GlueTableOpenTableFormatInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.tableInput">tableInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference">GlueTableTableInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.openTableFormatInputInput">openTableFormatInputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput">GlueTableOpenTableFormatInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.tableInputInput">tableInputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput">GlueTableTableInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueTable.GlueTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueTable.GlueTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueTable.GlueTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueTable.GlueTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueTable.GlueTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueTable.GlueTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueTable.GlueTable.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueTable.GlueTable.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueTable.GlueTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueTable.GlueTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueTable.GlueTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTable.GlueTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueTable.GlueTable.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTable.GlueTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `openTableFormatInput`<sup>Required</sup> <a name="openTableFormatInput" id="@cdktn/provider-awscc.glueTable.GlueTable.property.openTableFormatInput"></a>

```java
public GlueTableOpenTableFormatInputOutputReference getOpenTableFormatInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference">GlueTableOpenTableFormatInputOutputReference</a>

---

##### `tableInput`<sup>Required</sup> <a name="tableInput" id="@cdktn/provider-awscc.glueTable.GlueTable.property.tableInput"></a>

```java
public GlueTableTableInputOutputReference getTableInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference">GlueTableTableInputOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.glueTable.GlueTable.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.glueTable.GlueTable.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueTable.GlueTable.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `openTableFormatInputInput`<sup>Optional</sup> <a name="openTableFormatInputInput" id="@cdktn/provider-awscc.glueTable.GlueTable.property.openTableFormatInputInput"></a>

```java
public IResolvable|GlueTableOpenTableFormatInput getOpenTableFormatInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput">GlueTableOpenTableFormatInput</a>

---

##### `tableInputInput`<sup>Optional</sup> <a name="tableInputInput" id="@cdktn/provider-awscc.glueTable.GlueTable.property.tableInputInput"></a>

```java
public IResolvable|GlueTableTableInput getTableInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput">GlueTableTableInput</a>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueTable.GlueTable.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueTable.GlueTable.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueTable.GlueTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlueTableConfig <a name="GlueTableConfig" id="@cdktn/provider-awscc.glueTable.GlueTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableConfig;

GlueTableConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogId(java.lang.String)
    .databaseName(java.lang.String)
//  .name(java.lang.String)
//  .openTableFormatInput(GlueTableOpenTableFormatInput)
//  .tableInput(GlueTableTableInput)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | The ID of the Data Catalog in which to create the Table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name of the database where the table metadata resides. For Hive compatibility, this must be all lowercase. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.name">name</a></code> | <code>java.lang.String</code> | The table name. For Hive compatibility, this is folded to lowercase when it is stored. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.openTableFormatInput">openTableFormatInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput">GlueTableOpenTableFormatInput</a></code> | Specifies an OpenTableFormatInput structure when creating an open format table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.tableInput">tableInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput">GlueTableTableInput</a></code> | A structure used to define a table. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

The ID of the Data Catalog in which to create the Table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#catalog_id GlueTable#catalog_id}

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

The name of the database where the table metadata resides. For Hive compatibility, this must be all lowercase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#database_name GlueTable#database_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The table name. For Hive compatibility, this is folded to lowercase when it is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `openTableFormatInput`<sup>Optional</sup> <a name="openTableFormatInput" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.openTableFormatInput"></a>

```java
public GlueTableOpenTableFormatInput getOpenTableFormatInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput">GlueTableOpenTableFormatInput</a>

Specifies an OpenTableFormatInput structure when creating an open format table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#open_table_format_input GlueTable#open_table_format_input}

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.tableInput"></a>

```java
public GlueTableTableInput getTableInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput">GlueTableTableInput</a>

A structure used to define a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#table_input GlueTable#table_input}

---

### GlueTableOpenTableFormatInput <a name="GlueTableOpenTableFormatInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInput;

GlueTableOpenTableFormatInput.builder()
//  .icebergInput(GlueTableOpenTableFormatInputIcebergInput)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput.property.icebergInput">icebergInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput">GlueTableOpenTableFormatInputIcebergInput</a></code> | Specifies an IcebergInput structure that defines an Apache Iceberg metadata table. |

---

##### `icebergInput`<sup>Optional</sup> <a name="icebergInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput.property.icebergInput"></a>

```java
public GlueTableOpenTableFormatInputIcebergInput getIcebergInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput">GlueTableOpenTableFormatInputIcebergInput</a>

Specifies an IcebergInput structure that defines an Apache Iceberg metadata table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#iceberg_input GlueTable#iceberg_input}

---

### GlueTableOpenTableFormatInputIcebergInput <a name="GlueTableOpenTableFormatInputIcebergInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInput;

GlueTableOpenTableFormatInputIcebergInput.builder()
//  .icebergTableInput(GlueTableOpenTableFormatInputIcebergInputIcebergTableInput)
//  .metadataOperation(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput.property.icebergTableInput">icebergTableInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a></code> | Specifies the Iceberg table configuration. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput.property.metadataOperation">metadataOperation</a></code> | <code>java.lang.String</code> | A required metadata operation. Can only be set to CREATE. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput.property.version">version</a></code> | <code>java.lang.String</code> | The table version of the Iceberg table. Defaults to 2. |

---

##### `icebergTableInput`<sup>Optional</sup> <a name="icebergTableInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput.property.icebergTableInput"></a>

```java
public GlueTableOpenTableFormatInputIcebergInputIcebergTableInput getIcebergTableInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a>

Specifies the Iceberg table configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#iceberg_table_input GlueTable#iceberg_table_input}

---

##### `metadataOperation`<sup>Optional</sup> <a name="metadataOperation" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput.property.metadataOperation"></a>

```java
public java.lang.String getMetadataOperation();
```

- *Type:* java.lang.String

A required metadata operation. Can only be set to CREATE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#metadata_operation GlueTable#metadata_operation}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The table version of the Iceberg table. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#version GlueTable#version}

---

### GlueTableOpenTableFormatInputIcebergInputIcebergTableInput <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput;

GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.builder()
//  .location(java.lang.String)
//  .partitionSpec(GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .schema(GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema)
//  .writeOrder(GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.location">location</a></code> | <code>java.lang.String</code> | The location of the Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a></code> | The partition spec for the Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The properties for the Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a></code> | The schema for the Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.writeOrder">writeOrder</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a></code> | The write order for the Iceberg table. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#location GlueTable#location}

---

##### `partitionSpec`<sup>Optional</sup> <a name="partitionSpec" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.partitionSpec"></a>

```java
public GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec getPartitionSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a>

The partition spec for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#partition_spec GlueTable#partition_spec}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The properties for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#properties GlueTable#properties}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.schema"></a>

```java
public GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema getSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a>

The schema for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema GlueTable#schema}

---

##### `writeOrder`<sup>Optional</sup> <a name="writeOrder" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.writeOrder"></a>

```java
public GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder getWriteOrder();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a>

The write order for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#write_order GlueTable#write_order}

---

### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec;

GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.builder()
//  .fields(IResolvable|java.util.List<GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields>)
//  .specId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>></code> | The partition fields. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.property.specId">specId</a></code> | <code>java.lang.Number</code> | The spec ID. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.property.fields"></a>

```java
public IResolvable|java.util.List<GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>>

The partition fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#fields GlueTable#fields}

---

##### `specId`<sup>Optional</sup> <a name="specId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.property.specId"></a>

```java
public java.lang.Number getSpecId();
```

- *Type:* java.lang.Number

The spec ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#spec_id GlueTable#spec_id}

---

### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields;

GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.builder()
//  .fieldId(java.lang.Number)
//  .name(java.lang.String)
//  .sourceId(java.lang.Number)
//  .transform(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.fieldId">fieldId</a></code> | <code>java.lang.Number</code> | The partition field ID. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.name">name</a></code> | <code>java.lang.String</code> | The partition field name. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.sourceId">sourceId</a></code> | <code>java.lang.Number</code> | The source field ID. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.transform">transform</a></code> | <code>java.lang.String</code> | The transform to apply. |

---

##### `fieldId`<sup>Optional</sup> <a name="fieldId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.fieldId"></a>

```java
public java.lang.Number getFieldId();
```

- *Type:* java.lang.Number

The partition field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#field_id GlueTable#field_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The partition field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `sourceId`<sup>Optional</sup> <a name="sourceId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.sourceId"></a>

```java
public java.lang.Number getSourceId();
```

- *Type:* java.lang.Number

The source field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#source_id GlueTable#source_id}

---

##### `transform`<sup>Optional</sup> <a name="transform" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.transform"></a>

```java
public java.lang.String getTransform();
```

- *Type:* java.lang.String

The transform to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#transform GlueTable#transform}

---

### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema;

GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.builder()
//  .fields(IResolvable|java.util.List<GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields>)
//  .identifierFieldIds(java.util.List<java.lang.Number>)
//  .schemaId(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>></code> | The fields in the schema. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.identifierFieldIds">identifierFieldIds</a></code> | <code>java.util.List<java.lang.Number></code> | The identifier field IDs. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.schemaId">schemaId</a></code> | <code>java.lang.Number</code> | The schema ID. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.type">type</a></code> | <code>java.lang.String</code> | The type of the schema. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.fields"></a>

```java
public IResolvable|java.util.List<GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>>

The fields in the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#fields GlueTable#fields}

---

##### `identifierFieldIds`<sup>Optional</sup> <a name="identifierFieldIds" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.identifierFieldIds"></a>

```java
public java.util.List<java.lang.Number> getIdentifierFieldIds();
```

- *Type:* java.util.List<java.lang.Number>

The identifier field IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#identifier_field_ids GlueTable#identifier_field_ids}

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.schemaId"></a>

```java
public java.lang.Number getSchemaId();
```

- *Type:* java.lang.Number

The schema ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_id GlueTable#schema_id}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#type GlueTable#type}

---

### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields;

GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.builder()
//  .doc(java.lang.String)
//  .id(java.lang.Number)
//  .name(java.lang.String)
//  .required(java.lang.Boolean|IResolvable)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.doc">doc</a></code> | <code>java.lang.String</code> | Documentation for the field. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.id">id</a></code> | <code>java.lang.Number</code> | The field ID. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.name">name</a></code> | <code>java.lang.String</code> | The field name. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the field is required. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.type">type</a></code> | <code>java.lang.String</code> | The field type. |

---

##### `doc`<sup>Optional</sup> <a name="doc" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.doc"></a>

```java
public java.lang.String getDoc();
```

- *Type:* java.lang.String

Documentation for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#doc GlueTable#doc}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

The field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#id GlueTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#required GlueTable#required}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The field type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#type GlueTable#type}

---

### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder;

GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder.builder()
//  .fields(IResolvable|java.util.List<GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields>)
//  .orderId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>></code> | The sort fields. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder.property.orderId">orderId</a></code> | <code>java.lang.Number</code> | The order ID. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder.property.fields"></a>

```java
public IResolvable|java.util.List<GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>>

The sort fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#fields GlueTable#fields}

---

##### `orderId`<sup>Optional</sup> <a name="orderId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder.property.orderId"></a>

```java
public java.lang.Number getOrderId();
```

- *Type:* java.lang.Number

The order ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#order_id GlueTable#order_id}

---

### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields;

GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.builder()
//  .direction(java.lang.String)
//  .nullOrder(java.lang.String)
//  .sourceId(java.lang.Number)
//  .transform(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.property.direction">direction</a></code> | <code>java.lang.String</code> | The sort direction. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.property.nullOrder">nullOrder</a></code> | <code>java.lang.String</code> | The null ordering. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.property.sourceId">sourceId</a></code> | <code>java.lang.Number</code> | The source field ID. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.property.transform">transform</a></code> | <code>java.lang.String</code> | The transform to apply. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

The sort direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#direction GlueTable#direction}

---

##### `nullOrder`<sup>Optional</sup> <a name="nullOrder" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.property.nullOrder"></a>

```java
public java.lang.String getNullOrder();
```

- *Type:* java.lang.String

The null ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#null_order GlueTable#null_order}

---

##### `sourceId`<sup>Optional</sup> <a name="sourceId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.property.sourceId"></a>

```java
public java.lang.Number getSourceId();
```

- *Type:* java.lang.Number

The source field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#source_id GlueTable#source_id}

---

##### `transform`<sup>Optional</sup> <a name="transform" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.property.transform"></a>

```java
public java.lang.String getTransform();
```

- *Type:* java.lang.String

The transform to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#transform GlueTable#transform}

---

### GlueTableTableInput <a name="GlueTableTableInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInput;

GlueTableTableInput.builder()
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .owner(java.lang.String)
//  .parameters(java.lang.String)
//  .partitionKeys(IResolvable|java.util.List<GlueTableTableInputPartitionKeys>)
//  .retention(java.lang.Number)
//  .storageDescriptor(GlueTableTableInputStorageDescriptor)
//  .tableType(java.lang.String)
//  .targetTable(GlueTableTableInputTargetTable)
//  .viewDefinition(GlueTableTableInputViewDefinition)
//  .viewExpandedText(java.lang.String)
//  .viewOriginalText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.description">description</a></code> | <code>java.lang.String</code> | A description of the table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.name">name</a></code> | <code>java.lang.String</code> | The table name. For Hive compatibility, this is folded to lowercase when it is stored. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.owner">owner</a></code> | <code>java.lang.String</code> | The table owner. Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.parameters">parameters</a></code> | <code>java.lang.String</code> | These key-value pairs define properties associated with the table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.partitionKeys">partitionKeys</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a>></code> | A list of columns by which the table is partitioned. Only primitive types are supported as partition keys. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.retention">retention</a></code> | <code>java.lang.Number</code> | The retention time for this table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor">GlueTableTableInputStorageDescriptor</a></code> | A storage descriptor containing information about the physical storage of this table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.tableType">tableType</a></code> | <code>java.lang.String</code> | The type of this table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable">GlueTableTableInputTargetTable</a></code> | A TableIdentifier structure that describes a target table for resource linking. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.viewDefinition">viewDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition">GlueTableTableInputViewDefinition</a></code> | The view definition for the table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.viewExpandedText">viewExpandedText</a></code> | <code>java.lang.String</code> | Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.viewOriginalText">viewOriginalText</a></code> | <code>java.lang.String</code> | Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#description GlueTable#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The table name. For Hive compatibility, this is folded to lowercase when it is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

The table owner. Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#owner GlueTable#owner}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

These key-value pairs define properties associated with the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#parameters GlueTable#parameters}

---

##### `partitionKeys`<sup>Optional</sup> <a name="partitionKeys" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.partitionKeys"></a>

```java
public IResolvable|java.util.List<GlueTableTableInputPartitionKeys> getPartitionKeys();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a>>

A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#partition_keys GlueTable#partition_keys}

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.retention"></a>

```java
public java.lang.Number getRetention();
```

- *Type:* java.lang.Number

The retention time for this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#retention GlueTable#retention}

---

##### `storageDescriptor`<sup>Optional</sup> <a name="storageDescriptor" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.storageDescriptor"></a>

```java
public GlueTableTableInputStorageDescriptor getStorageDescriptor();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor">GlueTableTableInputStorageDescriptor</a>

A storage descriptor containing information about the physical storage of this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#storage_descriptor GlueTable#storage_descriptor}

---

##### `tableType`<sup>Optional</sup> <a name="tableType" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.tableType"></a>

```java
public java.lang.String getTableType();
```

- *Type:* java.lang.String

The type of this table.

AWS Glue will create tables with the EXTERNAL_TABLE type. Other services, such as Athena, may create tables with additional table types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#table_type GlueTable#table_type}

---

##### `targetTable`<sup>Optional</sup> <a name="targetTable" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.targetTable"></a>

```java
public GlueTableTableInputTargetTable getTargetTable();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable">GlueTableTableInputTargetTable</a>

A TableIdentifier structure that describes a target table for resource linking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#target_table GlueTable#target_table}

---

##### `viewDefinition`<sup>Optional</sup> <a name="viewDefinition" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.viewDefinition"></a>

```java
public GlueTableTableInputViewDefinition getViewDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition">GlueTableTableInputViewDefinition</a>

The view definition for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_definition GlueTable#view_definition}

---

##### `viewExpandedText`<sup>Optional</sup> <a name="viewExpandedText" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.viewExpandedText"></a>

```java
public java.lang.String getViewExpandedText();
```

- *Type:* java.lang.String

Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_expanded_text GlueTable#view_expanded_text}

---

##### `viewOriginalText`<sup>Optional</sup> <a name="viewOriginalText" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.viewOriginalText"></a>

```java
public java.lang.String getViewOriginalText();
```

- *Type:* java.lang.String

Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_original_text GlueTable#view_original_text}

---

### GlueTableTableInputPartitionKeys <a name="GlueTableTableInputPartitionKeys" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputPartitionKeys;

GlueTableTableInputPartitionKeys.builder()
//  .comment(java.lang.String)
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys.property.comment">comment</a></code> | <code>java.lang.String</code> | A free-form text comment. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Column. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys.property.type">type</a></code> | <code>java.lang.String</code> | The data type of the Column. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

A free-form text comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#comment GlueTable#comment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The data type of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#type GlueTable#type}

---

### GlueTableTableInputStorageDescriptor <a name="GlueTableTableInputStorageDescriptor" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputStorageDescriptor;

GlueTableTableInputStorageDescriptor.builder()
//  .bucketColumns(java.util.List<java.lang.String>)
//  .columns(IResolvable|java.util.List<GlueTableTableInputStorageDescriptorColumns>)
//  .compressed(java.lang.Boolean|IResolvable)
//  .inputFormat(java.lang.String)
//  .location(java.lang.String)
//  .numberOfBuckets(java.lang.Number)
//  .outputFormat(java.lang.String)
//  .parameters(java.lang.String)
//  .schemaReference(GlueTableTableInputStorageDescriptorSchemaReference)
//  .serdeInfo(GlueTableTableInputStorageDescriptorSerdeInfo)
//  .skewedInfo(GlueTableTableInputStorageDescriptorSkewedInfo)
//  .sortColumns(IResolvable|java.util.List<GlueTableTableInputStorageDescriptorSortColumns>)
//  .storedAsSubDirectories(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.bucketColumns">bucketColumns</a></code> | <code>java.util.List<java.lang.String></code> | A list of reducer grouping columns, clustering columns, and bucketing columns in the table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.columns">columns</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a>></code> | A list of the Columns in the table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.compressed">compressed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | True if the data in the table is compressed, or False if not. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.inputFormat">inputFormat</a></code> | <code>java.lang.String</code> | The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.location">location</a></code> | <code>java.lang.String</code> | The physical location of the table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.numberOfBuckets">numberOfBuckets</a></code> | <code>java.lang.Number</code> | Must be specified if the table contains any dimension columns. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.parameters">parameters</a></code> | <code>java.lang.String</code> | The user-supplied properties in key-value form. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.schemaReference">schemaReference</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference">GlueTableTableInputStorageDescriptorSchemaReference</a></code> | An object that references a schema stored in the AWS Glue Schema Registry. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.serdeInfo">serdeInfo</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo">GlueTableTableInputStorageDescriptorSerdeInfo</a></code> | The serialization/deserialization (SerDe) information. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.skewedInfo">skewedInfo</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo">GlueTableTableInputStorageDescriptorSkewedInfo</a></code> | The information about values that appear frequently in a column (skewed values). |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.sortColumns">sortColumns</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a>></code> | A list specifying the sort order of each bucket in the table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.storedAsSubDirectories">storedAsSubDirectories</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | True if the table data is stored in subdirectories, or False if not. |

---

##### `bucketColumns`<sup>Optional</sup> <a name="bucketColumns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.bucketColumns"></a>

```java
public java.util.List<java.lang.String> getBucketColumns();
```

- *Type:* java.util.List<java.lang.String>

A list of reducer grouping columns, clustering columns, and bucketing columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#bucket_columns GlueTable#bucket_columns}

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.columns"></a>

```java
public IResolvable|java.util.List<GlueTableTableInputStorageDescriptorColumns> getColumns();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a>>

A list of the Columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#columns GlueTable#columns}

---

##### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.compressed"></a>

```java
public java.lang.Boolean|IResolvable getCompressed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

True if the data in the table is compressed, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#compressed GlueTable#compressed}

---

##### `inputFormat`<sup>Optional</sup> <a name="inputFormat" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.inputFormat"></a>

```java
public java.lang.String getInputFormat();
```

- *Type:* java.lang.String

The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#input_format GlueTable#input_format}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The physical location of the table.

By default, this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#location GlueTable#location}

---

##### `numberOfBuckets`<sup>Optional</sup> <a name="numberOfBuckets" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.numberOfBuckets"></a>

```java
public java.lang.Number getNumberOfBuckets();
```

- *Type:* java.lang.Number

Must be specified if the table contains any dimension columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#number_of_buckets GlueTable#number_of_buckets}

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#output_format GlueTable#output_format}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

The user-supplied properties in key-value form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#parameters GlueTable#parameters}

---

##### `schemaReference`<sup>Optional</sup> <a name="schemaReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.schemaReference"></a>

```java
public GlueTableTableInputStorageDescriptorSchemaReference getSchemaReference();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference">GlueTableTableInputStorageDescriptorSchemaReference</a>

An object that references a schema stored in the AWS Glue Schema Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_reference GlueTable#schema_reference}

---

##### `serdeInfo`<sup>Optional</sup> <a name="serdeInfo" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.serdeInfo"></a>

```java
public GlueTableTableInputStorageDescriptorSerdeInfo getSerdeInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo">GlueTableTableInputStorageDescriptorSerdeInfo</a>

The serialization/deserialization (SerDe) information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#serde_info GlueTable#serde_info}

---

##### `skewedInfo`<sup>Optional</sup> <a name="skewedInfo" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.skewedInfo"></a>

```java
public GlueTableTableInputStorageDescriptorSkewedInfo getSkewedInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo">GlueTableTableInputStorageDescriptorSkewedInfo</a>

The information about values that appear frequently in a column (skewed values).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#skewed_info GlueTable#skewed_info}

---

##### `sortColumns`<sup>Optional</sup> <a name="sortColumns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.sortColumns"></a>

```java
public IResolvable|java.util.List<GlueTableTableInputStorageDescriptorSortColumns> getSortColumns();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a>>

A list specifying the sort order of each bucket in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#sort_columns GlueTable#sort_columns}

---

##### `storedAsSubDirectories`<sup>Optional</sup> <a name="storedAsSubDirectories" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.storedAsSubDirectories"></a>

```java
public java.lang.Boolean|IResolvable getStoredAsSubDirectories();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

True if the table data is stored in subdirectories, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#stored_as_sub_directories GlueTable#stored_as_sub_directories}

---

### GlueTableTableInputStorageDescriptorColumns <a name="GlueTableTableInputStorageDescriptorColumns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputStorageDescriptorColumns;

GlueTableTableInputStorageDescriptorColumns.builder()
//  .comment(java.lang.String)
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns.property.comment">comment</a></code> | <code>java.lang.String</code> | A free-form text comment. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Column. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns.property.type">type</a></code> | <code>java.lang.String</code> | The data type of the Column. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

A free-form text comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#comment GlueTable#comment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The data type of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#type GlueTable#type}

---

### GlueTableTableInputStorageDescriptorSchemaReference <a name="GlueTableTableInputStorageDescriptorSchemaReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputStorageDescriptorSchemaReference;

GlueTableTableInputStorageDescriptorSchemaReference.builder()
//  .schemaId(GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId)
//  .schemaVersionId(java.lang.String)
//  .schemaVersionNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference.property.schemaId">schemaId</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a></code> | A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference.property.schemaVersionId">schemaVersionId</a></code> | <code>java.lang.String</code> | The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference.property.schemaVersionNumber">schemaVersionNumber</a></code> | <code>java.lang.Number</code> | The version number of the schema. |

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference.property.schemaId"></a>

```java
public GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId getSchemaId();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a>

A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_id GlueTable#schema_id}

---

##### `schemaVersionId`<sup>Optional</sup> <a name="schemaVersionId" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference.property.schemaVersionId"></a>

```java
public java.lang.String getSchemaVersionId();
```

- *Type:* java.lang.String

The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_version_id GlueTable#schema_version_id}

---

##### `schemaVersionNumber`<sup>Optional</sup> <a name="schemaVersionNumber" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference.property.schemaVersionNumber"></a>

```java
public java.lang.Number getSchemaVersionNumber();
```

- *Type:* java.lang.Number

The version number of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_version_number GlueTable#schema_version_number}

---

### GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId <a name="GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId;

GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId.builder()
//  .registryName(java.lang.String)
//  .schemaArn(java.lang.String)
//  .schemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId.property.registryName">registryName</a></code> | <code>java.lang.String</code> | The name of the schema registry that contains the schema. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId.property.schemaArn">schemaArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | The name of the schema. One of SchemaArn or SchemaName has to be provided. |

---

##### `registryName`<sup>Optional</sup> <a name="registryName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId.property.registryName"></a>

```java
public java.lang.String getRegistryName();
```

- *Type:* java.lang.String

The name of the schema registry that contains the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#registry_name GlueTable#registry_name}

---

##### `schemaArn`<sup>Optional</sup> <a name="schemaArn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId.property.schemaArn"></a>

```java
public java.lang.String getSchemaArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_arn GlueTable#schema_arn}

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

The name of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_name GlueTable#schema_name}

---

### GlueTableTableInputStorageDescriptorSerdeInfo <a name="GlueTableTableInputStorageDescriptorSerdeInfo" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputStorageDescriptorSerdeInfo;

GlueTableTableInputStorageDescriptorSerdeInfo.builder()
//  .name(java.lang.String)
//  .parameters(java.lang.String)
//  .serializationLibrary(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo.property.name">name</a></code> | <code>java.lang.String</code> | Name of the SerDe. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo.property.parameters">parameters</a></code> | <code>java.lang.String</code> | These key-value pairs define initialization parameters for the SerDe. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo.property.serializationLibrary">serializationLibrary</a></code> | <code>java.lang.String</code> | Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

These key-value pairs define initialization parameters for the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#parameters GlueTable#parameters}

---

##### `serializationLibrary`<sup>Optional</sup> <a name="serializationLibrary" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo.property.serializationLibrary"></a>

```java
public java.lang.String getSerializationLibrary();
```

- *Type:* java.lang.String

Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#serialization_library GlueTable#serialization_library}

---

### GlueTableTableInputStorageDescriptorSkewedInfo <a name="GlueTableTableInputStorageDescriptorSkewedInfo" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputStorageDescriptorSkewedInfo;

GlueTableTableInputStorageDescriptorSkewedInfo.builder()
//  .skewedColumnNames(java.util.List<java.lang.String>)
//  .skewedColumnValueLocationMaps(java.lang.String)
//  .skewedColumnValues(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo.property.skewedColumnNames">skewedColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | A list of names of columns that contain skewed values. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps">skewedColumnValueLocationMaps</a></code> | <code>java.lang.String</code> | A mapping of skewed values to the columns that contain them. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo.property.skewedColumnValues">skewedColumnValues</a></code> | <code>java.util.List<java.lang.String></code> | A list of names of columns that contain skewed values. |

---

##### `skewedColumnNames`<sup>Optional</sup> <a name="skewedColumnNames" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo.property.skewedColumnNames"></a>

```java
public java.util.List<java.lang.String> getSkewedColumnNames();
```

- *Type:* java.util.List<java.lang.String>

A list of names of columns that contain skewed values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#skewed_column_names GlueTable#skewed_column_names}

---

##### `skewedColumnValueLocationMaps`<sup>Optional</sup> <a name="skewedColumnValueLocationMaps" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps"></a>

```java
public java.lang.String getSkewedColumnValueLocationMaps();
```

- *Type:* java.lang.String

A mapping of skewed values to the columns that contain them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#skewed_column_value_location_maps GlueTable#skewed_column_value_location_maps}

---

##### `skewedColumnValues`<sup>Optional</sup> <a name="skewedColumnValues" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo.property.skewedColumnValues"></a>

```java
public java.util.List<java.lang.String> getSkewedColumnValues();
```

- *Type:* java.util.List<java.lang.String>

A list of names of columns that contain skewed values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#skewed_column_values GlueTable#skewed_column_values}

---

### GlueTableTableInputStorageDescriptorSortColumns <a name="GlueTableTableInputStorageDescriptorSortColumns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputStorageDescriptorSortColumns;

GlueTableTableInputStorageDescriptorSortColumns.builder()
//  .column(java.lang.String)
//  .sortOrder(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns.property.column">column</a></code> | <code>java.lang.String</code> | The name of the column. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns.property.sortOrder">sortOrder</a></code> | <code>java.lang.Number</code> | Indicates that the column is sorted in ascending order (==1), or in descending order (==0). |

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns.property.column"></a>

```java
public java.lang.String getColumn();
```

- *Type:* java.lang.String

The name of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#column GlueTable#column}

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns.property.sortOrder"></a>

```java
public java.lang.Number getSortOrder();
```

- *Type:* java.lang.Number

Indicates that the column is sorted in ascending order (==1), or in descending order (==0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#sort_order GlueTable#sort_order}

---

### GlueTableTableInputTargetTable <a name="GlueTableTableInputTargetTable" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputTargetTable;

GlueTableTableInputTargetTable.builder()
//  .catalogId(java.lang.String)
//  .databaseName(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | The ID of the Data Catalog in which the table resides. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name of the catalog database that contains the target table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.property.name">name</a></code> | <code>java.lang.String</code> | The name of the target table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.property.region">region</a></code> | <code>java.lang.String</code> | The Region of the table. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

The ID of the Data Catalog in which the table resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#catalog_id GlueTable#catalog_id}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

The name of the catalog database that contains the target table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#database_name GlueTable#database_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the target table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The Region of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#region GlueTable#region}

---

### GlueTableTableInputViewDefinition <a name="GlueTableTableInputViewDefinition" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputViewDefinition;

GlueTableTableInputViewDefinition.builder()
//  .definer(java.lang.String)
//  .isProtected(java.lang.Boolean|IResolvable)
//  .representations(IResolvable|java.util.List<GlueTableTableInputViewDefinitionRepresentations>)
//  .subObjects(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.property.definer">definer</a></code> | <code>java.lang.String</code> | The definer of the view. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.property.isProtected">isProtected</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the view is protected. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.property.representations">representations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a>></code> | The representations of the view. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.property.subObjects">subObjects</a></code> | <code>java.util.List<java.lang.String></code> | The sub-objects of the view. |

---

##### `definer`<sup>Optional</sup> <a name="definer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.property.definer"></a>

```java
public java.lang.String getDefiner();
```

- *Type:* java.lang.String

The definer of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#definer GlueTable#definer}

---

##### `isProtected`<sup>Optional</sup> <a name="isProtected" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.property.isProtected"></a>

```java
public java.lang.Boolean|IResolvable getIsProtected();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the view is protected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#is_protected GlueTable#is_protected}

---

##### `representations`<sup>Optional</sup> <a name="representations" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.property.representations"></a>

```java
public IResolvable|java.util.List<GlueTableTableInputViewDefinitionRepresentations> getRepresentations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a>>

The representations of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#representations GlueTable#representations}

---

##### `subObjects`<sup>Optional</sup> <a name="subObjects" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.property.subObjects"></a>

```java
public java.util.List<java.lang.String> getSubObjects();
```

- *Type:* java.util.List<java.lang.String>

The sub-objects of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#sub_objects GlueTable#sub_objects}

---

### GlueTableTableInputViewDefinitionRepresentations <a name="GlueTableTableInputViewDefinitionRepresentations" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputViewDefinitionRepresentations;

GlueTableTableInputViewDefinitionRepresentations.builder()
//  .dialect(java.lang.String)
//  .dialectVersion(java.lang.String)
//  .validationConnection(java.lang.String)
//  .viewExpandedText(java.lang.String)
//  .viewOriginalText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.dialect">dialect</a></code> | <code>java.lang.String</code> | The dialect of the view representation. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.dialectVersion">dialectVersion</a></code> | <code>java.lang.String</code> | The version of the dialect. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.validationConnection">validationConnection</a></code> | <code>java.lang.String</code> | The connection used for validation. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.viewExpandedText">viewExpandedText</a></code> | <code>java.lang.String</code> | The expanded text of the view. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.viewOriginalText">viewOriginalText</a></code> | <code>java.lang.String</code> | The original text of the view. |

---

##### `dialect`<sup>Optional</sup> <a name="dialect" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.dialect"></a>

```java
public java.lang.String getDialect();
```

- *Type:* java.lang.String

The dialect of the view representation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#dialect GlueTable#dialect}

---

##### `dialectVersion`<sup>Optional</sup> <a name="dialectVersion" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.dialectVersion"></a>

```java
public java.lang.String getDialectVersion();
```

- *Type:* java.lang.String

The version of the dialect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#dialect_version GlueTable#dialect_version}

---

##### `validationConnection`<sup>Optional</sup> <a name="validationConnection" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.validationConnection"></a>

```java
public java.lang.String getValidationConnection();
```

- *Type:* java.lang.String

The connection used for validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#validation_connection GlueTable#validation_connection}

---

##### `viewExpandedText`<sup>Optional</sup> <a name="viewExpandedText" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.viewExpandedText"></a>

```java
public java.lang.String getViewExpandedText();
```

- *Type:* java.lang.String

The expanded text of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_expanded_text GlueTable#view_expanded_text}

---

##### `viewOriginalText`<sup>Optional</sup> <a name="viewOriginalText" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.viewOriginalText"></a>

```java
public java.lang.String getViewOriginalText();
```

- *Type:* java.lang.String

The original text of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_original_text GlueTable#view_original_text}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference;

new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putPartitionSpec">putPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putWriteOrder">putWriteOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetPartitionSpec">resetPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetWriteOrder">resetWriteOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartitionSpec` <a name="putPartitionSpec" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putPartitionSpec"></a>

```java
public void putPartitionSpec(GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putPartitionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a>

---

##### `putSchema` <a name="putSchema" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putSchema"></a>

```java
public void putSchema(GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a>

---

##### `putWriteOrder` <a name="putWriteOrder" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putWriteOrder"></a>

```java
public void putWriteOrder(GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putWriteOrder.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a>

---

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetPartitionSpec` <a name="resetPartitionSpec" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetPartitionSpec"></a>

```java
public void resetPartitionSpec()
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetWriteOrder` <a name="resetWriteOrder" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetWriteOrder"></a>

```java
public void resetWriteOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.writeOrder">writeOrder</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.partitionSpecInput">partitionSpecInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.schemaInput">schemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.writeOrderInput">writeOrderInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `partitionSpec`<sup>Required</sup> <a name="partitionSpec" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.partitionSpec"></a>

```java
public GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference getPartitionSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.schema"></a>

```java
public GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference getSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference</a>

---

##### `writeOrder`<sup>Required</sup> <a name="writeOrder" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.writeOrder"></a>

```java
public GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference getWriteOrder();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `partitionSpecInput`<sup>Optional</sup> <a name="partitionSpecInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.partitionSpecInput"></a>

```java
public IResolvable|GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec getPartitionSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.schemaInput"></a>

```java
public IResolvable|GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema getSchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a>

---

##### `writeOrderInput`<sup>Optional</sup> <a name="writeOrderInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.writeOrderInput"></a>

```java
public IResolvable|GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder getWriteOrderInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableOpenTableFormatInputIcebergInputIcebergTableInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a>

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList;

new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.get"></a>

```java
public GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>>

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference;

new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetFieldId">resetFieldId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetSourceId">resetSourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetTransform">resetTransform</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldId` <a name="resetFieldId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetFieldId"></a>

```java
public void resetFieldId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSourceId` <a name="resetSourceId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetSourceId"></a>

```java
public void resetSourceId()
```

##### `resetTransform` <a name="resetTransform" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetTransform"></a>

```java
public void resetTransform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fieldIdInput">fieldIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.sourceIdInput">sourceIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.transformInput">transformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fieldId">fieldId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.transform">transform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldIdInput`<sup>Optional</sup> <a name="fieldIdInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fieldIdInput"></a>

```java
public java.lang.Number getFieldIdInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.sourceIdInput"></a>

```java
public java.lang.Number getSourceIdInput();
```

- *Type:* java.lang.Number

---

##### `transformInput`<sup>Optional</sup> <a name="transformInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.transformInput"></a>

```java
public java.lang.String getTransformInput();
```

- *Type:* java.lang.String

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fieldId"></a>

```java
public java.lang.Number getFieldId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.sourceId"></a>

```java
public java.lang.Number getSourceId();
```

- *Type:* java.lang.Number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.transform"></a>

```java
public java.lang.String getTransform();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference;

new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resetSpecId">resetSpecId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>>

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resetFields"></a>

```java
public void resetFields()
```

##### `resetSpecId` <a name="resetSpecId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resetSpecId"></a>

```java
public void resetSpecId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.specIdInput">specIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.specId">specId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fields"></a>

```java
public GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>>

---

##### `specIdInput`<sup>Optional</sup> <a name="specIdInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.specIdInput"></a>

```java
public java.lang.Number getSpecIdInput();
```

- *Type:* java.lang.Number

---

##### `specId`<sup>Required</sup> <a name="specId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.specId"></a>

```java
public java.lang.Number getSpecId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a>

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList;

new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.get"></a>

```java
public GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>>

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference;

new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetDoc">resetDoc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDoc` <a name="resetDoc" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetDoc"></a>

```java
public void resetDoc()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetRequired"></a>

```java
public void resetRequired()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.docInput">docInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.doc">doc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `docInput`<sup>Optional</sup> <a name="docInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.docInput"></a>

```java
public java.lang.String getDocInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.idInput"></a>

```java
public java.lang.Number getIdInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.requiredInput"></a>

```java
public java.lang.Boolean|IResolvable getRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `doc`<sup>Required</sup> <a name="doc" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.doc"></a>

```java
public java.lang.String getDoc();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference;

new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetIdentifierFieldIds">resetIdentifierFieldIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>>

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetFields"></a>

```java
public void resetFields()
```

##### `resetIdentifierFieldIds` <a name="resetIdentifierFieldIds" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetIdentifierFieldIds"></a>

```java
public void resetIdentifierFieldIds()
```

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetSchemaId"></a>

```java
public void resetSchemaId()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.identifierFieldIdsInput">identifierFieldIdsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.schemaIdInput">schemaIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.identifierFieldIds">identifierFieldIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.schemaId">schemaId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fields"></a>

```java
public GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>>

---

##### `identifierFieldIdsInput`<sup>Optional</sup> <a name="identifierFieldIdsInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.identifierFieldIdsInput"></a>

```java
public java.util.List<java.lang.Number> getIdentifierFieldIdsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.schemaIdInput"></a>

```java
public java.lang.Number getSchemaIdInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identifierFieldIds`<sup>Required</sup> <a name="identifierFieldIds" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.identifierFieldIds"></a>

```java
public java.util.List<java.lang.Number> getIdentifierFieldIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.schemaId"></a>

```java
public java.lang.Number getSchemaId();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a>

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList;

new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.get"></a>

```java
public GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>>

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference;

new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resetNullOrder">resetNullOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resetSourceId">resetSourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resetTransform">resetTransform</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetNullOrder` <a name="resetNullOrder" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resetNullOrder"></a>

```java
public void resetNullOrder()
```

##### `resetSourceId` <a name="resetSourceId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resetSourceId"></a>

```java
public void resetSourceId()
```

##### `resetTransform` <a name="resetTransform" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resetTransform"></a>

```java
public void resetTransform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.nullOrderInput">nullOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.sourceIdInput">sourceIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.transformInput">transformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.nullOrder">nullOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.transform">transform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `nullOrderInput`<sup>Optional</sup> <a name="nullOrderInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.nullOrderInput"></a>

```java
public java.lang.String getNullOrderInput();
```

- *Type:* java.lang.String

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.sourceIdInput"></a>

```java
public java.lang.Number getSourceIdInput();
```

- *Type:* java.lang.Number

---

##### `transformInput`<sup>Optional</sup> <a name="transformInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.transformInput"></a>

```java
public java.lang.String getTransformInput();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `nullOrder`<sup>Required</sup> <a name="nullOrder" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.nullOrder"></a>

```java
public java.lang.String getNullOrder();
```

- *Type:* java.lang.String

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.sourceId"></a>

```java
public java.lang.Number getSourceId();
```

- *Type:* java.lang.Number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.transform"></a>

```java
public java.lang.String getTransform();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference;

new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resetOrderId">resetOrderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>>

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resetFields"></a>

```java
public void resetFields()
```

##### `resetOrderId` <a name="resetOrderId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resetOrderId"></a>

```java
public void resetOrderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.orderIdInput">orderIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.orderId">orderId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fields"></a>

```java
public GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>>

---

##### `orderIdInput`<sup>Optional</sup> <a name="orderIdInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.orderIdInput"></a>

```java
public java.lang.Number getOrderIdInput();
```

- *Type:* java.lang.Number

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.orderId"></a>

```java
public java.lang.Number getOrderId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a>

---


### GlueTableOpenTableFormatInputIcebergInputOutputReference <a name="GlueTableOpenTableFormatInputIcebergInputOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputIcebergInputOutputReference;

new GlueTableOpenTableFormatInputIcebergInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.putIcebergTableInput">putIcebergTableInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resetIcebergTableInput">resetIcebergTableInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resetMetadataOperation">resetMetadataOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcebergTableInput` <a name="putIcebergTableInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.putIcebergTableInput"></a>

```java
public void putIcebergTableInput(GlueTableOpenTableFormatInputIcebergInputIcebergTableInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.putIcebergTableInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a>

---

##### `resetIcebergTableInput` <a name="resetIcebergTableInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resetIcebergTableInput"></a>

```java
public void resetIcebergTableInput()
```

##### `resetMetadataOperation` <a name="resetMetadataOperation" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resetMetadataOperation"></a>

```java
public void resetMetadataOperation()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.icebergTableInput">icebergTableInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.icebergTableInputInput">icebergTableInputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperationInput">metadataOperationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperation">metadataOperation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput">GlueTableOpenTableFormatInputIcebergInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `icebergTableInput`<sup>Required</sup> <a name="icebergTableInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.icebergTableInput"></a>

```java
public GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference getIcebergTableInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference</a>

---

##### `icebergTableInputInput`<sup>Optional</sup> <a name="icebergTableInputInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.icebergTableInputInput"></a>

```java
public IResolvable|GlueTableOpenTableFormatInputIcebergInputIcebergTableInput getIcebergTableInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a>

---

##### `metadataOperationInput`<sup>Optional</sup> <a name="metadataOperationInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperationInput"></a>

```java
public java.lang.String getMetadataOperationInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `metadataOperation`<sup>Required</sup> <a name="metadataOperation" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperation"></a>

```java
public java.lang.String getMetadataOperation();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableOpenTableFormatInputIcebergInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput">GlueTableOpenTableFormatInputIcebergInput</a>

---


### GlueTableOpenTableFormatInputOutputReference <a name="GlueTableOpenTableFormatInputOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableOpenTableFormatInputOutputReference;

new GlueTableOpenTableFormatInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.putIcebergInput">putIcebergInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.resetIcebergInput">resetIcebergInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcebergInput` <a name="putIcebergInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.putIcebergInput"></a>

```java
public void putIcebergInput(GlueTableOpenTableFormatInputIcebergInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.putIcebergInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput">GlueTableOpenTableFormatInputIcebergInput</a>

---

##### `resetIcebergInput` <a name="resetIcebergInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.resetIcebergInput"></a>

```java
public void resetIcebergInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.icebergInput">icebergInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference">GlueTableOpenTableFormatInputIcebergInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.icebergInputInput">icebergInputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput">GlueTableOpenTableFormatInputIcebergInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput">GlueTableOpenTableFormatInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `icebergInput`<sup>Required</sup> <a name="icebergInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.icebergInput"></a>

```java
public GlueTableOpenTableFormatInputIcebergInputOutputReference getIcebergInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference">GlueTableOpenTableFormatInputIcebergInputOutputReference</a>

---

##### `icebergInputInput`<sup>Optional</sup> <a name="icebergInputInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.icebergInputInput"></a>

```java
public IResolvable|GlueTableOpenTableFormatInputIcebergInput getIcebergInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput">GlueTableOpenTableFormatInputIcebergInput</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableOpenTableFormatInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput">GlueTableOpenTableFormatInput</a>

---


### GlueTableTableInputOutputReference <a name="GlueTableTableInputOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputOutputReference;

new GlueTableTableInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putPartitionKeys">putPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor">putStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putTargetTable">putTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putViewDefinition">putViewDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetPartitionKeys">resetPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetRetention">resetRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetStorageDescriptor">resetStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetTableType">resetTableType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetTargetTable">resetTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetViewDefinition">resetViewDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetViewExpandedText">resetViewExpandedText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetViewOriginalText">resetViewOriginalText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartitionKeys` <a name="putPartitionKeys" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putPartitionKeys"></a>

```java
public void putPartitionKeys(IResolvable|java.util.List<GlueTableTableInputPartitionKeys> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putPartitionKeys.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a>>

---

##### `putStorageDescriptor` <a name="putStorageDescriptor" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor"></a>

```java
public void putStorageDescriptor(GlueTableTableInputStorageDescriptor value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor">GlueTableTableInputStorageDescriptor</a>

---

##### `putTargetTable` <a name="putTargetTable" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putTargetTable"></a>

```java
public void putTargetTable(GlueTableTableInputTargetTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable">GlueTableTableInputTargetTable</a>

---

##### `putViewDefinition` <a name="putViewDefinition" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putViewDefinition"></a>

```java
public void putViewDefinition(GlueTableTableInputViewDefinition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putViewDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition">GlueTableTableInputViewDefinition</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetPartitionKeys` <a name="resetPartitionKeys" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetPartitionKeys"></a>

```java
public void resetPartitionKeys()
```

##### `resetRetention` <a name="resetRetention" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetRetention"></a>

```java
public void resetRetention()
```

##### `resetStorageDescriptor` <a name="resetStorageDescriptor" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetStorageDescriptor"></a>

```java
public void resetStorageDescriptor()
```

##### `resetTableType` <a name="resetTableType" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetTableType"></a>

```java
public void resetTableType()
```

##### `resetTargetTable` <a name="resetTargetTable" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetTargetTable"></a>

```java
public void resetTargetTable()
```

##### `resetViewDefinition` <a name="resetViewDefinition" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetViewDefinition"></a>

```java
public void resetViewDefinition()
```

##### `resetViewExpandedText` <a name="resetViewExpandedText" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetViewExpandedText"></a>

```java
public void resetViewExpandedText()
```

##### `resetViewOriginalText` <a name="resetViewOriginalText" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetViewOriginalText"></a>

```java
public void resetViewOriginalText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.partitionKeys">partitionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList">GlueTableTableInputPartitionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference">GlueTableTableInputStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference">GlueTableTableInputTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewDefinition">viewDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference">GlueTableTableInputViewDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.partitionKeysInput">partitionKeysInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.retentionInput">retentionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.storageDescriptorInput">storageDescriptorInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor">GlueTableTableInputStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.tableTypeInput">tableTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.targetTableInput">targetTableInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable">GlueTableTableInputTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewDefinitionInput">viewDefinitionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition">GlueTableTableInputViewDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewExpandedTextInput">viewExpandedTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewOriginalTextInput">viewOriginalTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.retention">retention</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.tableType">tableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewExpandedText">viewExpandedText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewOriginalText">viewOriginalText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput">GlueTableTableInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `partitionKeys`<sup>Required</sup> <a name="partitionKeys" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.partitionKeys"></a>

```java
public GlueTableTableInputPartitionKeysList getPartitionKeys();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList">GlueTableTableInputPartitionKeysList</a>

---

##### `storageDescriptor`<sup>Required</sup> <a name="storageDescriptor" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.storageDescriptor"></a>

```java
public GlueTableTableInputStorageDescriptorOutputReference getStorageDescriptor();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference">GlueTableTableInputStorageDescriptorOutputReference</a>

---

##### `targetTable`<sup>Required</sup> <a name="targetTable" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.targetTable"></a>

```java
public GlueTableTableInputTargetTableOutputReference getTargetTable();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference">GlueTableTableInputTargetTableOutputReference</a>

---

##### `viewDefinition`<sup>Required</sup> <a name="viewDefinition" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewDefinition"></a>

```java
public GlueTableTableInputViewDefinitionOutputReference getViewDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference">GlueTableTableInputViewDefinitionOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `partitionKeysInput`<sup>Optional</sup> <a name="partitionKeysInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.partitionKeysInput"></a>

```java
public IResolvable|java.util.List<GlueTableTableInputPartitionKeys> getPartitionKeysInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a>>

---

##### `retentionInput`<sup>Optional</sup> <a name="retentionInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.retentionInput"></a>

```java
public java.lang.Number getRetentionInput();
```

- *Type:* java.lang.Number

---

##### `storageDescriptorInput`<sup>Optional</sup> <a name="storageDescriptorInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.storageDescriptorInput"></a>

```java
public IResolvable|GlueTableTableInputStorageDescriptor getStorageDescriptorInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor">GlueTableTableInputStorageDescriptor</a>

---

##### `tableTypeInput`<sup>Optional</sup> <a name="tableTypeInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.tableTypeInput"></a>

```java
public java.lang.String getTableTypeInput();
```

- *Type:* java.lang.String

---

##### `targetTableInput`<sup>Optional</sup> <a name="targetTableInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.targetTableInput"></a>

```java
public IResolvable|GlueTableTableInputTargetTable getTargetTableInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable">GlueTableTableInputTargetTable</a>

---

##### `viewDefinitionInput`<sup>Optional</sup> <a name="viewDefinitionInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewDefinitionInput"></a>

```java
public IResolvable|GlueTableTableInputViewDefinition getViewDefinitionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition">GlueTableTableInputViewDefinition</a>

---

##### `viewExpandedTextInput`<sup>Optional</sup> <a name="viewExpandedTextInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewExpandedTextInput"></a>

```java
public java.lang.String getViewExpandedTextInput();
```

- *Type:* java.lang.String

---

##### `viewOriginalTextInput`<sup>Optional</sup> <a name="viewOriginalTextInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewOriginalTextInput"></a>

```java
public java.lang.String getViewOriginalTextInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.retention"></a>

```java
public java.lang.Number getRetention();
```

- *Type:* java.lang.Number

---

##### `tableType`<sup>Required</sup> <a name="tableType" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.tableType"></a>

```java
public java.lang.String getTableType();
```

- *Type:* java.lang.String

---

##### `viewExpandedText`<sup>Required</sup> <a name="viewExpandedText" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewExpandedText"></a>

```java
public java.lang.String getViewExpandedText();
```

- *Type:* java.lang.String

---

##### `viewOriginalText`<sup>Required</sup> <a name="viewOriginalText" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewOriginalText"></a>

```java
public java.lang.String getViewOriginalText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableTableInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput">GlueTableTableInput</a>

---


### GlueTableTableInputPartitionKeysList <a name="GlueTableTableInputPartitionKeysList" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputPartitionKeysList;

new GlueTableTableInputPartitionKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.get"></a>

```java
public GlueTableTableInputPartitionKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueTableTableInputPartitionKeys> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a>>

---


### GlueTableTableInputPartitionKeysOutputReference <a name="GlueTableTableInputPartitionKeysOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputPartitionKeysOutputReference;

new GlueTableTableInputPartitionKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableTableInputPartitionKeys getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a>

---


### GlueTableTableInputStorageDescriptorColumnsList <a name="GlueTableTableInputStorageDescriptorColumnsList" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputStorageDescriptorColumnsList;

new GlueTableTableInputStorageDescriptorColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.get"></a>

```java
public GlueTableTableInputStorageDescriptorColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueTableTableInputStorageDescriptorColumns> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a>>

---


### GlueTableTableInputStorageDescriptorColumnsOutputReference <a name="GlueTableTableInputStorageDescriptorColumnsOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputStorageDescriptorColumnsOutputReference;

new GlueTableTableInputStorageDescriptorColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableTableInputStorageDescriptorColumns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a>

---


### GlueTableTableInputStorageDescriptorOutputReference <a name="GlueTableTableInputStorageDescriptorOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputStorageDescriptorOutputReference;

new GlueTableTableInputStorageDescriptorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putColumns">putColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSchemaReference">putSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSerdeInfo">putSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSkewedInfo">putSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSortColumns">putSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetBucketColumns">resetBucketColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetColumns">resetColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetCompressed">resetCompressed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetInputFormat">resetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetNumberOfBuckets">resetNumberOfBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetSchemaReference">resetSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetSerdeInfo">resetSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetSkewedInfo">resetSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetSortColumns">resetSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetStoredAsSubDirectories">resetStoredAsSubDirectories</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumns` <a name="putColumns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putColumns"></a>

```java
public void putColumns(IResolvable|java.util.List<GlueTableTableInputStorageDescriptorColumns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a>>

---

##### `putSchemaReference` <a name="putSchemaReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSchemaReference"></a>

```java
public void putSchemaReference(GlueTableTableInputStorageDescriptorSchemaReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSchemaReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference">GlueTableTableInputStorageDescriptorSchemaReference</a>

---

##### `putSerdeInfo` <a name="putSerdeInfo" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSerdeInfo"></a>

```java
public void putSerdeInfo(GlueTableTableInputStorageDescriptorSerdeInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSerdeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo">GlueTableTableInputStorageDescriptorSerdeInfo</a>

---

##### `putSkewedInfo` <a name="putSkewedInfo" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSkewedInfo"></a>

```java
public void putSkewedInfo(GlueTableTableInputStorageDescriptorSkewedInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSkewedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo">GlueTableTableInputStorageDescriptorSkewedInfo</a>

---

##### `putSortColumns` <a name="putSortColumns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSortColumns"></a>

```java
public void putSortColumns(IResolvable|java.util.List<GlueTableTableInputStorageDescriptorSortColumns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSortColumns.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a>>

---

##### `resetBucketColumns` <a name="resetBucketColumns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetBucketColumns"></a>

```java
public void resetBucketColumns()
```

##### `resetColumns` <a name="resetColumns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetColumns"></a>

```java
public void resetColumns()
```

##### `resetCompressed` <a name="resetCompressed" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetCompressed"></a>

```java
public void resetCompressed()
```

##### `resetInputFormat` <a name="resetInputFormat" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetInputFormat"></a>

```java
public void resetInputFormat()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetNumberOfBuckets` <a name="resetNumberOfBuckets" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetNumberOfBuckets"></a>

```java
public void resetNumberOfBuckets()
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetOutputFormat"></a>

```java
public void resetOutputFormat()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetSchemaReference` <a name="resetSchemaReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetSchemaReference"></a>

```java
public void resetSchemaReference()
```

##### `resetSerdeInfo` <a name="resetSerdeInfo" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetSerdeInfo"></a>

```java
public void resetSerdeInfo()
```

##### `resetSkewedInfo` <a name="resetSkewedInfo" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetSkewedInfo"></a>

```java
public void resetSkewedInfo()
```

##### `resetSortColumns` <a name="resetSortColumns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetSortColumns"></a>

```java
public void resetSortColumns()
```

##### `resetStoredAsSubDirectories` <a name="resetStoredAsSubDirectories" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetStoredAsSubDirectories"></a>

```java
public void resetStoredAsSubDirectories()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList">GlueTableTableInputStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.schemaReference">schemaReference</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference">GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.serdeInfo">serdeInfo</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference">GlueTableTableInputStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.skewedInfo">skewedInfo</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference">GlueTableTableInputStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.sortColumns">sortColumns</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList">GlueTableTableInputStorageDescriptorSortColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.bucketColumnsInput">bucketColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.columnsInput">columnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.compressedInput">compressedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.inputFormatInput">inputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.numberOfBucketsInput">numberOfBucketsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.outputFormatInput">outputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.schemaReferenceInput">schemaReferenceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference">GlueTableTableInputStorageDescriptorSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.serdeInfoInput">serdeInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo">GlueTableTableInputStorageDescriptorSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.skewedInfoInput">skewedInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo">GlueTableTableInputStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.sortColumnsInput">sortColumnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput">storedAsSubDirectoriesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.bucketColumns">bucketColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.compressed">compressed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.inputFormat">inputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.numberOfBuckets">numberOfBuckets</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.storedAsSubDirectories">storedAsSubDirectories</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor">GlueTableTableInputStorageDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.columns"></a>

```java
public GlueTableTableInputStorageDescriptorColumnsList getColumns();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList">GlueTableTableInputStorageDescriptorColumnsList</a>

---

##### `schemaReference`<sup>Required</sup> <a name="schemaReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.schemaReference"></a>

```java
public GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference getSchemaReference();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference">GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference</a>

---

##### `serdeInfo`<sup>Required</sup> <a name="serdeInfo" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.serdeInfo"></a>

```java
public GlueTableTableInputStorageDescriptorSerdeInfoOutputReference getSerdeInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference">GlueTableTableInputStorageDescriptorSerdeInfoOutputReference</a>

---

##### `skewedInfo`<sup>Required</sup> <a name="skewedInfo" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.skewedInfo"></a>

```java
public GlueTableTableInputStorageDescriptorSkewedInfoOutputReference getSkewedInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference">GlueTableTableInputStorageDescriptorSkewedInfoOutputReference</a>

---

##### `sortColumns`<sup>Required</sup> <a name="sortColumns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.sortColumns"></a>

```java
public GlueTableTableInputStorageDescriptorSortColumnsList getSortColumns();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList">GlueTableTableInputStorageDescriptorSortColumnsList</a>

---

##### `bucketColumnsInput`<sup>Optional</sup> <a name="bucketColumnsInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.bucketColumnsInput"></a>

```java
public java.util.List<java.lang.String> getBucketColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.columnsInput"></a>

```java
public IResolvable|java.util.List<GlueTableTableInputStorageDescriptorColumns> getColumnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a>>

---

##### `compressedInput`<sup>Optional</sup> <a name="compressedInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.compressedInput"></a>

```java
public java.lang.Boolean|IResolvable getCompressedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inputFormatInput`<sup>Optional</sup> <a name="inputFormatInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.inputFormatInput"></a>

```java
public java.lang.String getInputFormatInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `numberOfBucketsInput`<sup>Optional</sup> <a name="numberOfBucketsInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.numberOfBucketsInput"></a>

```java
public java.lang.Number getNumberOfBucketsInput();
```

- *Type:* java.lang.Number

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.outputFormatInput"></a>

```java
public java.lang.String getOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `schemaReferenceInput`<sup>Optional</sup> <a name="schemaReferenceInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.schemaReferenceInput"></a>

```java
public IResolvable|GlueTableTableInputStorageDescriptorSchemaReference getSchemaReferenceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference">GlueTableTableInputStorageDescriptorSchemaReference</a>

---

##### `serdeInfoInput`<sup>Optional</sup> <a name="serdeInfoInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.serdeInfoInput"></a>

```java
public IResolvable|GlueTableTableInputStorageDescriptorSerdeInfo getSerdeInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo">GlueTableTableInputStorageDescriptorSerdeInfo</a>

---

##### `skewedInfoInput`<sup>Optional</sup> <a name="skewedInfoInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```java
public IResolvable|GlueTableTableInputStorageDescriptorSkewedInfo getSkewedInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo">GlueTableTableInputStorageDescriptorSkewedInfo</a>

---

##### `sortColumnsInput`<sup>Optional</sup> <a name="sortColumnsInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.sortColumnsInput"></a>

```java
public IResolvable|java.util.List<GlueTableTableInputStorageDescriptorSortColumns> getSortColumnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a>>

---

##### `storedAsSubDirectoriesInput`<sup>Optional</sup> <a name="storedAsSubDirectoriesInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput"></a>

```java
public java.lang.Boolean|IResolvable getStoredAsSubDirectoriesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bucketColumns`<sup>Required</sup> <a name="bucketColumns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.bucketColumns"></a>

```java
public java.util.List<java.lang.String> getBucketColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compressed`<sup>Required</sup> <a name="compressed" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.compressed"></a>

```java
public java.lang.Boolean|IResolvable getCompressed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inputFormat`<sup>Required</sup> <a name="inputFormat" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.inputFormat"></a>

```java
public java.lang.String getInputFormat();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `numberOfBuckets`<sup>Required</sup> <a name="numberOfBuckets" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.numberOfBuckets"></a>

```java
public java.lang.Number getNumberOfBuckets();
```

- *Type:* java.lang.Number

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `storedAsSubDirectories`<sup>Required</sup> <a name="storedAsSubDirectories" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.storedAsSubDirectories"></a>

```java
public java.lang.Boolean|IResolvable getStoredAsSubDirectories();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableTableInputStorageDescriptor getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor">GlueTableTableInputStorageDescriptor</a>

---


### GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference <a name="GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference;

new GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId">putSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId">resetSchemaVersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionNumber">resetSchemaVersionNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchemaId` <a name="putSchemaId" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId"></a>

```java
public void putSchemaId(GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaId"></a>

```java
public void resetSchemaId()
```

##### `resetSchemaVersionId` <a name="resetSchemaVersionId" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId"></a>

```java
public void resetSchemaVersionId()
```

##### `resetSchemaVersionNumber` <a name="resetSchemaVersionNumber" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionNumber"></a>

```java
public void resetSchemaVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId">schemaId</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput">schemaIdInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput">schemaVersionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput">schemaVersionNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId">schemaVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber">schemaVersionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference">GlueTableTableInputStorageDescriptorSchemaReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId"></a>

```java
public GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference getSchemaId();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a>

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput"></a>

```java
public IResolvable|GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId getSchemaIdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `schemaVersionIdInput`<sup>Optional</sup> <a name="schemaVersionIdInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput"></a>

```java
public java.lang.String getSchemaVersionIdInput();
```

- *Type:* java.lang.String

---

##### `schemaVersionNumberInput`<sup>Optional</sup> <a name="schemaVersionNumberInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput"></a>

```java
public java.lang.Number getSchemaVersionNumberInput();
```

- *Type:* java.lang.Number

---

##### `schemaVersionId`<sup>Required</sup> <a name="schemaVersionId" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId"></a>

```java
public java.lang.String getSchemaVersionId();
```

- *Type:* java.lang.String

---

##### `schemaVersionNumber`<sup>Required</sup> <a name="schemaVersionNumber" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber"></a>

```java
public java.lang.Number getSchemaVersionNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableTableInputStorageDescriptorSchemaReference getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference">GlueTableTableInputStorageDescriptorSchemaReference</a>

---


### GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference <a name="GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference;

new GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName">resetRegistryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn">resetSchemaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegistryName` <a name="resetRegistryName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName"></a>

```java
public void resetRegistryName()
```

##### `resetSchemaArn` <a name="resetSchemaArn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn"></a>

```java
public void resetSchemaArn()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput">registryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput">schemaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName">registryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn">schemaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `registryNameInput`<sup>Optional</sup> <a name="registryNameInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput"></a>

```java
public java.lang.String getRegistryNameInput();
```

- *Type:* java.lang.String

---

##### `schemaArnInput`<sup>Optional</sup> <a name="schemaArnInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput"></a>

```java
public java.lang.String getSchemaArnInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName"></a>

```java
public java.lang.String getRegistryName();
```

- *Type:* java.lang.String

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn"></a>

```java
public java.lang.String getSchemaArn();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a>

---


### GlueTableTableInputStorageDescriptorSerdeInfoOutputReference <a name="GlueTableTableInputStorageDescriptorSerdeInfoOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference;

new GlueTableTableInputStorageDescriptorSerdeInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resetSerializationLibrary">resetSerializationLibrary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetSerializationLibrary` <a name="resetSerializationLibrary" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resetSerializationLibrary"></a>

```java
public void resetSerializationLibrary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput">serializationLibraryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary">serializationLibrary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo">GlueTableTableInputStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `serializationLibraryInput`<sup>Optional</sup> <a name="serializationLibraryInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput"></a>

```java
public java.lang.String getSerializationLibraryInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `serializationLibrary`<sup>Required</sup> <a name="serializationLibrary" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary"></a>

```java
public java.lang.String getSerializationLibrary();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableTableInputStorageDescriptorSerdeInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo">GlueTableTableInputStorageDescriptorSerdeInfo</a>

---


### GlueTableTableInputStorageDescriptorSkewedInfoOutputReference <a name="GlueTableTableInputStorageDescriptorSkewedInfoOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference;

new GlueTableTableInputStorageDescriptorSkewedInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames">resetSkewedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps">resetSkewedColumnValueLocationMaps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues">resetSkewedColumnValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSkewedColumnNames` <a name="resetSkewedColumnNames" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames"></a>

```java
public void resetSkewedColumnNames()
```

##### `resetSkewedColumnValueLocationMaps` <a name="resetSkewedColumnValueLocationMaps" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps"></a>

```java
public void resetSkewedColumnValueLocationMaps()
```

##### `resetSkewedColumnValues` <a name="resetSkewedColumnValues" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues"></a>

```java
public void resetSkewedColumnValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput">skewedColumnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput">skewedColumnValueLocationMapsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput">skewedColumnValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames">skewedColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps">skewedColumnValueLocationMaps</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues">skewedColumnValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo">GlueTableTableInputStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `skewedColumnNamesInput`<sup>Optional</sup> <a name="skewedColumnNamesInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput"></a>

```java
public java.util.List<java.lang.String> getSkewedColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skewedColumnValueLocationMapsInput`<sup>Optional</sup> <a name="skewedColumnValueLocationMapsInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput"></a>

```java
public java.lang.String getSkewedColumnValueLocationMapsInput();
```

- *Type:* java.lang.String

---

##### `skewedColumnValuesInput`<sup>Optional</sup> <a name="skewedColumnValuesInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput"></a>

```java
public java.util.List<java.lang.String> getSkewedColumnValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skewedColumnNames`<sup>Required</sup> <a name="skewedColumnNames" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames"></a>

```java
public java.util.List<java.lang.String> getSkewedColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skewedColumnValueLocationMaps`<sup>Required</sup> <a name="skewedColumnValueLocationMaps" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps"></a>

```java
public java.lang.String getSkewedColumnValueLocationMaps();
```

- *Type:* java.lang.String

---

##### `skewedColumnValues`<sup>Required</sup> <a name="skewedColumnValues" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues"></a>

```java
public java.util.List<java.lang.String> getSkewedColumnValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableTableInputStorageDescriptorSkewedInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo">GlueTableTableInputStorageDescriptorSkewedInfo</a>

---


### GlueTableTableInputStorageDescriptorSortColumnsList <a name="GlueTableTableInputStorageDescriptorSortColumnsList" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputStorageDescriptorSortColumnsList;

new GlueTableTableInputStorageDescriptorSortColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.get"></a>

```java
public GlueTableTableInputStorageDescriptorSortColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueTableTableInputStorageDescriptorSortColumns> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a>>

---


### GlueTableTableInputStorageDescriptorSortColumnsOutputReference <a name="GlueTableTableInputStorageDescriptorSortColumnsOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputStorageDescriptorSortColumnsOutputReference;

new GlueTableTableInputStorageDescriptorSortColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.resetColumn">resetColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.resetSortOrder">resetSortOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumn` <a name="resetColumn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.resetColumn"></a>

```java
public void resetColumn()
```

##### `resetSortOrder` <a name="resetSortOrder" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.resetSortOrder"></a>

```java
public void resetSortOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.columnInput">columnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.sortOrderInput">sortOrderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.column">column</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.sortOrder">sortOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.columnInput"></a>

```java
public java.lang.String getColumnInput();
```

- *Type:* java.lang.String

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.sortOrderInput"></a>

```java
public java.lang.Number getSortOrderInput();
```

- *Type:* java.lang.Number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.column"></a>

```java
public java.lang.String getColumn();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.sortOrder"></a>

```java
public java.lang.Number getSortOrder();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableTableInputStorageDescriptorSortColumns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a>

---


### GlueTableTableInputTargetTableOutputReference <a name="GlueTableTableInputTargetTableOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputTargetTableOutputReference;

new GlueTableTableInputTargetTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable">GlueTableTableInputTargetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableTableInputTargetTable getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable">GlueTableTableInputTargetTable</a>

---


### GlueTableTableInputViewDefinitionOutputReference <a name="GlueTableTableInputViewDefinitionOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputViewDefinitionOutputReference;

new GlueTableTableInputViewDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.putRepresentations">putRepresentations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resetDefiner">resetDefiner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resetIsProtected">resetIsProtected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resetRepresentations">resetRepresentations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resetSubObjects">resetSubObjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRepresentations` <a name="putRepresentations" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.putRepresentations"></a>

```java
public void putRepresentations(IResolvable|java.util.List<GlueTableTableInputViewDefinitionRepresentations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.putRepresentations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a>>

---

##### `resetDefiner` <a name="resetDefiner" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resetDefiner"></a>

```java
public void resetDefiner()
```

##### `resetIsProtected` <a name="resetIsProtected" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resetIsProtected"></a>

```java
public void resetIsProtected()
```

##### `resetRepresentations` <a name="resetRepresentations" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resetRepresentations"></a>

```java
public void resetRepresentations()
```

##### `resetSubObjects` <a name="resetSubObjects" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resetSubObjects"></a>

```java
public void resetSubObjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.representations">representations</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList">GlueTableTableInputViewDefinitionRepresentationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.definerInput">definerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.isProtectedInput">isProtectedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.representationsInput">representationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.subObjectsInput">subObjectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.definer">definer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.isProtected">isProtected</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.subObjects">subObjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition">GlueTableTableInputViewDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `representations`<sup>Required</sup> <a name="representations" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.representations"></a>

```java
public GlueTableTableInputViewDefinitionRepresentationsList getRepresentations();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList">GlueTableTableInputViewDefinitionRepresentationsList</a>

---

##### `definerInput`<sup>Optional</sup> <a name="definerInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.definerInput"></a>

```java
public java.lang.String getDefinerInput();
```

- *Type:* java.lang.String

---

##### `isProtectedInput`<sup>Optional</sup> <a name="isProtectedInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.isProtectedInput"></a>

```java
public java.lang.Boolean|IResolvable getIsProtectedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `representationsInput`<sup>Optional</sup> <a name="representationsInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.representationsInput"></a>

```java
public IResolvable|java.util.List<GlueTableTableInputViewDefinitionRepresentations> getRepresentationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a>>

---

##### `subObjectsInput`<sup>Optional</sup> <a name="subObjectsInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.subObjectsInput"></a>

```java
public java.util.List<java.lang.String> getSubObjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `definer`<sup>Required</sup> <a name="definer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.definer"></a>

```java
public java.lang.String getDefiner();
```

- *Type:* java.lang.String

---

##### `isProtected`<sup>Required</sup> <a name="isProtected" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.isProtected"></a>

```java
public java.lang.Boolean|IResolvable getIsProtected();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `subObjects`<sup>Required</sup> <a name="subObjects" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.subObjects"></a>

```java
public java.util.List<java.lang.String> getSubObjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableTableInputViewDefinition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition">GlueTableTableInputViewDefinition</a>

---


### GlueTableTableInputViewDefinitionRepresentationsList <a name="GlueTableTableInputViewDefinitionRepresentationsList" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputViewDefinitionRepresentationsList;

new GlueTableTableInputViewDefinitionRepresentationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.get"></a>

```java
public GlueTableTableInputViewDefinitionRepresentationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueTableTableInputViewDefinitionRepresentations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a>>

---


### GlueTableTableInputViewDefinitionRepresentationsOutputReference <a name="GlueTableTableInputViewDefinitionRepresentationsOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_table.GlueTableTableInputViewDefinitionRepresentationsOutputReference;

new GlueTableTableInputViewDefinitionRepresentationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetDialect">resetDialect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetDialectVersion">resetDialectVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetValidationConnection">resetValidationConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetViewExpandedText">resetViewExpandedText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetViewOriginalText">resetViewOriginalText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDialect` <a name="resetDialect" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetDialect"></a>

```java
public void resetDialect()
```

##### `resetDialectVersion` <a name="resetDialectVersion" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetDialectVersion"></a>

```java
public void resetDialectVersion()
```

##### `resetValidationConnection` <a name="resetValidationConnection" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetValidationConnection"></a>

```java
public void resetValidationConnection()
```

##### `resetViewExpandedText` <a name="resetViewExpandedText" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetViewExpandedText"></a>

```java
public void resetViewExpandedText()
```

##### `resetViewOriginalText` <a name="resetViewOriginalText" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetViewOriginalText"></a>

```java
public void resetViewOriginalText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialectInput">dialectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialectVersionInput">dialectVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.validationConnectionInput">validationConnectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewExpandedTextInput">viewExpandedTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewOriginalTextInput">viewOriginalTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialect">dialect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialectVersion">dialectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.validationConnection">validationConnection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewExpandedText">viewExpandedText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewOriginalText">viewOriginalText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dialectInput`<sup>Optional</sup> <a name="dialectInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialectInput"></a>

```java
public java.lang.String getDialectInput();
```

- *Type:* java.lang.String

---

##### `dialectVersionInput`<sup>Optional</sup> <a name="dialectVersionInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialectVersionInput"></a>

```java
public java.lang.String getDialectVersionInput();
```

- *Type:* java.lang.String

---

##### `validationConnectionInput`<sup>Optional</sup> <a name="validationConnectionInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.validationConnectionInput"></a>

```java
public java.lang.String getValidationConnectionInput();
```

- *Type:* java.lang.String

---

##### `viewExpandedTextInput`<sup>Optional</sup> <a name="viewExpandedTextInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewExpandedTextInput"></a>

```java
public java.lang.String getViewExpandedTextInput();
```

- *Type:* java.lang.String

---

##### `viewOriginalTextInput`<sup>Optional</sup> <a name="viewOriginalTextInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewOriginalTextInput"></a>

```java
public java.lang.String getViewOriginalTextInput();
```

- *Type:* java.lang.String

---

##### `dialect`<sup>Required</sup> <a name="dialect" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialect"></a>

```java
public java.lang.String getDialect();
```

- *Type:* java.lang.String

---

##### `dialectVersion`<sup>Required</sup> <a name="dialectVersion" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialectVersion"></a>

```java
public java.lang.String getDialectVersion();
```

- *Type:* java.lang.String

---

##### `validationConnection`<sup>Required</sup> <a name="validationConnection" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.validationConnection"></a>

```java
public java.lang.String getValidationConnection();
```

- *Type:* java.lang.String

---

##### `viewExpandedText`<sup>Required</sup> <a name="viewExpandedText" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewExpandedText"></a>

```java
public java.lang.String getViewExpandedText();
```

- *Type:* java.lang.String

---

##### `viewOriginalText`<sup>Required</sup> <a name="viewOriginalText" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewOriginalText"></a>

```java
public java.lang.String getViewOriginalText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueTableTableInputViewDefinitionRepresentations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a>

---



