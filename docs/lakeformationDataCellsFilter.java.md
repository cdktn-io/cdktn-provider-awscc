# `lakeformationDataCellsFilter` Submodule <a name="`lakeformationDataCellsFilter` Submodule" id="@cdktn/provider-awscc.lakeformationDataCellsFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationDataCellsFilter <a name="LakeformationDataCellsFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter awscc_lakeformation_data_cells_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_data_cells_filter.LakeformationDataCellsFilter;

LakeformationDataCellsFilter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .databaseName(java.lang.String)
    .name(java.lang.String)
    .tableCatalogId(java.lang.String)
    .tableName(java.lang.String)
//  .columnNames(java.util.List<java.lang.String>)
//  .columnWildcard(LakeformationDataCellsFilterColumnWildcard)
//  .rowFilter(LakeformationDataCellsFilterRowFilter)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name of the Database that the Table resides in. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The desired name of the Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.tableCatalogId">tableCatalogId</a></code> | <code>java.lang.String</code> | The Catalog Id of the Table on which to create a Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.tableName">tableName</a></code> | <code>java.lang.String</code> | The name of the Table to create a Data Cells Filter for. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.columnNames">columnNames</a></code> | <code>java.util.List<java.lang.String></code> | A list of columns to be included in this Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.columnWildcard">columnWildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a></code> | An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.rowFilter">rowFilter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a></code> | An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

The name of the Database that the Table resides in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#database_name LakeformationDataCellsFilter#database_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The desired name of the Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#name LakeformationDataCellsFilter#name}

---

##### `tableCatalogId`<sup>Required</sup> <a name="tableCatalogId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.tableCatalogId"></a>

- *Type:* java.lang.String

The Catalog Id of the Table on which to create a Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#table_catalog_id LakeformationDataCellsFilter#table_catalog_id}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.tableName"></a>

- *Type:* java.lang.String

The name of the Table to create a Data Cells Filter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#table_name LakeformationDataCellsFilter#table_name}

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.columnNames"></a>

- *Type:* java.util.List<java.lang.String>

A list of columns to be included in this Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#column_names LakeformationDataCellsFilter#column_names}

---

##### `columnWildcard`<sup>Optional</sup> <a name="columnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.columnWildcard"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#column_wildcard LakeformationDataCellsFilter#column_wildcard}

---

##### `rowFilter`<sup>Optional</sup> <a name="rowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.rowFilter"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#row_filter LakeformationDataCellsFilter#row_filter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putColumnWildcard">putColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putRowFilter">putRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnWildcard">resetColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetRowFilter">resetRowFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putColumnWildcard` <a name="putColumnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putColumnWildcard"></a>

```java
public void putColumnWildcard(LakeformationDataCellsFilterColumnWildcard value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putColumnWildcard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

---

##### `putRowFilter` <a name="putRowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putRowFilter"></a>

```java
public void putRowFilter(LakeformationDataCellsFilterRowFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putRowFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

---

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnNames"></a>

```java
public void resetColumnNames()
```

##### `resetColumnWildcard` <a name="resetColumnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnWildcard"></a>

```java
public void resetColumnWildcard()
```

##### `resetRowFilter` <a name="resetRowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetRowFilter"></a>

```java
public void resetRowFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LakeformationDataCellsFilter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lakeformation_data_cells_filter.LakeformationDataCellsFilter;

LakeformationDataCellsFilter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lakeformation_data_cells_filter.LakeformationDataCellsFilter;

LakeformationDataCellsFilter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lakeformation_data_cells_filter.LakeformationDataCellsFilter;

LakeformationDataCellsFilter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lakeformation_data_cells_filter.LakeformationDataCellsFilter;

LakeformationDataCellsFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LakeformationDataCellsFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LakeformationDataCellsFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LakeformationDataCellsFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LakeformationDataCellsFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LakeformationDataCellsFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcard">columnWildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference">LakeformationDataCellsFilterColumnWildcardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference">LakeformationDataCellsFilterRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNamesInput">columnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcardInput">columnWildcardInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilterInput">rowFilterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogIdInput">tableCatalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNames">columnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogId">tableCatalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `columnWildcard`<sup>Required</sup> <a name="columnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcard"></a>

```java
public LakeformationDataCellsFilterColumnWildcardOutputReference getColumnWildcard();
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference">LakeformationDataCellsFilterColumnWildcardOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `rowFilter`<sup>Required</sup> <a name="rowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilter"></a>

```java
public LakeformationDataCellsFilterRowFilterOutputReference getRowFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference">LakeformationDataCellsFilterRowFilterOutputReference</a>

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNamesInput"></a>

```java
public java.util.List<java.lang.String> getColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `columnWildcardInput`<sup>Optional</sup> <a name="columnWildcardInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcardInput"></a>

```java
public IResolvable|LakeformationDataCellsFilterColumnWildcard getColumnWildcardInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rowFilterInput`<sup>Optional</sup> <a name="rowFilterInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilterInput"></a>

```java
public IResolvable|LakeformationDataCellsFilterRowFilter getRowFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

---

##### `tableCatalogIdInput`<sup>Optional</sup> <a name="tableCatalogIdInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogIdInput"></a>

```java
public java.lang.String getTableCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNames"></a>

```java
public java.util.List<java.lang.String> getColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tableCatalogId`<sup>Required</sup> <a name="tableCatalogId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogId"></a>

```java
public java.lang.String getTableCatalogId();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationDataCellsFilterColumnWildcard <a name="LakeformationDataCellsFilterColumnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_data_cells_filter.LakeformationDataCellsFilterColumnWildcard;

LakeformationDataCellsFilterColumnWildcard.builder()
//  .excludedColumnNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard.property.excludedColumnNames">excludedColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | A list of column names to be excluded from the Data Cells Filter. |

---

##### `excludedColumnNames`<sup>Optional</sup> <a name="excludedColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard.property.excludedColumnNames"></a>

```java
public java.util.List<java.lang.String> getExcludedColumnNames();
```

- *Type:* java.util.List<java.lang.String>

A list of column names to be excluded from the Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#excluded_column_names LakeformationDataCellsFilter#excluded_column_names}

---

### LakeformationDataCellsFilterConfig <a name="LakeformationDataCellsFilterConfig" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_data_cells_filter.LakeformationDataCellsFilterConfig;

LakeformationDataCellsFilterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .databaseName(java.lang.String)
    .name(java.lang.String)
    .tableCatalogId(java.lang.String)
    .tableName(java.lang.String)
//  .columnNames(java.util.List<java.lang.String>)
//  .columnWildcard(LakeformationDataCellsFilterColumnWildcard)
//  .rowFilter(LakeformationDataCellsFilterRowFilter)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name of the Database that the Table resides in. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.name">name</a></code> | <code>java.lang.String</code> | The desired name of the Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableCatalogId">tableCatalogId</a></code> | <code>java.lang.String</code> | The Catalog Id of the Table on which to create a Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableName">tableName</a></code> | <code>java.lang.String</code> | The name of the Table to create a Data Cells Filter for. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnNames">columnNames</a></code> | <code>java.util.List<java.lang.String></code> | A list of columns to be included in this Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnWildcard">columnWildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a></code> | An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a></code> | An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

The name of the Database that the Table resides in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#database_name LakeformationDataCellsFilter#database_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The desired name of the Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#name LakeformationDataCellsFilter#name}

---

##### `tableCatalogId`<sup>Required</sup> <a name="tableCatalogId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableCatalogId"></a>

```java
public java.lang.String getTableCatalogId();
```

- *Type:* java.lang.String

The Catalog Id of the Table on which to create a Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#table_catalog_id LakeformationDataCellsFilter#table_catalog_id}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

The name of the Table to create a Data Cells Filter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#table_name LakeformationDataCellsFilter#table_name}

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnNames"></a>

```java
public java.util.List<java.lang.String> getColumnNames();
```

- *Type:* java.util.List<java.lang.String>

A list of columns to be included in this Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#column_names LakeformationDataCellsFilter#column_names}

---

##### `columnWildcard`<sup>Optional</sup> <a name="columnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnWildcard"></a>

```java
public LakeformationDataCellsFilterColumnWildcard getColumnWildcard();
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#column_wildcard LakeformationDataCellsFilter#column_wildcard}

---

##### `rowFilter`<sup>Optional</sup> <a name="rowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.rowFilter"></a>

```java
public LakeformationDataCellsFilterRowFilter getRowFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#row_filter LakeformationDataCellsFilter#row_filter}

---

### LakeformationDataCellsFilterRowFilter <a name="LakeformationDataCellsFilterRowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_data_cells_filter.LakeformationDataCellsFilterRowFilter;

LakeformationDataCellsFilterRowFilter.builder()
//  .allRowsWildcard(java.lang.String)
//  .filterExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.allRowsWildcard">allRowsWildcard</a></code> | <code>java.lang.String</code> | An empty object representing a row wildcard. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.filterExpression">filterExpression</a></code> | <code>java.lang.String</code> | A PartiQL predicate. |

---

##### `allRowsWildcard`<sup>Optional</sup> <a name="allRowsWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.allRowsWildcard"></a>

```java
public java.lang.String getAllRowsWildcard();
```

- *Type:* java.lang.String

An empty object representing a row wildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#all_rows_wildcard LakeformationDataCellsFilter#all_rows_wildcard}

---

##### `filterExpression`<sup>Optional</sup> <a name="filterExpression" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.filterExpression"></a>

```java
public java.lang.String getFilterExpression();
```

- *Type:* java.lang.String

A PartiQL predicate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lakeformation_data_cells_filter#filter_expression LakeformationDataCellsFilter#filter_expression}

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationDataCellsFilterColumnWildcardOutputReference <a name="LakeformationDataCellsFilterColumnWildcardOutputReference" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_data_cells_filter.LakeformationDataCellsFilterColumnWildcardOutputReference;

new LakeformationDataCellsFilterColumnWildcardOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resetExcludedColumnNames">resetExcludedColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedColumnNames` <a name="resetExcludedColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resetExcludedColumnNames"></a>

```java
public void resetExcludedColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNamesInput">excludedColumnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNames">excludedColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludedColumnNamesInput`<sup>Optional</sup> <a name="excludedColumnNamesInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNamesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedColumnNames`<sup>Required</sup> <a name="excludedColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNames"></a>

```java
public java.util.List<java.lang.String> getExcludedColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.internalValue"></a>

```java
public IResolvable|LakeformationDataCellsFilterColumnWildcard getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

---


### LakeformationDataCellsFilterRowFilterOutputReference <a name="LakeformationDataCellsFilterRowFilterOutputReference" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_data_cells_filter.LakeformationDataCellsFilterRowFilterOutputReference;

new LakeformationDataCellsFilterRowFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetAllRowsWildcard">resetAllRowsWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetFilterExpression">resetFilterExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllRowsWildcard` <a name="resetAllRowsWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetAllRowsWildcard"></a>

```java
public void resetAllRowsWildcard()
```

##### `resetFilterExpression` <a name="resetFilterExpression" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetFilterExpression"></a>

```java
public void resetFilterExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcardInput">allRowsWildcardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpressionInput">filterExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcard">allRowsWildcard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpression">filterExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allRowsWildcardInput`<sup>Optional</sup> <a name="allRowsWildcardInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcardInput"></a>

```java
public java.lang.String getAllRowsWildcardInput();
```

- *Type:* java.lang.String

---

##### `filterExpressionInput`<sup>Optional</sup> <a name="filterExpressionInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpressionInput"></a>

```java
public java.lang.String getFilterExpressionInput();
```

- *Type:* java.lang.String

---

##### `allRowsWildcard`<sup>Required</sup> <a name="allRowsWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcard"></a>

```java
public java.lang.String getAllRowsWildcard();
```

- *Type:* java.lang.String

---

##### `filterExpression`<sup>Required</sup> <a name="filterExpression" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpression"></a>

```java
public java.lang.String getFilterExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|LakeformationDataCellsFilterRowFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

---



