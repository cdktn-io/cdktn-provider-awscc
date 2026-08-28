# `quicksightDataSet` Submodule <a name="`quicksightDataSet` Submodule" id="@cdktn/provider-awscc.quicksightDataSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightDataSet <a name="QuicksightDataSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set awscc_quicksight_data_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSet;

QuicksightDataSet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .awsAccountId(java.lang.String)
//  .columnGroups(IResolvable|java.util.List<QuicksightDataSetColumnGroups>)
//  .columnLevelPermissionRules(IResolvable|java.util.List<QuicksightDataSetColumnLevelPermissionRules>)
//  .dataSetId(java.lang.String)
//  .dataSetUsageConfiguration(QuicksightDataSetDataSetUsageConfiguration)
//  .fieldFolders(IResolvable|java.util.Map<java.lang.String, QuicksightDataSetFieldFolders>)
//  .importMode(java.lang.String)
//  .ingestionWaitPolicy(QuicksightDataSetIngestionWaitPolicy)
//  .logicalTableMap(IResolvable|java.util.Map<java.lang.String, QuicksightDataSetLogicalTableMap>)
//  .name(java.lang.String)
//  .permissions(IResolvable|java.util.List<QuicksightDataSetPermissions>)
//  .physicalTableMap(IResolvable|java.util.Map<java.lang.String, QuicksightDataSetPhysicalTableMap>)
//  .rowLevelPermissionDataSet(QuicksightDataSetRowLevelPermissionDataSet)
//  .tags(IResolvable|java.util.List<QuicksightDataSetTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#aws_account_id QuicksightDataSet#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.columnGroups">columnGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>></code> | <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.columnLevelPermissionRules">columnLevelPermissionRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#column_level_permission_rules QuicksightDataSet#column_level_permission_rules}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.dataSetId">dataSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#data_set_id QuicksightDataSet#data_set_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.dataSetUsageConfiguration">dataSetUsageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a></code> | <p>The dataset usage configuration for the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.fieldFolders">fieldFolders</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#field_folders QuicksightDataSet#field_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.importMode">importMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#import_mode QuicksightDataSet#import_mode}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.ingestionWaitPolicy">ingestionWaitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy">QuicksightDataSetIngestionWaitPolicy</a></code> | <p>Wait policy to use when creating/updating dataset. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.logicalTableMap">logicalTableMap</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#logical_table_map QuicksightDataSet#logical_table_map}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | <p>The display name for the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.permissions">permissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>></code> | <p>A list of resource permissions on the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.physicalTableMap">physicalTableMap</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#physical_table_map QuicksightDataSet#physical_table_map}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.rowLevelPermissionDataSet">rowLevelPermissionDataSet</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a></code> | <p>The row-level security configuration for the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>></code> | <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#aws_account_id QuicksightDataSet#aws_account_id}.

---

##### `columnGroups`<sup>Optional</sup> <a name="columnGroups" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.columnGroups"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>>

<p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#column_groups QuicksightDataSet#column_groups}

---

##### `columnLevelPermissionRules`<sup>Optional</sup> <a name="columnLevelPermissionRules" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.columnLevelPermissionRules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#column_level_permission_rules QuicksightDataSet#column_level_permission_rules}.

---

##### `dataSetId`<sup>Optional</sup> <a name="dataSetId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.dataSetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#data_set_id QuicksightDataSet#data_set_id}.

---

##### `dataSetUsageConfiguration`<sup>Optional</sup> <a name="dataSetUsageConfiguration" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.dataSetUsageConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a>

<p>The dataset usage configuration for the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#data_set_usage_configuration QuicksightDataSet#data_set_usage_configuration}

---

##### `fieldFolders`<sup>Optional</sup> <a name="fieldFolders" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.fieldFolders"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#field_folders QuicksightDataSet#field_folders}.

---

##### `importMode`<sup>Optional</sup> <a name="importMode" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.importMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#import_mode QuicksightDataSet#import_mode}.

---

##### `ingestionWaitPolicy`<sup>Optional</sup> <a name="ingestionWaitPolicy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.ingestionWaitPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy">QuicksightDataSetIngestionWaitPolicy</a>

<p>Wait policy to use when creating/updating dataset.

Default is to wait for SPICE ingestion to finish with timeout of 36 hours.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#ingestion_wait_policy QuicksightDataSet#ingestion_wait_policy}

---

##### `logicalTableMap`<sup>Optional</sup> <a name="logicalTableMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.logicalTableMap"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#logical_table_map QuicksightDataSet#logical_table_map}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

<p>The display name for the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.permissions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>>

<p>A list of resource permissions on the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#permissions QuicksightDataSet#permissions}

---

##### `physicalTableMap`<sup>Optional</sup> <a name="physicalTableMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.physicalTableMap"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#physical_table_map QuicksightDataSet#physical_table_map}.

---

##### `rowLevelPermissionDataSet`<sup>Optional</sup> <a name="rowLevelPermissionDataSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.rowLevelPermissionDataSet"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a>

<p>The row-level security configuration for the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#row_level_permission_data_set QuicksightDataSet#row_level_permission_data_set}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>>

<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#tags QuicksightDataSet#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putColumnGroups">putColumnGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putColumnLevelPermissionRules">putColumnLevelPermissionRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putDataSetUsageConfiguration">putDataSetUsageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putFieldFolders">putFieldFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putIngestionWaitPolicy">putIngestionWaitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putLogicalTableMap">putLogicalTableMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putPhysicalTableMap">putPhysicalTableMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionDataSet">putRowLevelPermissionDataSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetColumnGroups">resetColumnGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetColumnLevelPermissionRules">resetColumnLevelPermissionRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetDataSetId">resetDataSetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetDataSetUsageConfiguration">resetDataSetUsageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetFieldFolders">resetFieldFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetImportMode">resetImportMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetIngestionWaitPolicy">resetIngestionWaitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetLogicalTableMap">resetLogicalTableMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetPhysicalTableMap">resetPhysicalTableMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetRowLevelPermissionDataSet">resetRowLevelPermissionDataSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putColumnGroups` <a name="putColumnGroups" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putColumnGroups"></a>

```java
public void putColumnGroups(IResolvable|java.util.List<QuicksightDataSetColumnGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putColumnGroups.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>>

---

##### `putColumnLevelPermissionRules` <a name="putColumnLevelPermissionRules" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putColumnLevelPermissionRules"></a>

```java
public void putColumnLevelPermissionRules(IResolvable|java.util.List<QuicksightDataSetColumnLevelPermissionRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putColumnLevelPermissionRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>>

---

##### `putDataSetUsageConfiguration` <a name="putDataSetUsageConfiguration" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putDataSetUsageConfiguration"></a>

```java
public void putDataSetUsageConfiguration(QuicksightDataSetDataSetUsageConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putDataSetUsageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a>

---

##### `putFieldFolders` <a name="putFieldFolders" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putFieldFolders"></a>

```java
public void putFieldFolders(IResolvable|java.util.Map<java.lang.String, QuicksightDataSetFieldFolders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putFieldFolders.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>>

---

##### `putIngestionWaitPolicy` <a name="putIngestionWaitPolicy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putIngestionWaitPolicy"></a>

```java
public void putIngestionWaitPolicy(QuicksightDataSetIngestionWaitPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putIngestionWaitPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy">QuicksightDataSetIngestionWaitPolicy</a>

---

##### `putLogicalTableMap` <a name="putLogicalTableMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putLogicalTableMap"></a>

```java
public void putLogicalTableMap(IResolvable|java.util.Map<java.lang.String, QuicksightDataSetLogicalTableMap> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putLogicalTableMap.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>>

---

##### `putPermissions` <a name="putPermissions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putPermissions"></a>

```java
public void putPermissions(IResolvable|java.util.List<QuicksightDataSetPermissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putPermissions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>>

---

##### `putPhysicalTableMap` <a name="putPhysicalTableMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putPhysicalTableMap"></a>

```java
public void putPhysicalTableMap(IResolvable|java.util.Map<java.lang.String, QuicksightDataSetPhysicalTableMap> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putPhysicalTableMap.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>>

---

##### `putRowLevelPermissionDataSet` <a name="putRowLevelPermissionDataSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionDataSet"></a>

```java
public void putRowLevelPermissionDataSet(QuicksightDataSetRowLevelPermissionDataSet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionDataSet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<QuicksightDataSetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>>

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetColumnGroups` <a name="resetColumnGroups" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetColumnGroups"></a>

```java
public void resetColumnGroups()
```

##### `resetColumnLevelPermissionRules` <a name="resetColumnLevelPermissionRules" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetColumnLevelPermissionRules"></a>

```java
public void resetColumnLevelPermissionRules()
```

##### `resetDataSetId` <a name="resetDataSetId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetDataSetId"></a>

```java
public void resetDataSetId()
```

##### `resetDataSetUsageConfiguration` <a name="resetDataSetUsageConfiguration" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetDataSetUsageConfiguration"></a>

```java
public void resetDataSetUsageConfiguration()
```

##### `resetFieldFolders` <a name="resetFieldFolders" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetFieldFolders"></a>

```java
public void resetFieldFolders()
```

##### `resetImportMode` <a name="resetImportMode" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetImportMode"></a>

```java
public void resetImportMode()
```

##### `resetIngestionWaitPolicy` <a name="resetIngestionWaitPolicy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetIngestionWaitPolicy"></a>

```java
public void resetIngestionWaitPolicy()
```

##### `resetLogicalTableMap` <a name="resetLogicalTableMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetLogicalTableMap"></a>

```java
public void resetLogicalTableMap()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetName"></a>

```java
public void resetName()
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetPermissions"></a>

```java
public void resetPermissions()
```

##### `resetPhysicalTableMap` <a name="resetPhysicalTableMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetPhysicalTableMap"></a>

```java
public void resetPhysicalTableMap()
```

##### `resetRowLevelPermissionDataSet` <a name="resetRowLevelPermissionDataSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetRowLevelPermissionDataSet"></a>

```java
public void resetRowLevelPermissionDataSet()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightDataSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.isConstruct"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSet;

QuicksightDataSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSet;

QuicksightDataSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSet;

QuicksightDataSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSet;

QuicksightDataSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuicksightDataSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a QuicksightDataSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuicksightDataSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuicksightDataSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightDataSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.columnGroups">columnGroups</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList">QuicksightDataSetColumnGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.columnLevelPermissionRules">columnLevelPermissionRules</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList">QuicksightDataSetColumnLevelPermissionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.consumedSpiceCapacityInBytes">consumedSpiceCapacityInBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dataSetUsageConfiguration">dataSetUsageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference">QuicksightDataSetDataSetUsageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.fieldFolders">fieldFolders</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap">QuicksightDataSetFieldFoldersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.ingestionWaitPolicy">ingestionWaitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference">QuicksightDataSetIngestionWaitPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.logicalTableMap">logicalTableMap</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap">QuicksightDataSetLogicalTableMapMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.outputColumns">outputColumns</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList">QuicksightDataSetOutputColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList">QuicksightDataSetPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.physicalTableMap">physicalTableMap</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap">QuicksightDataSetPhysicalTableMapMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionDataSet">rowLevelPermissionDataSet</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference">QuicksightDataSetRowLevelPermissionDataSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList">QuicksightDataSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.columnGroupsInput">columnGroupsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.columnLevelPermissionRulesInput">columnLevelPermissionRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dataSetIdInput">dataSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dataSetUsageConfigurationInput">dataSetUsageConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.fieldFoldersInput">fieldFoldersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.importModeInput">importModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.ingestionWaitPolicyInput">ingestionWaitPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy">QuicksightDataSetIngestionWaitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.logicalTableMapInput">logicalTableMapInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.permissionsInput">permissionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.physicalTableMapInput">physicalTableMapInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionDataSetInput">rowLevelPermissionDataSetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dataSetId">dataSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.importMode">importMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `columnGroups`<sup>Required</sup> <a name="columnGroups" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.columnGroups"></a>

```java
public QuicksightDataSetColumnGroupsList getColumnGroups();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList">QuicksightDataSetColumnGroupsList</a>

---

##### `columnLevelPermissionRules`<sup>Required</sup> <a name="columnLevelPermissionRules" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.columnLevelPermissionRules"></a>

```java
public QuicksightDataSetColumnLevelPermissionRulesList getColumnLevelPermissionRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList">QuicksightDataSetColumnLevelPermissionRulesList</a>

---

##### `consumedSpiceCapacityInBytes`<sup>Required</sup> <a name="consumedSpiceCapacityInBytes" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.consumedSpiceCapacityInBytes"></a>

```java
public java.lang.Number getConsumedSpiceCapacityInBytes();
```

- *Type:* java.lang.Number

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `dataSetUsageConfiguration`<sup>Required</sup> <a name="dataSetUsageConfiguration" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dataSetUsageConfiguration"></a>

```java
public QuicksightDataSetDataSetUsageConfigurationOutputReference getDataSetUsageConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference">QuicksightDataSetDataSetUsageConfigurationOutputReference</a>

---

##### `fieldFolders`<sup>Required</sup> <a name="fieldFolders" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.fieldFolders"></a>

```java
public QuicksightDataSetFieldFoldersMap getFieldFolders();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap">QuicksightDataSetFieldFoldersMap</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingestionWaitPolicy`<sup>Required</sup> <a name="ingestionWaitPolicy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.ingestionWaitPolicy"></a>

```java
public QuicksightDataSetIngestionWaitPolicyOutputReference getIngestionWaitPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference">QuicksightDataSetIngestionWaitPolicyOutputReference</a>

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `logicalTableMap`<sup>Required</sup> <a name="logicalTableMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.logicalTableMap"></a>

```java
public QuicksightDataSetLogicalTableMapMap getLogicalTableMap();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap">QuicksightDataSetLogicalTableMapMap</a>

---

##### `outputColumns`<sup>Required</sup> <a name="outputColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.outputColumns"></a>

```java
public QuicksightDataSetOutputColumnsList getOutputColumns();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList">QuicksightDataSetOutputColumnsList</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.permissions"></a>

```java
public QuicksightDataSetPermissionsList getPermissions();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList">QuicksightDataSetPermissionsList</a>

---

##### `physicalTableMap`<sup>Required</sup> <a name="physicalTableMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.physicalTableMap"></a>

```java
public QuicksightDataSetPhysicalTableMapMap getPhysicalTableMap();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap">QuicksightDataSetPhysicalTableMapMap</a>

---

##### `rowLevelPermissionDataSet`<sup>Required</sup> <a name="rowLevelPermissionDataSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionDataSet"></a>

```java
public QuicksightDataSetRowLevelPermissionDataSetOutputReference getRowLevelPermissionDataSet();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference">QuicksightDataSetRowLevelPermissionDataSetOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.tags"></a>

```java
public QuicksightDataSetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList">QuicksightDataSetTagsList</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `columnGroupsInput`<sup>Optional</sup> <a name="columnGroupsInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.columnGroupsInput"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetColumnGroups> getColumnGroupsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>>

---

##### `columnLevelPermissionRulesInput`<sup>Optional</sup> <a name="columnLevelPermissionRulesInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.columnLevelPermissionRulesInput"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetColumnLevelPermissionRules> getColumnLevelPermissionRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>>

---

##### `dataSetIdInput`<sup>Optional</sup> <a name="dataSetIdInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dataSetIdInput"></a>

```java
public java.lang.String getDataSetIdInput();
```

- *Type:* java.lang.String

---

##### `dataSetUsageConfigurationInput`<sup>Optional</sup> <a name="dataSetUsageConfigurationInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dataSetUsageConfigurationInput"></a>

```java
public IResolvable|QuicksightDataSetDataSetUsageConfiguration getDataSetUsageConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a>

---

##### `fieldFoldersInput`<sup>Optional</sup> <a name="fieldFoldersInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.fieldFoldersInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, QuicksightDataSetFieldFolders> getFieldFoldersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>>

---

##### `importModeInput`<sup>Optional</sup> <a name="importModeInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.importModeInput"></a>

```java
public java.lang.String getImportModeInput();
```

- *Type:* java.lang.String

---

##### `ingestionWaitPolicyInput`<sup>Optional</sup> <a name="ingestionWaitPolicyInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.ingestionWaitPolicyInput"></a>

```java
public IResolvable|QuicksightDataSetIngestionWaitPolicy getIngestionWaitPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy">QuicksightDataSetIngestionWaitPolicy</a>

---

##### `logicalTableMapInput`<sup>Optional</sup> <a name="logicalTableMapInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.logicalTableMapInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, QuicksightDataSetLogicalTableMap> getLogicalTableMapInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.permissionsInput"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetPermissions> getPermissionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>>

---

##### `physicalTableMapInput`<sup>Optional</sup> <a name="physicalTableMapInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.physicalTableMapInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, QuicksightDataSetPhysicalTableMap> getPhysicalTableMapInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>>

---

##### `rowLevelPermissionDataSetInput`<sup>Optional</sup> <a name="rowLevelPermissionDataSetInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionDataSetInput"></a>

```java
public IResolvable|QuicksightDataSetRowLevelPermissionDataSet getRowLevelPermissionDataSetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.tagsInput"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dataSetId"></a>

```java
public java.lang.String getDataSetId();
```

- *Type:* java.lang.String

---

##### `importMode`<sup>Required</sup> <a name="importMode" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.importMode"></a>

```java
public java.lang.String getImportMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightDataSetColumnGroups <a name="QuicksightDataSetColumnGroups" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetColumnGroups;

QuicksightDataSetColumnGroups.builder()
//  .geoSpatialColumnGroup(QuicksightDataSetColumnGroupsGeoSpatialColumnGroup)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups.property.geoSpatialColumnGroup">geoSpatialColumnGroup</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a></code> | <p>Geospatial column group that denotes a hierarchy.</p>. |

---

##### `geoSpatialColumnGroup`<sup>Optional</sup> <a name="geoSpatialColumnGroup" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups.property.geoSpatialColumnGroup"></a>

```java
public QuicksightDataSetColumnGroupsGeoSpatialColumnGroup getGeoSpatialColumnGroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

<p>Geospatial column group that denotes a hierarchy.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#geo_spatial_column_group QuicksightDataSet#geo_spatial_column_group}

---

### QuicksightDataSetColumnGroupsGeoSpatialColumnGroup <a name="QuicksightDataSetColumnGroupsGeoSpatialColumnGroup" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup;

QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.builder()
//  .columns(java.util.List<java.lang.String>)
//  .countryCode(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | <p>Columns in this hierarchy.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#country_code QuicksightDataSet#country_code}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.name">name</a></code> | <code>java.lang.String</code> | <p>A display name for the hierarchy.</p>. |

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

<p>Columns in this hierarchy.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#country_code QuicksightDataSet#country_code}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

<p>A display name for the hierarchy.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

### QuicksightDataSetColumnLevelPermissionRules <a name="QuicksightDataSetColumnLevelPermissionRules" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetColumnLevelPermissionRules;

QuicksightDataSetColumnLevelPermissionRules.builder()
//  .columnNames(java.util.List<java.lang.String>)
//  .principals(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.property.columnNames">columnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#column_names QuicksightDataSet#column_names}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.property.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#principals QuicksightDataSet#principals}. |

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.property.columnNames"></a>

```java
public java.util.List<java.lang.String> getColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#column_names QuicksightDataSet#column_names}.

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.property.principals"></a>

```java
public java.util.List<java.lang.String> getPrincipals();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#principals QuicksightDataSet#principals}.

---

### QuicksightDataSetConfig <a name="QuicksightDataSetConfig" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetConfig;

QuicksightDataSetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .awsAccountId(java.lang.String)
//  .columnGroups(IResolvable|java.util.List<QuicksightDataSetColumnGroups>)
//  .columnLevelPermissionRules(IResolvable|java.util.List<QuicksightDataSetColumnLevelPermissionRules>)
//  .dataSetId(java.lang.String)
//  .dataSetUsageConfiguration(QuicksightDataSetDataSetUsageConfiguration)
//  .fieldFolders(IResolvable|java.util.Map<java.lang.String, QuicksightDataSetFieldFolders>)
//  .importMode(java.lang.String)
//  .ingestionWaitPolicy(QuicksightDataSetIngestionWaitPolicy)
//  .logicalTableMap(IResolvable|java.util.Map<java.lang.String, QuicksightDataSetLogicalTableMap>)
//  .name(java.lang.String)
//  .permissions(IResolvable|java.util.List<QuicksightDataSetPermissions>)
//  .physicalTableMap(IResolvable|java.util.Map<java.lang.String, QuicksightDataSetPhysicalTableMap>)
//  .rowLevelPermissionDataSet(QuicksightDataSetRowLevelPermissionDataSet)
//  .tags(IResolvable|java.util.List<QuicksightDataSetTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#aws_account_id QuicksightDataSet#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.columnGroups">columnGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>></code> | <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.columnLevelPermissionRules">columnLevelPermissionRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#column_level_permission_rules QuicksightDataSet#column_level_permission_rules}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.dataSetId">dataSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#data_set_id QuicksightDataSet#data_set_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.dataSetUsageConfiguration">dataSetUsageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a></code> | <p>The dataset usage configuration for the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.fieldFolders">fieldFolders</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#field_folders QuicksightDataSet#field_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.importMode">importMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#import_mode QuicksightDataSet#import_mode}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.ingestionWaitPolicy">ingestionWaitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy">QuicksightDataSetIngestionWaitPolicy</a></code> | <p>Wait policy to use when creating/updating dataset. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.logicalTableMap">logicalTableMap</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#logical_table_map QuicksightDataSet#logical_table_map}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | <p>The display name for the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.permissions">permissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>></code> | <p>A list of resource permissions on the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.physicalTableMap">physicalTableMap</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#physical_table_map QuicksightDataSet#physical_table_map}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.rowLevelPermissionDataSet">rowLevelPermissionDataSet</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a></code> | <p>The row-level security configuration for the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>></code> | <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#aws_account_id QuicksightDataSet#aws_account_id}.

---

##### `columnGroups`<sup>Optional</sup> <a name="columnGroups" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.columnGroups"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetColumnGroups> getColumnGroups();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>>

<p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#column_groups QuicksightDataSet#column_groups}

---

##### `columnLevelPermissionRules`<sup>Optional</sup> <a name="columnLevelPermissionRules" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.columnLevelPermissionRules"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetColumnLevelPermissionRules> getColumnLevelPermissionRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#column_level_permission_rules QuicksightDataSet#column_level_permission_rules}.

---

##### `dataSetId`<sup>Optional</sup> <a name="dataSetId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.dataSetId"></a>

```java
public java.lang.String getDataSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#data_set_id QuicksightDataSet#data_set_id}.

---

##### `dataSetUsageConfiguration`<sup>Optional</sup> <a name="dataSetUsageConfiguration" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.dataSetUsageConfiguration"></a>

```java
public QuicksightDataSetDataSetUsageConfiguration getDataSetUsageConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a>

<p>The dataset usage configuration for the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#data_set_usage_configuration QuicksightDataSet#data_set_usage_configuration}

---

##### `fieldFolders`<sup>Optional</sup> <a name="fieldFolders" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.fieldFolders"></a>

```java
public IResolvable|java.util.Map<java.lang.String, QuicksightDataSetFieldFolders> getFieldFolders();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#field_folders QuicksightDataSet#field_folders}.

---

##### `importMode`<sup>Optional</sup> <a name="importMode" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.importMode"></a>

```java
public java.lang.String getImportMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#import_mode QuicksightDataSet#import_mode}.

---

##### `ingestionWaitPolicy`<sup>Optional</sup> <a name="ingestionWaitPolicy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.ingestionWaitPolicy"></a>

```java
public QuicksightDataSetIngestionWaitPolicy getIngestionWaitPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy">QuicksightDataSetIngestionWaitPolicy</a>

<p>Wait policy to use when creating/updating dataset.

Default is to wait for SPICE ingestion to finish with timeout of 36 hours.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#ingestion_wait_policy QuicksightDataSet#ingestion_wait_policy}

---

##### `logicalTableMap`<sup>Optional</sup> <a name="logicalTableMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.logicalTableMap"></a>

```java
public IResolvable|java.util.Map<java.lang.String, QuicksightDataSetLogicalTableMap> getLogicalTableMap();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#logical_table_map QuicksightDataSet#logical_table_map}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

<p>The display name for the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.permissions"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetPermissions> getPermissions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>>

<p>A list of resource permissions on the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#permissions QuicksightDataSet#permissions}

---

##### `physicalTableMap`<sup>Optional</sup> <a name="physicalTableMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.physicalTableMap"></a>

```java
public IResolvable|java.util.Map<java.lang.String, QuicksightDataSetPhysicalTableMap> getPhysicalTableMap();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#physical_table_map QuicksightDataSet#physical_table_map}.

---

##### `rowLevelPermissionDataSet`<sup>Optional</sup> <a name="rowLevelPermissionDataSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.rowLevelPermissionDataSet"></a>

```java
public QuicksightDataSetRowLevelPermissionDataSet getRowLevelPermissionDataSet();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a>

<p>The row-level security configuration for the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#row_level_permission_data_set QuicksightDataSet#row_level_permission_data_set}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>>

<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#tags QuicksightDataSet#tags}

---

### QuicksightDataSetDataSetUsageConfiguration <a name="QuicksightDataSetDataSetUsageConfiguration" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetDataSetUsageConfiguration;

QuicksightDataSetDataSetUsageConfiguration.builder()
//  .disableUseAsDirectQuerySource(java.lang.Boolean|IResolvable)
//  .disableUseAsImportedSource(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.property.disableUseAsDirectQuerySource">disableUseAsDirectQuerySource</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#disable_use_as_direct_query_source QuicksightDataSet#disable_use_as_direct_query_source}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.property.disableUseAsImportedSource">disableUseAsImportedSource</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#disable_use_as_imported_source QuicksightDataSet#disable_use_as_imported_source}. |

---

##### `disableUseAsDirectQuerySource`<sup>Optional</sup> <a name="disableUseAsDirectQuerySource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.property.disableUseAsDirectQuerySource"></a>

```java
public java.lang.Boolean|IResolvable getDisableUseAsDirectQuerySource();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#disable_use_as_direct_query_source QuicksightDataSet#disable_use_as_direct_query_source}.

---

##### `disableUseAsImportedSource`<sup>Optional</sup> <a name="disableUseAsImportedSource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.property.disableUseAsImportedSource"></a>

```java
public java.lang.Boolean|IResolvable getDisableUseAsImportedSource();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#disable_use_as_imported_source QuicksightDataSet#disable_use_as_imported_source}.

---

### QuicksightDataSetFieldFolders <a name="QuicksightDataSetFieldFolders" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetFieldFolders;

QuicksightDataSetFieldFolders.builder()
//  .columns(java.util.List<java.lang.String>)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#description QuicksightDataSet#description}. |

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#description QuicksightDataSet#description}.

---

### QuicksightDataSetIngestionWaitPolicy <a name="QuicksightDataSetIngestionWaitPolicy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetIngestionWaitPolicy;

QuicksightDataSetIngestionWaitPolicy.builder()
//  .ingestionWaitTimeInHours(java.lang.Number)
//  .waitForSpiceIngestion(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy.property.ingestionWaitTimeInHours">ingestionWaitTimeInHours</a></code> | <code>java.lang.Number</code> | <p>The maximum time (in hours) to wait for Ingestion to complete. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy.property.waitForSpiceIngestion">waitForSpiceIngestion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | <p>Wait for SPICE ingestion to finish to mark dataset creation/update successful. |

---

##### `ingestionWaitTimeInHours`<sup>Optional</sup> <a name="ingestionWaitTimeInHours" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy.property.ingestionWaitTimeInHours"></a>

```java
public java.lang.Number getIngestionWaitTimeInHours();
```

- *Type:* java.lang.Number

<p>The maximum time (in hours) to wait for Ingestion to complete.

Default timeout is 36 hours.
Applicable only when DataSetImportMode mode is set to SPICE and WaitForSpiceIngestion is set to true.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#ingestion_wait_time_in_hours QuicksightDataSet#ingestion_wait_time_in_hours}

---

##### `waitForSpiceIngestion`<sup>Optional</sup> <a name="waitForSpiceIngestion" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy.property.waitForSpiceIngestion"></a>

```java
public java.lang.Boolean|IResolvable getWaitForSpiceIngestion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

<p>Wait for SPICE ingestion to finish to mark dataset creation/update successful.

Default (true).
Applicable only when DataSetImportMode mode is set to SPICE.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#wait_for_spice_ingestion QuicksightDataSet#wait_for_spice_ingestion}

---

### QuicksightDataSetLogicalTableMap <a name="QuicksightDataSetLogicalTableMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMap;

QuicksightDataSetLogicalTableMap.builder()
//  .alias(java.lang.String)
//  .dataTransforms(IResolvable|java.util.List<QuicksightDataSetLogicalTableMapDataTransforms>)
//  .source(QuicksightDataSetLogicalTableMapSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.alias">alias</a></code> | <code>java.lang.String</code> | <p>A display name for the logical table.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.dataTransforms">dataTransforms</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a>></code> | <p>Transform operations that act on this logical table.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a></code> | <p>Information about the source of a logical table. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

<p>A display name for the logical table.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#alias QuicksightDataSet#alias}

---

##### `dataTransforms`<sup>Optional</sup> <a name="dataTransforms" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.dataTransforms"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetLogicalTableMapDataTransforms> getDataTransforms();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a>>

<p>Transform operations that act on this logical table.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#data_transforms QuicksightDataSet#data_transforms}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.source"></a>

```java
public QuicksightDataSetLogicalTableMapSource getSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a>

<p>Information about the source of a logical table.

This is a variant type structure. For
this structure to be valid, only one of the attributes can be non-null.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#source QuicksightDataSet#source}

---

### QuicksightDataSetLogicalTableMapDataTransforms <a name="QuicksightDataSetLogicalTableMapDataTransforms" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransforms;

QuicksightDataSetLogicalTableMapDataTransforms.builder()
//  .castColumnTypeOperation(QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation)
//  .createColumnsOperation(QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation)
//  .filterOperation(QuicksightDataSetLogicalTableMapDataTransformsFilterOperation)
//  .projectOperation(QuicksightDataSetLogicalTableMapDataTransformsProjectOperation)
//  .renameColumnOperation(QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation)
//  .tagColumnOperation(QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.castColumnTypeOperation">castColumnTypeOperation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a></code> | <p>A transform operation that casts a column to a different type.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.createColumnsOperation">createColumnsOperation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a></code> | <p>A transform operation that creates calculated columns. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.filterOperation">filterOperation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a></code> | <p>A transform operation that filters rows based on a condition.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.projectOperation">projectOperation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a></code> | <p>A transform operation that projects columns. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.renameColumnOperation">renameColumnOperation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a></code> | <p>A transform operation that renames a column.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.tagColumnOperation">tagColumnOperation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a></code> | <p>A transform operation that tags a column with additional information.</p>. |

---

##### `castColumnTypeOperation`<sup>Optional</sup> <a name="castColumnTypeOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.castColumnTypeOperation"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation getCastColumnTypeOperation();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

<p>A transform operation that casts a column to a different type.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#cast_column_type_operation QuicksightDataSet#cast_column_type_operation}

---

##### `createColumnsOperation`<sup>Optional</sup> <a name="createColumnsOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.createColumnsOperation"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation getCreateColumnsOperation();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

<p>A transform operation that creates calculated columns.

Columns created in one such
operation form a lexical closure.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#create_columns_operation QuicksightDataSet#create_columns_operation}

---

##### `filterOperation`<sup>Optional</sup> <a name="filterOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.filterOperation"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsFilterOperation getFilterOperation();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

<p>A transform operation that filters rows based on a condition.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#filter_operation QuicksightDataSet#filter_operation}

---

##### `projectOperation`<sup>Optional</sup> <a name="projectOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.projectOperation"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsProjectOperation getProjectOperation();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

<p>A transform operation that projects columns.

Operations that come after a projection
can only refer to projected columns.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#project_operation QuicksightDataSet#project_operation}

---

##### `renameColumnOperation`<sup>Optional</sup> <a name="renameColumnOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.renameColumnOperation"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation getRenameColumnOperation();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

<p>A transform operation that renames a column.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#rename_column_operation QuicksightDataSet#rename_column_operation}

---

##### `tagColumnOperation`<sup>Optional</sup> <a name="tagColumnOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.tagColumnOperation"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation getTagColumnOperation();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

<p>A transform operation that tags a column with additional information.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#tag_column_operation QuicksightDataSet#tag_column_operation}

---

### QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation;

QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.builder()
//  .columnName(java.lang.String)
//  .format(java.lang.String)
//  .newColumnType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.columnName">columnName</a></code> | <code>java.lang.String</code> | <p>Column name.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.format">format</a></code> | <code>java.lang.String</code> | <p>When casting a column from string to datetime type, you can supply a string in a             format supported by Amazon QuickSight to denote the source data format.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.newColumnType">newColumnType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#new_column_type QuicksightDataSet#new_column_type}. |

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

<p>Column name.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

<p>When casting a column from string to datetime type, you can supply a string in a             format supported by Amazon QuickSight to denote the source data format.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#format QuicksightDataSet#format}

---

##### `newColumnType`<sup>Optional</sup> <a name="newColumnType" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.newColumnType"></a>

```java
public java.lang.String getNewColumnType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#new_column_type QuicksightDataSet#new_column_type}.

---

### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation;

QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation.builder()
//  .columns(IResolvable|java.util.List<QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation.property.columns">columns</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>></code> | <p>Calculated columns to create.</p>. |

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation.property.columns"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns> getColumns();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>>

<p>Calculated columns to create.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}

---

### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns;

QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.builder()
//  .columnId(java.lang.String)
//  .columnName(java.lang.String)
//  .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.columnId">columnId</a></code> | <code>java.lang.String</code> | <p>A unique ID to identify a calculated column. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.columnName">columnName</a></code> | <code>java.lang.String</code> | <p>Column name.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.expression">expression</a></code> | <code>java.lang.String</code> | <p>An expression that defines the calculated column.</p>. |

---

##### `columnId`<sup>Optional</sup> <a name="columnId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.columnId"></a>

```java
public java.lang.String getColumnId();
```

- *Type:* java.lang.String

<p>A unique ID to identify a calculated column.

During a dataset update, if the column ID
of a calculated column matches that of an existing calculated column, Amazon QuickSight
preserves the existing calculated column.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#column_id QuicksightDataSet#column_id}

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

<p>Column name.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

<p>An expression that defines the calculated column.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#expression QuicksightDataSet#expression}

---

### QuicksightDataSetLogicalTableMapDataTransformsFilterOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsFilterOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation;

QuicksightDataSetLogicalTableMapDataTransformsFilterOperation.builder()
//  .conditionExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation.property.conditionExpression">conditionExpression</a></code> | <code>java.lang.String</code> | <p>An expression that must evaluate to a Boolean value. |

---

##### `conditionExpression`<sup>Optional</sup> <a name="conditionExpression" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation.property.conditionExpression"></a>

```java
public java.lang.String getConditionExpression();
```

- *Type:* java.lang.String

<p>An expression that must evaluate to a Boolean value.

Rows for which the expression
evaluates to true are kept in the dataset.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#condition_expression QuicksightDataSet#condition_expression}

---

### QuicksightDataSetLogicalTableMapDataTransformsProjectOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsProjectOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation;

QuicksightDataSetLogicalTableMapDataTransformsProjectOperation.builder()
//  .projectedColumns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation.property.projectedColumns">projectedColumns</a></code> | <code>java.util.List<java.lang.String></code> | <p>Projected columns.</p>. |

---

##### `projectedColumns`<sup>Optional</sup> <a name="projectedColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation.property.projectedColumns"></a>

```java
public java.util.List<java.lang.String> getProjectedColumns();
```

- *Type:* java.util.List<java.lang.String>

<p>Projected columns.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#projected_columns QuicksightDataSet#projected_columns}

---

### QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation;

QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.builder()
//  .columnName(java.lang.String)
//  .newColumnName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.property.columnName">columnName</a></code> | <code>java.lang.String</code> | <p>The name of the column to be renamed.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.property.newColumnName">newColumnName</a></code> | <code>java.lang.String</code> | <p>The new name for the column.</p>. |

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

<p>The name of the column to be renamed.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}

---

##### `newColumnName`<sup>Optional</sup> <a name="newColumnName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.property.newColumnName"></a>

```java
public java.lang.String getNewColumnName();
```

- *Type:* java.lang.String

<p>The new name for the column.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#new_column_name QuicksightDataSet#new_column_name}

---

### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation;

QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.builder()
//  .columnName(java.lang.String)
//  .tags(IResolvable|java.util.List<QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.property.columnName">columnName</a></code> | <code>java.lang.String</code> | <p>The column that this operation acts on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>></code> | <p>The dataset column tag, currently only used for geospatial type tagging. |

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

<p>The column that this operation acts on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.property.tags"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>>

<p>The dataset column tag, currently only used for geospatial type tagging.

.</p>
<note>
<p>This is not tags for the AWS tagging feature. .</p>
</note>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#tags QuicksightDataSet#tags}

---

### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags;

QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.builder()
//  .columnDescription(QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription)
//  .columnGeographicRole(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.property.columnDescription">columnDescription</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a></code> | <p>Metadata that contains a description for a column.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.property.columnGeographicRole">columnGeographicRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#column_geographic_role QuicksightDataSet#column_geographic_role}. |

---

##### `columnDescription`<sup>Optional</sup> <a name="columnDescription" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.property.columnDescription"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription getColumnDescription();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

<p>Metadata that contains a description for a column.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#column_description QuicksightDataSet#column_description}

---

##### `columnGeographicRole`<sup>Optional</sup> <a name="columnGeographicRole" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.property.columnGeographicRole"></a>

```java
public java.lang.String getColumnGeographicRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#column_geographic_role QuicksightDataSet#column_geographic_role}.

---

### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription;

QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription.builder()
//  .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription.property.text">text</a></code> | <code>java.lang.String</code> | <p>The text of a description for a column.</p>. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

<p>The text of a description for a column.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#text QuicksightDataSet#text}

---

### QuicksightDataSetLogicalTableMapSource <a name="QuicksightDataSetLogicalTableMapSource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapSource;

QuicksightDataSetLogicalTableMapSource.builder()
//  .dataSetArn(java.lang.String)
//  .joinInstruction(QuicksightDataSetLogicalTableMapSourceJoinInstruction)
//  .physicalTableId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.dataSetArn">dataSetArn</a></code> | <code>java.lang.String</code> | <p>The Amazon Resource Name (ARN) for the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.joinInstruction">joinInstruction</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a></code> | <p>Join instruction.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.physicalTableId">physicalTableId</a></code> | <code>java.lang.String</code> | <p>Physical table ID.</p>. |

---

##### `dataSetArn`<sup>Optional</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.dataSetArn"></a>

```java
public java.lang.String getDataSetArn();
```

- *Type:* java.lang.String

<p>The Amazon Resource Name (ARN) for the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#data_set_arn QuicksightDataSet#data_set_arn}

---

##### `joinInstruction`<sup>Optional</sup> <a name="joinInstruction" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.joinInstruction"></a>

```java
public QuicksightDataSetLogicalTableMapSourceJoinInstruction getJoinInstruction();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

<p>Join instruction.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#join_instruction QuicksightDataSet#join_instruction}

---

##### `physicalTableId`<sup>Optional</sup> <a name="physicalTableId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.physicalTableId"></a>

```java
public java.lang.String getPhysicalTableId();
```

- *Type:* java.lang.String

<p>Physical table ID.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#physical_table_id QuicksightDataSet#physical_table_id}

---

### QuicksightDataSetLogicalTableMapSourceJoinInstruction <a name="QuicksightDataSetLogicalTableMapSourceJoinInstruction" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapSourceJoinInstruction;

QuicksightDataSetLogicalTableMapSourceJoinInstruction.builder()
//  .leftJoinKeyProperties(QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties)
//  .leftOperand(java.lang.String)
//  .onClause(java.lang.String)
//  .rightJoinKeyProperties(QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties)
//  .rightOperand(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.leftJoinKeyProperties">leftJoinKeyProperties</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#left_join_key_properties QuicksightDataSet#left_join_key_properties}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.leftOperand">leftOperand</a></code> | <code>java.lang.String</code> | <p>Left operand.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.onClause">onClause</a></code> | <code>java.lang.String</code> | <p>On Clause.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.rightJoinKeyProperties">rightJoinKeyProperties</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#right_join_key_properties QuicksightDataSet#right_join_key_properties}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.rightOperand">rightOperand</a></code> | <code>java.lang.String</code> | <p>Right operand.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}. |

---

##### `leftJoinKeyProperties`<sup>Optional</sup> <a name="leftJoinKeyProperties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.leftJoinKeyProperties"></a>

```java
public QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties getLeftJoinKeyProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#left_join_key_properties QuicksightDataSet#left_join_key_properties}.

---

##### `leftOperand`<sup>Optional</sup> <a name="leftOperand" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.leftOperand"></a>

```java
public java.lang.String getLeftOperand();
```

- *Type:* java.lang.String

<p>Left operand.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#left_operand QuicksightDataSet#left_operand}

---

##### `onClause`<sup>Optional</sup> <a name="onClause" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.onClause"></a>

```java
public java.lang.String getOnClause();
```

- *Type:* java.lang.String

<p>On Clause.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#on_clause QuicksightDataSet#on_clause}

---

##### `rightJoinKeyProperties`<sup>Optional</sup> <a name="rightJoinKeyProperties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.rightJoinKeyProperties"></a>

```java
public QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties getRightJoinKeyProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#right_join_key_properties QuicksightDataSet#right_join_key_properties}.

---

##### `rightOperand`<sup>Optional</sup> <a name="rightOperand" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.rightOperand"></a>

```java
public java.lang.String getRightOperand();
```

- *Type:* java.lang.String

<p>Right operand.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#right_operand QuicksightDataSet#right_operand}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}.

---

### QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties;

QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties.builder()
//  .uniqueKey(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties.property.uniqueKey">uniqueKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}. |

---

##### `uniqueKey`<sup>Optional</sup> <a name="uniqueKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties.property.uniqueKey"></a>

```java
public java.lang.Boolean|IResolvable getUniqueKey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}.

---

### QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties;

QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties.builder()
//  .uniqueKey(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties.property.uniqueKey">uniqueKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}. |

---

##### `uniqueKey`<sup>Optional</sup> <a name="uniqueKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties.property.uniqueKey"></a>

```java
public java.lang.Boolean|IResolvable getUniqueKey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}.

---

### QuicksightDataSetOutputColumns <a name="QuicksightDataSetOutputColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumns.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetOutputColumns;

QuicksightDataSetOutputColumns.builder()
    .build();
```


### QuicksightDataSetPermissions <a name="QuicksightDataSetPermissions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPermissions;

QuicksightDataSetPermissions.builder()
//  .actions(java.util.List<java.lang.String>)
//  .principal(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | <p>The IAM action to grant or revoke permissions on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions.property.principal">principal</a></code> | <code>java.lang.String</code> | <p>The Amazon Resource Name (ARN) of the principal. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

<p>The IAM action to grant or revoke permissions on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#actions QuicksightDataSet#actions}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

<p>The Amazon Resource Name (ARN) of the principal.

This can be one of the
following:</p>
<ul>
<li>
<p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
</li>
<li>
<p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
</li>
<li>
<p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
ARN. Use this option only to share resources (templates) across AWS accounts.
(This is less common.) </p>
</li>
</ul>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#principal QuicksightDataSet#principal}

---

### QuicksightDataSetPhysicalTableMap <a name="QuicksightDataSetPhysicalTableMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMap;

QuicksightDataSetPhysicalTableMap.builder()
//  .customSql(QuicksightDataSetPhysicalTableMapCustomSql)
//  .relationalTable(QuicksightDataSetPhysicalTableMapRelationalTable)
//  .s3Source(QuicksightDataSetPhysicalTableMapS3Source)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.customSql">customSql</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a></code> | <p>A physical table type built from the results of the custom SQL query.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.relationalTable">relationalTable</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a></code> | <p>A physical table type for relational data sources.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.s3Source">s3Source</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a></code> | <p>A physical table type for as S3 data source.</p>. |

---

##### `customSql`<sup>Optional</sup> <a name="customSql" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.customSql"></a>

```java
public QuicksightDataSetPhysicalTableMapCustomSql getCustomSql();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a>

<p>A physical table type built from the results of the custom SQL query.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#custom_sql QuicksightDataSet#custom_sql}

---

##### `relationalTable`<sup>Optional</sup> <a name="relationalTable" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.relationalTable"></a>

```java
public QuicksightDataSetPhysicalTableMapRelationalTable getRelationalTable();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a>

<p>A physical table type for relational data sources.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#relational_table QuicksightDataSet#relational_table}

---

##### `s3Source`<sup>Optional</sup> <a name="s3Source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.s3Source"></a>

```java
public QuicksightDataSetPhysicalTableMapS3Source getS3Source();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a>

<p>A physical table type for as S3 data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#s3_source QuicksightDataSet#s3_source}

---

### QuicksightDataSetPhysicalTableMapCustomSql <a name="QuicksightDataSetPhysicalTableMapCustomSql" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapCustomSql;

QuicksightDataSetPhysicalTableMapCustomSql.builder()
//  .columns(IResolvable|java.util.List<QuicksightDataSetPhysicalTableMapCustomSqlColumns>)
//  .dataSourceArn(java.lang.String)
//  .name(java.lang.String)
//  .sqlQuery(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.columns">columns</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a>></code> | <p>The column schema from the SQL query result set.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.dataSourceArn">dataSourceArn</a></code> | <code>java.lang.String</code> | <p>The Amazon Resource Name (ARN) of the data source.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.name">name</a></code> | <code>java.lang.String</code> | <p>A display name for the SQL query result.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.sqlQuery">sqlQuery</a></code> | <code>java.lang.String</code> | <p>The SQL query.</p>. |

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.columns"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetPhysicalTableMapCustomSqlColumns> getColumns();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a>>

<p>The column schema from the SQL query result set.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}

---

##### `dataSourceArn`<sup>Optional</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.dataSourceArn"></a>

```java
public java.lang.String getDataSourceArn();
```

- *Type:* java.lang.String

<p>The Amazon Resource Name (ARN) of the data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

<p>A display name for the SQL query result.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

##### `sqlQuery`<sup>Optional</sup> <a name="sqlQuery" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.sqlQuery"></a>

```java
public java.lang.String getSqlQuery();
```

- *Type:* java.lang.String

<p>The SQL query.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#sql_query QuicksightDataSet#sql_query}

---

### QuicksightDataSetPhysicalTableMapCustomSqlColumns <a name="QuicksightDataSetPhysicalTableMapCustomSqlColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapCustomSqlColumns;

QuicksightDataSetPhysicalTableMapCustomSqlColumns.builder()
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.property.name">name</a></code> | <code>java.lang.String</code> | <p>The name of this column in the underlying data source.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

<p>The name of this column in the underlying data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}.

---

### QuicksightDataSetPhysicalTableMapRelationalTable <a name="QuicksightDataSetPhysicalTableMapRelationalTable" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapRelationalTable;

QuicksightDataSetPhysicalTableMapRelationalTable.builder()
//  .catalog(java.lang.String)
//  .dataSourceArn(java.lang.String)
//  .inputColumns(IResolvable|java.util.List<QuicksightDataSetPhysicalTableMapRelationalTableInputColumns>)
//  .name(java.lang.String)
//  .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.catalog">catalog</a></code> | <code>java.lang.String</code> | <p>The catalog associated with a table.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.dataSourceArn">dataSourceArn</a></code> | <code>java.lang.String</code> | <p>The Amazon Resource Name (ARN) for the data source.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.inputColumns">inputColumns</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>></code> | <p>The column schema of the table.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.name">name</a></code> | <code>java.lang.String</code> | <p>The name of the relational table.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.schema">schema</a></code> | <code>java.lang.String</code> | <p>The schema name. This name applies to certain relational database engines.</p>. |

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

<p>The catalog associated with a table.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#catalog QuicksightDataSet#catalog}

---

##### `dataSourceArn`<sup>Optional</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.dataSourceArn"></a>

```java
public java.lang.String getDataSourceArn();
```

- *Type:* java.lang.String

<p>The Amazon Resource Name (ARN) for the data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}

---

##### `inputColumns`<sup>Optional</sup> <a name="inputColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.inputColumns"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetPhysicalTableMapRelationalTableInputColumns> getInputColumns();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>>

<p>The column schema of the table.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#input_columns QuicksightDataSet#input_columns}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

<p>The name of the relational table.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

<p>The schema name. This name applies to certain relational database engines.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#schema QuicksightDataSet#schema}

---

### QuicksightDataSetPhysicalTableMapRelationalTableInputColumns <a name="QuicksightDataSetPhysicalTableMapRelationalTableInputColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns;

QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.builder()
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.property.name">name</a></code> | <code>java.lang.String</code> | <p>The name of this column in the underlying data source.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

<p>The name of this column in the underlying data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}.

---

### QuicksightDataSetPhysicalTableMapS3Source <a name="QuicksightDataSetPhysicalTableMapS3Source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapS3Source;

QuicksightDataSetPhysicalTableMapS3Source.builder()
//  .dataSourceArn(java.lang.String)
//  .inputColumns(IResolvable|java.util.List<QuicksightDataSetPhysicalTableMapS3SourceInputColumns>)
//  .uploadSettings(QuicksightDataSetPhysicalTableMapS3SourceUploadSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.dataSourceArn">dataSourceArn</a></code> | <code>java.lang.String</code> | <p>The amazon Resource Name (ARN) for the data source.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.inputColumns">inputColumns</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>></code> | <p>A physical table type for as S3 data source.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.uploadSettings">uploadSettings</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a></code> | <p>Information about the format for a source file or files.</p>. |

---

##### `dataSourceArn`<sup>Optional</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.dataSourceArn"></a>

```java
public java.lang.String getDataSourceArn();
```

- *Type:* java.lang.String

<p>The amazon Resource Name (ARN) for the data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}

---

##### `inputColumns`<sup>Optional</sup> <a name="inputColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.inputColumns"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetPhysicalTableMapS3SourceInputColumns> getInputColumns();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>>

<p>A physical table type for as S3 data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#input_columns QuicksightDataSet#input_columns}

---

##### `uploadSettings`<sup>Optional</sup> <a name="uploadSettings" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.uploadSettings"></a>

```java
public QuicksightDataSetPhysicalTableMapS3SourceUploadSettings getUploadSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

<p>Information about the format for a source file or files.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#upload_settings QuicksightDataSet#upload_settings}

---

### QuicksightDataSetPhysicalTableMapS3SourceInputColumns <a name="QuicksightDataSetPhysicalTableMapS3SourceInputColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapS3SourceInputColumns;

QuicksightDataSetPhysicalTableMapS3SourceInputColumns.builder()
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.property.name">name</a></code> | <code>java.lang.String</code> | <p>The name of this column in the underlying data source.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

<p>The name of this column in the underlying data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}.

---

### QuicksightDataSetPhysicalTableMapS3SourceUploadSettings <a name="QuicksightDataSetPhysicalTableMapS3SourceUploadSettings" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings;

QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.builder()
//  .containsHeader(java.lang.Boolean|IResolvable)
//  .delimiter(java.lang.String)
//  .format(java.lang.String)
//  .startFromRow(java.lang.Number)
//  .textQualifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.containsHeader">containsHeader</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | <p>Whether the file has a header row, or the files each have a header row.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | <p>The delimiter between values in the file.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#format QuicksightDataSet#format}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.startFromRow">startFromRow</a></code> | <code>java.lang.Number</code> | <p>A row number to start reading data from.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.textQualifier">textQualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#text_qualifier QuicksightDataSet#text_qualifier}. |

---

##### `containsHeader`<sup>Optional</sup> <a name="containsHeader" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.containsHeader"></a>

```java
public java.lang.Boolean|IResolvable getContainsHeader();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

<p>Whether the file has a header row, or the files each have a header row.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#contains_header QuicksightDataSet#contains_header}

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

<p>The delimiter between values in the file.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#delimiter QuicksightDataSet#delimiter}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#format QuicksightDataSet#format}.

---

##### `startFromRow`<sup>Optional</sup> <a name="startFromRow" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.startFromRow"></a>

```java
public java.lang.Number getStartFromRow();
```

- *Type:* java.lang.Number

<p>A row number to start reading data from.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#start_from_row QuicksightDataSet#start_from_row}

---

##### `textQualifier`<sup>Optional</sup> <a name="textQualifier" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.textQualifier"></a>

```java
public java.lang.String getTextQualifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#text_qualifier QuicksightDataSet#text_qualifier}.

---

### QuicksightDataSetRowLevelPermissionDataSet <a name="QuicksightDataSetRowLevelPermissionDataSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetRowLevelPermissionDataSet;

QuicksightDataSetRowLevelPermissionDataSet.builder()
//  .arn(java.lang.String)
//  .formatVersion(java.lang.String)
//  .namespace(java.lang.String)
//  .permissionPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.arn">arn</a></code> | <code>java.lang.String</code> | <p>The Amazon Resource Name (ARN) of the permission dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.formatVersion">formatVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#format_version QuicksightDataSet#format_version}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.namespace">namespace</a></code> | <code>java.lang.String</code> | <p>The namespace associated with the row-level permissions dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.permissionPolicy">permissionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#permission_policy QuicksightDataSet#permission_policy}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

<p>The Amazon Resource Name (ARN) of the permission dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#arn QuicksightDataSet#arn}

---

##### `formatVersion`<sup>Optional</sup> <a name="formatVersion" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.formatVersion"></a>

```java
public java.lang.String getFormatVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#format_version QuicksightDataSet#format_version}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

<p>The namespace associated with the row-level permissions dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#namespace QuicksightDataSet#namespace}

---

##### `permissionPolicy`<sup>Optional</sup> <a name="permissionPolicy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.permissionPolicy"></a>

```java
public java.lang.String getPermissionPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#permission_policy QuicksightDataSet#permission_policy}.

---

### QuicksightDataSetTags <a name="QuicksightDataSetTags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetTags;

QuicksightDataSetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags.property.key">key</a></code> | <code>java.lang.String</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags.property.value">value</a></code> | <code>java.lang.String</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#key QuicksightDataSet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_data_set#value QuicksightDataSet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference <a name="QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference;

new QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resetColumns">resetColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumns` <a name="resetColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resetColumns"></a>

```java
public void resetColumns()
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columnsInput">columnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columnsInput"></a>

```java
public java.util.List<java.lang.String> getColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetColumnGroupsGeoSpatialColumnGroup getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

---


### QuicksightDataSetColumnGroupsList <a name="QuicksightDataSetColumnGroupsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetColumnGroupsList;

new QuicksightDataSetColumnGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.get"></a>

```java
public QuicksightDataSetColumnGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetColumnGroups> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>>

---


### QuicksightDataSetColumnGroupsOutputReference <a name="QuicksightDataSetColumnGroupsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetColumnGroupsOutputReference;

new QuicksightDataSetColumnGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.putGeoSpatialColumnGroup">putGeoSpatialColumnGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resetGeoSpatialColumnGroup">resetGeoSpatialColumnGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGeoSpatialColumnGroup` <a name="putGeoSpatialColumnGroup" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.putGeoSpatialColumnGroup"></a>

```java
public void putGeoSpatialColumnGroup(QuicksightDataSetColumnGroupsGeoSpatialColumnGroup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.putGeoSpatialColumnGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

---

##### `resetGeoSpatialColumnGroup` <a name="resetGeoSpatialColumnGroup" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resetGeoSpatialColumnGroup"></a>

```java
public void resetGeoSpatialColumnGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroup">geoSpatialColumnGroup</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference">QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroupInput">geoSpatialColumnGroupInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `geoSpatialColumnGroup`<sup>Required</sup> <a name="geoSpatialColumnGroup" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroup"></a>

```java
public QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference getGeoSpatialColumnGroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference">QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference</a>

---

##### `geoSpatialColumnGroupInput`<sup>Optional</sup> <a name="geoSpatialColumnGroupInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroupInput"></a>

```java
public IResolvable|QuicksightDataSetColumnGroupsGeoSpatialColumnGroup getGeoSpatialColumnGroupInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetColumnGroups getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>

---


### QuicksightDataSetColumnLevelPermissionRulesList <a name="QuicksightDataSetColumnLevelPermissionRulesList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetColumnLevelPermissionRulesList;

new QuicksightDataSetColumnLevelPermissionRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.get"></a>

```java
public QuicksightDataSetColumnLevelPermissionRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetColumnLevelPermissionRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>>

---


### QuicksightDataSetColumnLevelPermissionRulesOutputReference <a name="QuicksightDataSetColumnLevelPermissionRulesOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetColumnLevelPermissionRulesOutputReference;

new QuicksightDataSetColumnLevelPermissionRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resetPrincipals">resetPrincipals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resetColumnNames"></a>

```java
public void resetColumnNames()
```

##### `resetPrincipals` <a name="resetPrincipals" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resetPrincipals"></a>

```java
public void resetPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principalsInput">principalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNames">columnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNamesInput"></a>

```java
public java.util.List<java.lang.String> getColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principalsInput"></a>

```java
public java.util.List<java.lang.String> getPrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNames"></a>

```java
public java.util.List<java.lang.String> getColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principals"></a>

```java
public java.util.List<java.lang.String> getPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetColumnLevelPermissionRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>

---


### QuicksightDataSetDataSetUsageConfigurationOutputReference <a name="QuicksightDataSetDataSetUsageConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetDataSetUsageConfigurationOutputReference;

new QuicksightDataSetDataSetUsageConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resetDisableUseAsDirectQuerySource">resetDisableUseAsDirectQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resetDisableUseAsImportedSource">resetDisableUseAsImportedSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableUseAsDirectQuerySource` <a name="resetDisableUseAsDirectQuerySource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resetDisableUseAsDirectQuerySource"></a>

```java
public void resetDisableUseAsDirectQuerySource()
```

##### `resetDisableUseAsImportedSource` <a name="resetDisableUseAsImportedSource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resetDisableUseAsImportedSource"></a>

```java
public void resetDisableUseAsImportedSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySourceInput">disableUseAsDirectQuerySourceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSourceInput">disableUseAsImportedSourceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySource">disableUseAsDirectQuerySource</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSource">disableUseAsImportedSource</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableUseAsDirectQuerySourceInput`<sup>Optional</sup> <a name="disableUseAsDirectQuerySourceInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySourceInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableUseAsDirectQuerySourceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableUseAsImportedSourceInput`<sup>Optional</sup> <a name="disableUseAsImportedSourceInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSourceInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableUseAsImportedSourceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableUseAsDirectQuerySource`<sup>Required</sup> <a name="disableUseAsDirectQuerySource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySource"></a>

```java
public java.lang.Boolean|IResolvable getDisableUseAsDirectQuerySource();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableUseAsImportedSource`<sup>Required</sup> <a name="disableUseAsImportedSource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSource"></a>

```java
public java.lang.Boolean|IResolvable getDisableUseAsImportedSource();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetDataSetUsageConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a>

---


### QuicksightDataSetFieldFoldersMap <a name="QuicksightDataSetFieldFoldersMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetFieldFoldersMap;

new QuicksightDataSetFieldFoldersMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.get"></a>

```java
public QuicksightDataSetFieldFoldersOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, QuicksightDataSetFieldFolders> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>>

---


### QuicksightDataSetFieldFoldersOutputReference <a name="QuicksightDataSetFieldFoldersOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetFieldFoldersOutputReference;

new QuicksightDataSetFieldFoldersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resetColumns">resetColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumns` <a name="resetColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resetColumns"></a>

```java
public void resetColumns()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.columnsInput">columnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.columnsInput"></a>

```java
public java.util.List<java.lang.String> getColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetFieldFolders getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>

---


### QuicksightDataSetIngestionWaitPolicyOutputReference <a name="QuicksightDataSetIngestionWaitPolicyOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetIngestionWaitPolicyOutputReference;

new QuicksightDataSetIngestionWaitPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.resetIngestionWaitTimeInHours">resetIngestionWaitTimeInHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.resetWaitForSpiceIngestion">resetWaitForSpiceIngestion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIngestionWaitTimeInHours` <a name="resetIngestionWaitTimeInHours" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.resetIngestionWaitTimeInHours"></a>

```java
public void resetIngestionWaitTimeInHours()
```

##### `resetWaitForSpiceIngestion` <a name="resetWaitForSpiceIngestion" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.resetWaitForSpiceIngestion"></a>

```java
public void resetWaitForSpiceIngestion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.ingestionWaitTimeInHoursInput">ingestionWaitTimeInHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.waitForSpiceIngestionInput">waitForSpiceIngestionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.ingestionWaitTimeInHours">ingestionWaitTimeInHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.waitForSpiceIngestion">waitForSpiceIngestion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy">QuicksightDataSetIngestionWaitPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingestionWaitTimeInHoursInput`<sup>Optional</sup> <a name="ingestionWaitTimeInHoursInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.ingestionWaitTimeInHoursInput"></a>

```java
public java.lang.Number getIngestionWaitTimeInHoursInput();
```

- *Type:* java.lang.Number

---

##### `waitForSpiceIngestionInput`<sup>Optional</sup> <a name="waitForSpiceIngestionInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.waitForSpiceIngestionInput"></a>

```java
public java.lang.Boolean|IResolvable getWaitForSpiceIngestionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ingestionWaitTimeInHours`<sup>Required</sup> <a name="ingestionWaitTimeInHours" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.ingestionWaitTimeInHours"></a>

```java
public java.lang.Number getIngestionWaitTimeInHours();
```

- *Type:* java.lang.Number

---

##### `waitForSpiceIngestion`<sup>Required</sup> <a name="waitForSpiceIngestion" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.waitForSpiceIngestion"></a>

```java
public java.lang.Boolean|IResolvable getWaitForSpiceIngestion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetIngestionWaitPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy">QuicksightDataSetIngestionWaitPolicy</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference;

new QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resetNewColumnType">resetNewColumnType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnName` <a name="resetColumnName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resetColumnName"></a>

```java
public void resetColumnName()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetNewColumnType` <a name="resetNewColumnType" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resetNewColumnType"></a>

```java
public void resetNewColumnType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnTypeInput">newColumnTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnType">newColumnType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnNameInput"></a>

```java
public java.lang.String getColumnNameInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `newColumnTypeInput`<sup>Optional</sup> <a name="newColumnTypeInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnTypeInput"></a>

```java
public java.lang.String getNewColumnTypeInput();
```

- *Type:* java.lang.String

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `newColumnType`<sup>Required</sup> <a name="newColumnType" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnType"></a>

```java
public java.lang.String getNewColumnType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList;

new QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>>

---


### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference;

new QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resetColumnId">resetColumnId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnId` <a name="resetColumnId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resetColumnId"></a>

```java
public void resetColumnId()
```

##### `resetColumnName` <a name="resetColumnName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resetColumnName"></a>

```java
public void resetColumnName()
```

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resetExpression"></a>

```java
public void resetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnIdInput">columnIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnId">columnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnIdInput`<sup>Optional</sup> <a name="columnIdInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnIdInput"></a>

```java
public java.lang.String getColumnIdInput();
```

- *Type:* java.lang.String

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnNameInput"></a>

```java
public java.lang.String getColumnNameInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `columnId`<sup>Required</sup> <a name="columnId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnId"></a>

```java
public java.lang.String getColumnId();
```

- *Type:* java.lang.String

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference;

new QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.putColumns">putColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resetColumns">resetColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumns` <a name="putColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.putColumns"></a>

```java
public void putColumns(IResolvable|java.util.List<QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.putColumns.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>>

---

##### `resetColumns` <a name="resetColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resetColumns"></a>

```java
public void resetColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columnsInput">columnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columns"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList getColumns();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList</a>

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columnsInput"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns> getColumnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference;

new QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resetConditionExpression">resetConditionExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionExpression` <a name="resetConditionExpression" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resetConditionExpression"></a>

```java
public void resetConditionExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpressionInput">conditionExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpression">conditionExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionExpressionInput`<sup>Optional</sup> <a name="conditionExpressionInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpressionInput"></a>

```java
public java.lang.String getConditionExpressionInput();
```

- *Type:* java.lang.String

---

##### `conditionExpression`<sup>Required</sup> <a name="conditionExpression" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpression"></a>

```java
public java.lang.String getConditionExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapDataTransformsFilterOperation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsList <a name="QuicksightDataSetLogicalTableMapDataTransformsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsList;

new QuicksightDataSetLogicalTableMapDataTransformsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.get"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetLogicalTableMapDataTransforms> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a>>

---


### QuicksightDataSetLogicalTableMapDataTransformsOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsOutputReference;

new QuicksightDataSetLogicalTableMapDataTransformsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCastColumnTypeOperation">putCastColumnTypeOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCreateColumnsOperation">putCreateColumnsOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putFilterOperation">putFilterOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putProjectOperation">putProjectOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putRenameColumnOperation">putRenameColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putTagColumnOperation">putTagColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetCastColumnTypeOperation">resetCastColumnTypeOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetCreateColumnsOperation">resetCreateColumnsOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetFilterOperation">resetFilterOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetProjectOperation">resetProjectOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetRenameColumnOperation">resetRenameColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetTagColumnOperation">resetTagColumnOperation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCastColumnTypeOperation` <a name="putCastColumnTypeOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCastColumnTypeOperation"></a>

```java
public void putCastColumnTypeOperation(QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCastColumnTypeOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

---

##### `putCreateColumnsOperation` <a name="putCreateColumnsOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCreateColumnsOperation"></a>

```java
public void putCreateColumnsOperation(QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCreateColumnsOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

---

##### `putFilterOperation` <a name="putFilterOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putFilterOperation"></a>

```java
public void putFilterOperation(QuicksightDataSetLogicalTableMapDataTransformsFilterOperation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putFilterOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

---

##### `putProjectOperation` <a name="putProjectOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putProjectOperation"></a>

```java
public void putProjectOperation(QuicksightDataSetLogicalTableMapDataTransformsProjectOperation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putProjectOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

---

##### `putRenameColumnOperation` <a name="putRenameColumnOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putRenameColumnOperation"></a>

```java
public void putRenameColumnOperation(QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putRenameColumnOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

---

##### `putTagColumnOperation` <a name="putTagColumnOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putTagColumnOperation"></a>

```java
public void putTagColumnOperation(QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putTagColumnOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

---

##### `resetCastColumnTypeOperation` <a name="resetCastColumnTypeOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetCastColumnTypeOperation"></a>

```java
public void resetCastColumnTypeOperation()
```

##### `resetCreateColumnsOperation` <a name="resetCreateColumnsOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetCreateColumnsOperation"></a>

```java
public void resetCreateColumnsOperation()
```

##### `resetFilterOperation` <a name="resetFilterOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetFilterOperation"></a>

```java
public void resetFilterOperation()
```

##### `resetProjectOperation` <a name="resetProjectOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetProjectOperation"></a>

```java
public void resetProjectOperation()
```

##### `resetRenameColumnOperation` <a name="resetRenameColumnOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetRenameColumnOperation"></a>

```java
public void resetRenameColumnOperation()
```

##### `resetTagColumnOperation` <a name="resetTagColumnOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetTagColumnOperation"></a>

```java
public void resetTagColumnOperation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperation">castColumnTypeOperation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperation">createColumnsOperation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperation">filterOperation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperation">projectOperation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperation">renameColumnOperation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperation">tagColumnOperation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperationInput">castColumnTypeOperationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperationInput">createColumnsOperationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperationInput">filterOperationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperationInput">projectOperationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperationInput">renameColumnOperationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperationInput">tagColumnOperationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `castColumnTypeOperation`<sup>Required</sup> <a name="castColumnTypeOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperation"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference getCastColumnTypeOperation();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference</a>

---

##### `createColumnsOperation`<sup>Required</sup> <a name="createColumnsOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperation"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference getCreateColumnsOperation();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference</a>

---

##### `filterOperation`<sup>Required</sup> <a name="filterOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperation"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference getFilterOperation();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference</a>

---

##### `projectOperation`<sup>Required</sup> <a name="projectOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperation"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference getProjectOperation();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference</a>

---

##### `renameColumnOperation`<sup>Required</sup> <a name="renameColumnOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperation"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference getRenameColumnOperation();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference</a>

---

##### `tagColumnOperation`<sup>Required</sup> <a name="tagColumnOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperation"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference getTagColumnOperation();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference</a>

---

##### `castColumnTypeOperationInput`<sup>Optional</sup> <a name="castColumnTypeOperationInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperationInput"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation getCastColumnTypeOperationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

---

##### `createColumnsOperationInput`<sup>Optional</sup> <a name="createColumnsOperationInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperationInput"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation getCreateColumnsOperationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

---

##### `filterOperationInput`<sup>Optional</sup> <a name="filterOperationInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperationInput"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapDataTransformsFilterOperation getFilterOperationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

---

##### `projectOperationInput`<sup>Optional</sup> <a name="projectOperationInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperationInput"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapDataTransformsProjectOperation getProjectOperationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

---

##### `renameColumnOperationInput`<sup>Optional</sup> <a name="renameColumnOperationInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperationInput"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation getRenameColumnOperationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

---

##### `tagColumnOperationInput`<sup>Optional</sup> <a name="tagColumnOperationInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperationInput"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation getTagColumnOperationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapDataTransforms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference;

new QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resetProjectedColumns">resetProjectedColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectedColumns` <a name="resetProjectedColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resetProjectedColumns"></a>

```java
public void resetProjectedColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumnsInput">projectedColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumns">projectedColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `projectedColumnsInput`<sup>Optional</sup> <a name="projectedColumnsInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumnsInput"></a>

```java
public java.util.List<java.lang.String> getProjectedColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectedColumns`<sup>Required</sup> <a name="projectedColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumns"></a>

```java
public java.util.List<java.lang.String> getProjectedColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapDataTransformsProjectOperation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference;

new QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resetNewColumnName">resetNewColumnName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnName` <a name="resetColumnName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resetColumnName"></a>

```java
public void resetColumnName()
```

##### `resetNewColumnName` <a name="resetNewColumnName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resetNewColumnName"></a>

```java
public void resetNewColumnName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnNameInput">newColumnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnName">newColumnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnNameInput"></a>

```java
public java.lang.String getColumnNameInput();
```

- *Type:* java.lang.String

---

##### `newColumnNameInput`<sup>Optional</sup> <a name="newColumnNameInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnNameInput"></a>

```java
public java.lang.String getNewColumnNameInput();
```

- *Type:* java.lang.String

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `newColumnName`<sup>Required</sup> <a name="newColumnName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnName"></a>

```java
public java.lang.String getNewColumnName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference;

new QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>>

---

##### `resetColumnName` <a name="resetColumnName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resetColumnName"></a>

```java
public void resetColumnName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tags"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList</a>

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnNameInput"></a>

```java
public java.lang.String getColumnNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>>

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference;

new QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList;

new QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>>

---


### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference;

new QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.putColumnDescription">putColumnDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resetColumnDescription">resetColumnDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resetColumnGeographicRole">resetColumnGeographicRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnDescription` <a name="putColumnDescription" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.putColumnDescription"></a>

```java
public void putColumnDescription(QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.putColumnDescription.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

---

##### `resetColumnDescription` <a name="resetColumnDescription" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resetColumnDescription"></a>

```java
public void resetColumnDescription()
```

##### `resetColumnGeographicRole` <a name="resetColumnGeographicRole" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resetColumnGeographicRole"></a>

```java
public void resetColumnGeographicRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescription">columnDescription</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescriptionInput">columnDescriptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRoleInput">columnGeographicRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRole">columnGeographicRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnDescription`<sup>Required</sup> <a name="columnDescription" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescription"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference getColumnDescription();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference</a>

---

##### `columnDescriptionInput`<sup>Optional</sup> <a name="columnDescriptionInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescriptionInput"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription getColumnDescriptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

---

##### `columnGeographicRoleInput`<sup>Optional</sup> <a name="columnGeographicRoleInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRoleInput"></a>

```java
public java.lang.String getColumnGeographicRoleInput();
```

- *Type:* java.lang.String

---

##### `columnGeographicRole`<sup>Required</sup> <a name="columnGeographicRole" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRole"></a>

```java
public java.lang.String getColumnGeographicRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>

---


### QuicksightDataSetLogicalTableMapMap <a name="QuicksightDataSetLogicalTableMapMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapMap;

new QuicksightDataSetLogicalTableMapMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.get"></a>

```java
public QuicksightDataSetLogicalTableMapOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, QuicksightDataSetLogicalTableMap> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>>

---


### QuicksightDataSetLogicalTableMapOutputReference <a name="QuicksightDataSetLogicalTableMapOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapOutputReference;

new QuicksightDataSetLogicalTableMapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putDataTransforms">putDataTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resetDataTransforms">resetDataTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataTransforms` <a name="putDataTransforms" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putDataTransforms"></a>

```java
public void putDataTransforms(IResolvable|java.util.List<QuicksightDataSetLogicalTableMapDataTransforms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putDataTransforms.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a>>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putSource"></a>

```java
public void putSource(QuicksightDataSetLogicalTableMapSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a>

---

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetDataTransforms` <a name="resetDataTransforms" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resetDataTransforms"></a>

```java
public void resetDataTransforms()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.dataTransforms">dataTransforms</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList">QuicksightDataSetLogicalTableMapDataTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference">QuicksightDataSetLogicalTableMapSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.dataTransformsInput">dataTransformsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.sourceInput">sourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataTransforms`<sup>Required</sup> <a name="dataTransforms" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.dataTransforms"></a>

```java
public QuicksightDataSetLogicalTableMapDataTransformsList getDataTransforms();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList">QuicksightDataSetLogicalTableMapDataTransformsList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.source"></a>

```java
public QuicksightDataSetLogicalTableMapSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference">QuicksightDataSetLogicalTableMapSourceOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `dataTransformsInput`<sup>Optional</sup> <a name="dataTransformsInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.dataTransformsInput"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetLogicalTableMapDataTransforms> getDataTransformsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a>>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.sourceInput"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapSource getSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMap getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>

---


### QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference;

new QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resetUniqueKey">resetUniqueKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUniqueKey` <a name="resetUniqueKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resetUniqueKey"></a>

```java
public void resetUniqueKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKeyInput">uniqueKeyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKey">uniqueKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uniqueKeyInput`<sup>Optional</sup> <a name="uniqueKeyInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKeyInput"></a>

```java
public java.lang.Boolean|IResolvable getUniqueKeyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `uniqueKey`<sup>Required</sup> <a name="uniqueKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKey"></a>

```java
public java.lang.Boolean|IResolvable getUniqueKey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

---


### QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference;

new QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putLeftJoinKeyProperties">putLeftJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putRightJoinKeyProperties">putRightJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetLeftJoinKeyProperties">resetLeftJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetLeftOperand">resetLeftOperand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetOnClause">resetOnClause</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetRightJoinKeyProperties">resetRightJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetRightOperand">resetRightOperand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLeftJoinKeyProperties` <a name="putLeftJoinKeyProperties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putLeftJoinKeyProperties"></a>

```java
public void putLeftJoinKeyProperties(QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putLeftJoinKeyProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

---

##### `putRightJoinKeyProperties` <a name="putRightJoinKeyProperties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putRightJoinKeyProperties"></a>

```java
public void putRightJoinKeyProperties(QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putRightJoinKeyProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

---

##### `resetLeftJoinKeyProperties` <a name="resetLeftJoinKeyProperties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetLeftJoinKeyProperties"></a>

```java
public void resetLeftJoinKeyProperties()
```

##### `resetLeftOperand` <a name="resetLeftOperand" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetLeftOperand"></a>

```java
public void resetLeftOperand()
```

##### `resetOnClause` <a name="resetOnClause" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetOnClause"></a>

```java
public void resetOnClause()
```

##### `resetRightJoinKeyProperties` <a name="resetRightJoinKeyProperties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetRightJoinKeyProperties"></a>

```java
public void resetRightJoinKeyProperties()
```

##### `resetRightOperand` <a name="resetRightOperand" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetRightOperand"></a>

```java
public void resetRightOperand()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyProperties">leftJoinKeyProperties</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyProperties">rightJoinKeyProperties</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyPropertiesInput">leftJoinKeyPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperandInput">leftOperandInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClauseInput">onClauseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyPropertiesInput">rightJoinKeyPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperandInput">rightOperandInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperand">leftOperand</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClause">onClause</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperand">rightOperand</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `leftJoinKeyProperties`<sup>Required</sup> <a name="leftJoinKeyProperties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyProperties"></a>

```java
public QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference getLeftJoinKeyProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference</a>

---

##### `rightJoinKeyProperties`<sup>Required</sup> <a name="rightJoinKeyProperties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyProperties"></a>

```java
public QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference getRightJoinKeyProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference</a>

---

##### `leftJoinKeyPropertiesInput`<sup>Optional</sup> <a name="leftJoinKeyPropertiesInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyPropertiesInput"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties getLeftJoinKeyPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

---

##### `leftOperandInput`<sup>Optional</sup> <a name="leftOperandInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperandInput"></a>

```java
public java.lang.String getLeftOperandInput();
```

- *Type:* java.lang.String

---

##### `onClauseInput`<sup>Optional</sup> <a name="onClauseInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClauseInput"></a>

```java
public java.lang.String getOnClauseInput();
```

- *Type:* java.lang.String

---

##### `rightJoinKeyPropertiesInput`<sup>Optional</sup> <a name="rightJoinKeyPropertiesInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyPropertiesInput"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties getRightJoinKeyPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

---

##### `rightOperandInput`<sup>Optional</sup> <a name="rightOperandInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperandInput"></a>

```java
public java.lang.String getRightOperandInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `leftOperand`<sup>Required</sup> <a name="leftOperand" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperand"></a>

```java
public java.lang.String getLeftOperand();
```

- *Type:* java.lang.String

---

##### `onClause`<sup>Required</sup> <a name="onClause" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClause"></a>

```java
public java.lang.String getOnClause();
```

- *Type:* java.lang.String

---

##### `rightOperand`<sup>Required</sup> <a name="rightOperand" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperand"></a>

```java
public java.lang.String getRightOperand();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapSourceJoinInstruction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

---


### QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference;

new QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resetUniqueKey">resetUniqueKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUniqueKey` <a name="resetUniqueKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resetUniqueKey"></a>

```java
public void resetUniqueKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKeyInput">uniqueKeyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKey">uniqueKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uniqueKeyInput`<sup>Optional</sup> <a name="uniqueKeyInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKeyInput"></a>

```java
public java.lang.Boolean|IResolvable getUniqueKeyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `uniqueKey`<sup>Required</sup> <a name="uniqueKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKey"></a>

```java
public java.lang.Boolean|IResolvable getUniqueKey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

---


### QuicksightDataSetLogicalTableMapSourceOutputReference <a name="QuicksightDataSetLogicalTableMapSourceOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetLogicalTableMapSourceOutputReference;

new QuicksightDataSetLogicalTableMapSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.putJoinInstruction">putJoinInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetDataSetArn">resetDataSetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetJoinInstruction">resetJoinInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetPhysicalTableId">resetPhysicalTableId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJoinInstruction` <a name="putJoinInstruction" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.putJoinInstruction"></a>

```java
public void putJoinInstruction(QuicksightDataSetLogicalTableMapSourceJoinInstruction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.putJoinInstruction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

---

##### `resetDataSetArn` <a name="resetDataSetArn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetDataSetArn"></a>

```java
public void resetDataSetArn()
```

##### `resetJoinInstruction` <a name="resetJoinInstruction" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetJoinInstruction"></a>

```java
public void resetJoinInstruction()
```

##### `resetPhysicalTableId` <a name="resetPhysicalTableId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetPhysicalTableId"></a>

```java
public void resetPhysicalTableId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstruction">joinInstruction</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArnInput">dataSetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstructionInput">joinInstructionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableIdInput">physicalTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArn">dataSetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableId">physicalTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `joinInstruction`<sup>Required</sup> <a name="joinInstruction" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstruction"></a>

```java
public QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference getJoinInstruction();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference</a>

---

##### `dataSetArnInput`<sup>Optional</sup> <a name="dataSetArnInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArnInput"></a>

```java
public java.lang.String getDataSetArnInput();
```

- *Type:* java.lang.String

---

##### `joinInstructionInput`<sup>Optional</sup> <a name="joinInstructionInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstructionInput"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapSourceJoinInstruction getJoinInstructionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

---

##### `physicalTableIdInput`<sup>Optional</sup> <a name="physicalTableIdInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableIdInput"></a>

```java
public java.lang.String getPhysicalTableIdInput();
```

- *Type:* java.lang.String

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArn"></a>

```java
public java.lang.String getDataSetArn();
```

- *Type:* java.lang.String

---

##### `physicalTableId`<sup>Required</sup> <a name="physicalTableId" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableId"></a>

```java
public java.lang.String getPhysicalTableId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetLogicalTableMapSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a>

---


### QuicksightDataSetOutputColumnsList <a name="QuicksightDataSetOutputColumnsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetOutputColumnsList;

new QuicksightDataSetOutputColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.get"></a>

```java
public QuicksightDataSetOutputColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### QuicksightDataSetOutputColumnsOutputReference <a name="QuicksightDataSetOutputColumnsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetOutputColumnsOutputReference;

new QuicksightDataSetOutputColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumns">QuicksightDataSetOutputColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.internalValue"></a>

```java
public QuicksightDataSetOutputColumns getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumns">QuicksightDataSetOutputColumns</a>

---


### QuicksightDataSetPermissionsList <a name="QuicksightDataSetPermissionsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPermissionsList;

new QuicksightDataSetPermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.get"></a>

```java
public QuicksightDataSetPermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetPermissions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>>

---


### QuicksightDataSetPermissionsOutputReference <a name="QuicksightDataSetPermissionsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPermissionsOutputReference;

new QuicksightDataSetPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resetActions"></a>

```java
public void resetActions()
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resetPrincipal"></a>

```java
public void resetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetPermissions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>

---


### QuicksightDataSetPhysicalTableMapCustomSqlColumnsList <a name="QuicksightDataSetPhysicalTableMapCustomSqlColumnsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList;

new QuicksightDataSetPhysicalTableMapCustomSqlColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get"></a>

```java
public QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetPhysicalTableMapCustomSqlColumns> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a>>

---


### QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference <a name="QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference;

new QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetPhysicalTableMapCustomSqlColumns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a>

---


### QuicksightDataSetPhysicalTableMapCustomSqlOutputReference <a name="QuicksightDataSetPhysicalTableMapCustomSqlOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference;

new QuicksightDataSetPhysicalTableMapCustomSqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.putColumns">putColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetColumns">resetColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetDataSourceArn">resetDataSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetSqlQuery">resetSqlQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumns` <a name="putColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.putColumns"></a>

```java
public void putColumns(IResolvable|java.util.List<QuicksightDataSetPhysicalTableMapCustomSqlColumns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.putColumns.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a>>

---

##### `resetColumns` <a name="resetColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetColumns"></a>

```java
public void resetColumns()
```

##### `resetDataSourceArn` <a name="resetDataSourceArn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetDataSourceArn"></a>

```java
public void resetDataSourceArn()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSqlQuery` <a name="resetSqlQuery" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetSqlQuery"></a>

```java
public void resetSqlQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList">QuicksightDataSetPhysicalTableMapCustomSqlColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columnsInput">columnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArnInput">dataSourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQueryInput">sqlQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArn">dataSourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQuery">sqlQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columns"></a>

```java
public QuicksightDataSetPhysicalTableMapCustomSqlColumnsList getColumns();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList">QuicksightDataSetPhysicalTableMapCustomSqlColumnsList</a>

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columnsInput"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetPhysicalTableMapCustomSqlColumns> getColumnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a>>

---

##### `dataSourceArnInput`<sup>Optional</sup> <a name="dataSourceArnInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArnInput"></a>

```java
public java.lang.String getDataSourceArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sqlQueryInput`<sup>Optional</sup> <a name="sqlQueryInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQueryInput"></a>

```java
public java.lang.String getSqlQueryInput();
```

- *Type:* java.lang.String

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArn"></a>

```java
public java.lang.String getDataSourceArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sqlQuery`<sup>Required</sup> <a name="sqlQuery" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQuery"></a>

```java
public java.lang.String getSqlQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetPhysicalTableMapCustomSql getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a>

---


### QuicksightDataSetPhysicalTableMapMap <a name="QuicksightDataSetPhysicalTableMapMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapMap;

new QuicksightDataSetPhysicalTableMapMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.get"></a>

```java
public QuicksightDataSetPhysicalTableMapOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, QuicksightDataSetPhysicalTableMap> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>>

---


### QuicksightDataSetPhysicalTableMapOutputReference <a name="QuicksightDataSetPhysicalTableMapOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapOutputReference;

new QuicksightDataSetPhysicalTableMapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putCustomSql">putCustomSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putRelationalTable">putRelationalTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putS3Source">putS3Source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetCustomSql">resetCustomSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetRelationalTable">resetRelationalTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetS3Source">resetS3Source</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomSql` <a name="putCustomSql" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putCustomSql"></a>

```java
public void putCustomSql(QuicksightDataSetPhysicalTableMapCustomSql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putCustomSql.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a>

---

##### `putRelationalTable` <a name="putRelationalTable" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putRelationalTable"></a>

```java
public void putRelationalTable(QuicksightDataSetPhysicalTableMapRelationalTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putRelationalTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a>

---

##### `putS3Source` <a name="putS3Source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putS3Source"></a>

```java
public void putS3Source(QuicksightDataSetPhysicalTableMapS3Source value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putS3Source.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a>

---

##### `resetCustomSql` <a name="resetCustomSql" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetCustomSql"></a>

```java
public void resetCustomSql()
```

##### `resetRelationalTable` <a name="resetRelationalTable" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetRelationalTable"></a>

```java
public void resetRelationalTable()
```

##### `resetS3Source` <a name="resetS3Source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetS3Source"></a>

```java
public void resetS3Source()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.customSql">customSql</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference">QuicksightDataSetPhysicalTableMapCustomSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.relationalTable">relationalTable</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference">QuicksightDataSetPhysicalTableMapRelationalTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.s3Source">s3Source</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference">QuicksightDataSetPhysicalTableMapS3SourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.customSqlInput">customSqlInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.relationalTableInput">relationalTableInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.s3SourceInput">s3SourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customSql`<sup>Required</sup> <a name="customSql" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.customSql"></a>

```java
public QuicksightDataSetPhysicalTableMapCustomSqlOutputReference getCustomSql();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference">QuicksightDataSetPhysicalTableMapCustomSqlOutputReference</a>

---

##### `relationalTable`<sup>Required</sup> <a name="relationalTable" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.relationalTable"></a>

```java
public QuicksightDataSetPhysicalTableMapRelationalTableOutputReference getRelationalTable();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference">QuicksightDataSetPhysicalTableMapRelationalTableOutputReference</a>

---

##### `s3Source`<sup>Required</sup> <a name="s3Source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.s3Source"></a>

```java
public QuicksightDataSetPhysicalTableMapS3SourceOutputReference getS3Source();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference">QuicksightDataSetPhysicalTableMapS3SourceOutputReference</a>

---

##### `customSqlInput`<sup>Optional</sup> <a name="customSqlInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.customSqlInput"></a>

```java
public IResolvable|QuicksightDataSetPhysicalTableMapCustomSql getCustomSqlInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a>

---

##### `relationalTableInput`<sup>Optional</sup> <a name="relationalTableInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.relationalTableInput"></a>

```java
public IResolvable|QuicksightDataSetPhysicalTableMapRelationalTable getRelationalTableInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a>

---

##### `s3SourceInput`<sup>Optional</sup> <a name="s3SourceInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.s3SourceInput"></a>

```java
public IResolvable|QuicksightDataSetPhysicalTableMapS3Source getS3SourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetPhysicalTableMap getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>

---


### QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList <a name="QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList;

new QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get"></a>

```java
public QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetPhysicalTableMapRelationalTableInputColumns> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>>

---


### QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference <a name="QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference;

new QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetPhysicalTableMapRelationalTableInputColumns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>

---


### QuicksightDataSetPhysicalTableMapRelationalTableOutputReference <a name="QuicksightDataSetPhysicalTableMapRelationalTableOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference;

new QuicksightDataSetPhysicalTableMapRelationalTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.putInputColumns">putInputColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetDataSourceArn">resetDataSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetInputColumns">resetInputColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputColumns` <a name="putInputColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.putInputColumns"></a>

```java
public void putInputColumns(IResolvable|java.util.List<QuicksightDataSetPhysicalTableMapRelationalTableInputColumns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.putInputColumns.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>>

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetDataSourceArn` <a name="resetDataSourceArn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetDataSourceArn"></a>

```java
public void resetDataSourceArn()
```

##### `resetInputColumns` <a name="resetInputColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetInputColumns"></a>

```java
public void resetInputColumns()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumns">inputColumns</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList">QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArnInput">dataSourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumnsInput">inputColumnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArn">dataSourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumns"></a>

```java
public QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList getInputColumns();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList">QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `dataSourceArnInput`<sup>Optional</sup> <a name="dataSourceArnInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArnInput"></a>

```java
public java.lang.String getDataSourceArnInput();
```

- *Type:* java.lang.String

---

##### `inputColumnsInput`<sup>Optional</sup> <a name="inputColumnsInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumnsInput"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetPhysicalTableMapRelationalTableInputColumns> getInputColumnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArn"></a>

```java
public java.lang.String getDataSourceArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetPhysicalTableMapRelationalTable getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a>

---


### QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList <a name="QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList;

new QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get"></a>

```java
public QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetPhysicalTableMapS3SourceInputColumns> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>>

---


### QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference <a name="QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference;

new QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetPhysicalTableMapS3SourceInputColumns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>

---


### QuicksightDataSetPhysicalTableMapS3SourceOutputReference <a name="QuicksightDataSetPhysicalTableMapS3SourceOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapS3SourceOutputReference;

new QuicksightDataSetPhysicalTableMapS3SourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putInputColumns">putInputColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putUploadSettings">putUploadSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resetDataSourceArn">resetDataSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resetInputColumns">resetInputColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resetUploadSettings">resetUploadSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputColumns` <a name="putInputColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putInputColumns"></a>

```java
public void putInputColumns(IResolvable|java.util.List<QuicksightDataSetPhysicalTableMapS3SourceInputColumns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putInputColumns.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>>

---

##### `putUploadSettings` <a name="putUploadSettings" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putUploadSettings"></a>

```java
public void putUploadSettings(QuicksightDataSetPhysicalTableMapS3SourceUploadSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putUploadSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

---

##### `resetDataSourceArn` <a name="resetDataSourceArn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resetDataSourceArn"></a>

```java
public void resetDataSourceArn()
```

##### `resetInputColumns` <a name="resetInputColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resetInputColumns"></a>

```java
public void resetInputColumns()
```

##### `resetUploadSettings` <a name="resetUploadSettings" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resetUploadSettings"></a>

```java
public void resetUploadSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumns">inputColumns</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList">QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettings">uploadSettings</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference">QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArnInput">dataSourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumnsInput">inputColumnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettingsInput">uploadSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArn">dataSourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumns"></a>

```java
public QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList getInputColumns();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList">QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList</a>

---

##### `uploadSettings`<sup>Required</sup> <a name="uploadSettings" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettings"></a>

```java
public QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference getUploadSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference">QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference</a>

---

##### `dataSourceArnInput`<sup>Optional</sup> <a name="dataSourceArnInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArnInput"></a>

```java
public java.lang.String getDataSourceArnInput();
```

- *Type:* java.lang.String

---

##### `inputColumnsInput`<sup>Optional</sup> <a name="inputColumnsInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumnsInput"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetPhysicalTableMapS3SourceInputColumns> getInputColumnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>>

---

##### `uploadSettingsInput`<sup>Optional</sup> <a name="uploadSettingsInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettingsInput"></a>

```java
public IResolvable|QuicksightDataSetPhysicalTableMapS3SourceUploadSettings getUploadSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArn"></a>

```java
public java.lang.String getDataSourceArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetPhysicalTableMapS3Source getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a>

---


### QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference <a name="QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference;

new QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetContainsHeader">resetContainsHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetStartFromRow">resetStartFromRow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetTextQualifier">resetTextQualifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainsHeader` <a name="resetContainsHeader" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetContainsHeader"></a>

```java
public void resetContainsHeader()
```

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetDelimiter"></a>

```java
public void resetDelimiter()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetStartFromRow` <a name="resetStartFromRow" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetStartFromRow"></a>

```java
public void resetStartFromRow()
```

##### `resetTextQualifier` <a name="resetTextQualifier" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetTextQualifier"></a>

```java
public void resetTextQualifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeaderInput">containsHeaderInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRowInput">startFromRowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifierInput">textQualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeader">containsHeader</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRow">startFromRow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifier">textQualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containsHeaderInput`<sup>Optional</sup> <a name="containsHeaderInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeaderInput"></a>

```java
public java.lang.Boolean|IResolvable getContainsHeaderInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiterInput"></a>

```java
public java.lang.String getDelimiterInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `startFromRowInput`<sup>Optional</sup> <a name="startFromRowInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRowInput"></a>

```java
public java.lang.Number getStartFromRowInput();
```

- *Type:* java.lang.Number

---

##### `textQualifierInput`<sup>Optional</sup> <a name="textQualifierInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifierInput"></a>

```java
public java.lang.String getTextQualifierInput();
```

- *Type:* java.lang.String

---

##### `containsHeader`<sup>Required</sup> <a name="containsHeader" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeader"></a>

```java
public java.lang.Boolean|IResolvable getContainsHeader();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `startFromRow`<sup>Required</sup> <a name="startFromRow" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRow"></a>

```java
public java.lang.Number getStartFromRow();
```

- *Type:* java.lang.Number

---

##### `textQualifier`<sup>Required</sup> <a name="textQualifier" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifier"></a>

```java
public java.lang.String getTextQualifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetPhysicalTableMapS3SourceUploadSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

---


### QuicksightDataSetRowLevelPermissionDataSetOutputReference <a name="QuicksightDataSetRowLevelPermissionDataSetOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetRowLevelPermissionDataSetOutputReference;

new QuicksightDataSetRowLevelPermissionDataSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetFormatVersion">resetFormatVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetPermissionPolicy">resetPermissionPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetArn"></a>

```java
public void resetArn()
```

##### `resetFormatVersion` <a name="resetFormatVersion" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetFormatVersion"></a>

```java
public void resetFormatVersion()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPermissionPolicy` <a name="resetPermissionPolicy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetPermissionPolicy"></a>

```java
public void resetPermissionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersionInput">formatVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicyInput">permissionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersion">formatVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicy">permissionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `formatVersionInput`<sup>Optional</sup> <a name="formatVersionInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersionInput"></a>

```java
public java.lang.String getFormatVersionInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `permissionPolicyInput`<sup>Optional</sup> <a name="permissionPolicyInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicyInput"></a>

```java
public java.lang.String getPermissionPolicyInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `formatVersion`<sup>Required</sup> <a name="formatVersion" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersion"></a>

```java
public java.lang.String getFormatVersion();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `permissionPolicy`<sup>Required</sup> <a name="permissionPolicy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicy"></a>

```java
public java.lang.String getPermissionPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetRowLevelPermissionDataSet getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a>

---


### QuicksightDataSetTagsList <a name="QuicksightDataSetTagsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetTagsList;

new QuicksightDataSetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.get"></a>

```java
public QuicksightDataSetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightDataSetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>>

---


### QuicksightDataSetTagsOutputReference <a name="QuicksightDataSetTagsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_data_set.QuicksightDataSetTagsOutputReference;

new QuicksightDataSetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightDataSetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>

---



