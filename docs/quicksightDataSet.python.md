# `quicksightDataSet` Submodule <a name="`quicksightDataSet` Submodule" id="@cdktn/provider-awscc.quicksightDataSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightDataSet <a name="QuicksightDataSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set awscc_quicksight_data_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aws_account_id: str = None,
  column_groups: IResolvable | typing.List[QuicksightDataSetColumnGroups] = None,
  column_level_permission_rules: IResolvable | typing.List[QuicksightDataSetColumnLevelPermissionRules] = None,
  data_set_id: str = None,
  data_set_usage_configuration: QuicksightDataSetDataSetUsageConfiguration = None,
  field_folders: IResolvable | typing.Mapping[QuicksightDataSetFieldFolders] = None,
  import_mode: str = None,
  ingestion_wait_policy: QuicksightDataSetIngestionWaitPolicy = None,
  logical_table_map: IResolvable | typing.Mapping[QuicksightDataSetLogicalTableMap] = None,
  name: str = None,
  permissions: IResolvable | typing.List[QuicksightDataSetPermissions] = None,
  physical_table_map: IResolvable | typing.Mapping[QuicksightDataSetPhysicalTableMap] = None,
  row_level_permission_data_set: QuicksightDataSetRowLevelPermissionDataSet = None,
  tags: IResolvable | typing.List[QuicksightDataSetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#aws_account_id QuicksightDataSet#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.columnGroups">column_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>]</code> | <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.columnLevelPermissionRules">column_level_permission_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_level_permission_rules QuicksightDataSet#column_level_permission_rules}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.dataSetId">data_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#data_set_id QuicksightDataSet#data_set_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.dataSetUsageConfiguration">data_set_usage_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a></code> | <p>The dataset usage configuration for the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.fieldFolders">field_folders</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#field_folders QuicksightDataSet#field_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.importMode">import_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#import_mode QuicksightDataSet#import_mode}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.ingestionWaitPolicy">ingestion_wait_policy</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy">QuicksightDataSetIngestionWaitPolicy</a></code> | <p>Wait policy to use when creating/updating dataset. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.logicalTableMap">logical_table_map</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#logical_table_map QuicksightDataSet#logical_table_map}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.name">name</a></code> | <code>str</code> | <p>The display name for the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.permissions">permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>]</code> | <p>A list of resource permissions on the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.physicalTableMap">physical_table_map</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#physical_table_map QuicksightDataSet#physical_table_map}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.rowLevelPermissionDataSet">row_level_permission_data_set</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a></code> | <p>The row-level security configuration for the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>]</code> | <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#aws_account_id QuicksightDataSet#aws_account_id}.

---

##### `column_groups`<sup>Optional</sup> <a name="column_groups" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.columnGroups"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>]

<p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_groups QuicksightDataSet#column_groups}

---

##### `column_level_permission_rules`<sup>Optional</sup> <a name="column_level_permission_rules" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.columnLevelPermissionRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_level_permission_rules QuicksightDataSet#column_level_permission_rules}.

---

##### `data_set_id`<sup>Optional</sup> <a name="data_set_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.dataSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#data_set_id QuicksightDataSet#data_set_id}.

---

##### `data_set_usage_configuration`<sup>Optional</sup> <a name="data_set_usage_configuration" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.dataSetUsageConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a>

<p>The dataset usage configuration for the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#data_set_usage_configuration QuicksightDataSet#data_set_usage_configuration}

---

##### `field_folders`<sup>Optional</sup> <a name="field_folders" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.fieldFolders"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#field_folders QuicksightDataSet#field_folders}.

---

##### `import_mode`<sup>Optional</sup> <a name="import_mode" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.importMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#import_mode QuicksightDataSet#import_mode}.

---

##### `ingestion_wait_policy`<sup>Optional</sup> <a name="ingestion_wait_policy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.ingestionWaitPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy">QuicksightDataSetIngestionWaitPolicy</a>

<p>Wait policy to use when creating/updating dataset.

Default is to wait for SPICE ingestion to finish with timeout of 36 hours.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#ingestion_wait_policy QuicksightDataSet#ingestion_wait_policy}

---

##### `logical_table_map`<sup>Optional</sup> <a name="logical_table_map" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.logicalTableMap"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#logical_table_map QuicksightDataSet#logical_table_map}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.name"></a>

- *Type:* str

<p>The display name for the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.permissions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>]

<p>A list of resource permissions on the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#permissions QuicksightDataSet#permissions}

---

##### `physical_table_map`<sup>Optional</sup> <a name="physical_table_map" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.physicalTableMap"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#physical_table_map QuicksightDataSet#physical_table_map}.

---

##### `row_level_permission_data_set`<sup>Optional</sup> <a name="row_level_permission_data_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.rowLevelPermissionDataSet"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a>

<p>The row-level security configuration for the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#row_level_permission_data_set QuicksightDataSet#row_level_permission_data_set}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>]

<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#tags QuicksightDataSet#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putColumnGroups">put_column_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putColumnLevelPermissionRules">put_column_level_permission_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putDataSetUsageConfiguration">put_data_set_usage_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putFieldFolders">put_field_folders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putIngestionWaitPolicy">put_ingestion_wait_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putLogicalTableMap">put_logical_table_map</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putPermissions">put_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putPhysicalTableMap">put_physical_table_map</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionDataSet">put_row_level_permission_data_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetColumnGroups">reset_column_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetColumnLevelPermissionRules">reset_column_level_permission_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetDataSetId">reset_data_set_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetDataSetUsageConfiguration">reset_data_set_usage_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetFieldFolders">reset_field_folders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetImportMode">reset_import_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetIngestionWaitPolicy">reset_ingestion_wait_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetLogicalTableMap">reset_logical_table_map</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetPhysicalTableMap">reset_physical_table_map</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetRowLevelPermissionDataSet">reset_row_level_permission_data_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_column_groups` <a name="put_column_groups" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putColumnGroups"></a>

```python
def put_column_groups(
  value: IResolvable | typing.List[QuicksightDataSetColumnGroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putColumnGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>]

---

##### `put_column_level_permission_rules` <a name="put_column_level_permission_rules" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putColumnLevelPermissionRules"></a>

```python
def put_column_level_permission_rules(
  value: IResolvable | typing.List[QuicksightDataSetColumnLevelPermissionRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putColumnLevelPermissionRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>]

---

##### `put_data_set_usage_configuration` <a name="put_data_set_usage_configuration" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putDataSetUsageConfiguration"></a>

```python
def put_data_set_usage_configuration(
  disable_use_as_direct_query_source: bool | IResolvable = None,
  disable_use_as_imported_source: bool | IResolvable = None
) -> None
```

###### `disable_use_as_direct_query_source`<sup>Optional</sup> <a name="disable_use_as_direct_query_source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putDataSetUsageConfiguration.parameter.disableUseAsDirectQuerySource"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#disable_use_as_direct_query_source QuicksightDataSet#disable_use_as_direct_query_source}.

---

###### `disable_use_as_imported_source`<sup>Optional</sup> <a name="disable_use_as_imported_source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putDataSetUsageConfiguration.parameter.disableUseAsImportedSource"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#disable_use_as_imported_source QuicksightDataSet#disable_use_as_imported_source}.

---

##### `put_field_folders` <a name="put_field_folders" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putFieldFolders"></a>

```python
def put_field_folders(
  value: IResolvable | typing.Mapping[QuicksightDataSetFieldFolders]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putFieldFolders.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>]

---

##### `put_ingestion_wait_policy` <a name="put_ingestion_wait_policy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putIngestionWaitPolicy"></a>

```python
def put_ingestion_wait_policy(
  ingestion_wait_time_in_hours: typing.Union[int, float] = None,
  wait_for_spice_ingestion: bool | IResolvable = None
) -> None
```

###### `ingestion_wait_time_in_hours`<sup>Optional</sup> <a name="ingestion_wait_time_in_hours" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putIngestionWaitPolicy.parameter.ingestionWaitTimeInHours"></a>

- *Type:* typing.Union[int, float]

<p>The maximum time (in hours) to wait for Ingestion to complete.

Default timeout is 36 hours.
Applicable only when DataSetImportMode mode is set to SPICE and WaitForSpiceIngestion is set to true.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#ingestion_wait_time_in_hours QuicksightDataSet#ingestion_wait_time_in_hours}

---

###### `wait_for_spice_ingestion`<sup>Optional</sup> <a name="wait_for_spice_ingestion" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putIngestionWaitPolicy.parameter.waitForSpiceIngestion"></a>

- *Type:* bool | cdktn.IResolvable

<p>Wait for SPICE ingestion to finish to mark dataset creation/update successful.

Default (true).
Applicable only when DataSetImportMode mode is set to SPICE.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#wait_for_spice_ingestion QuicksightDataSet#wait_for_spice_ingestion}

---

##### `put_logical_table_map` <a name="put_logical_table_map" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putLogicalTableMap"></a>

```python
def put_logical_table_map(
  value: IResolvable | typing.Mapping[QuicksightDataSetLogicalTableMap]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putLogicalTableMap.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>]

---

##### `put_permissions` <a name="put_permissions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putPermissions"></a>

```python
def put_permissions(
  value: IResolvable | typing.List[QuicksightDataSetPermissions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>]

---

##### `put_physical_table_map` <a name="put_physical_table_map" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putPhysicalTableMap"></a>

```python
def put_physical_table_map(
  value: IResolvable | typing.Mapping[QuicksightDataSetPhysicalTableMap]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putPhysicalTableMap.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>]

---

##### `put_row_level_permission_data_set` <a name="put_row_level_permission_data_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionDataSet"></a>

```python
def put_row_level_permission_data_set(
  arn: str = None,
  format_version: str = None,
  namespace: str = None,
  permission_policy: str = None
) -> None
```

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionDataSet.parameter.arn"></a>

- *Type:* str

<p>The Amazon Resource Name (ARN) of the permission dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#arn QuicksightDataSet#arn}

---

###### `format_version`<sup>Optional</sup> <a name="format_version" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionDataSet.parameter.formatVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#format_version QuicksightDataSet#format_version}.

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionDataSet.parameter.namespace"></a>

- *Type:* str

<p>The namespace associated with the row-level permissions dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#namespace QuicksightDataSet#namespace}

---

###### `permission_policy`<sup>Optional</sup> <a name="permission_policy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionDataSet.parameter.permissionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#permission_policy QuicksightDataSet#permission_policy}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[QuicksightDataSetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>]

---

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_column_groups` <a name="reset_column_groups" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetColumnGroups"></a>

```python
def reset_column_groups() -> None
```

##### `reset_column_level_permission_rules` <a name="reset_column_level_permission_rules" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetColumnLevelPermissionRules"></a>

```python
def reset_column_level_permission_rules() -> None
```

##### `reset_data_set_id` <a name="reset_data_set_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetDataSetId"></a>

```python
def reset_data_set_id() -> None
```

##### `reset_data_set_usage_configuration` <a name="reset_data_set_usage_configuration" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetDataSetUsageConfiguration"></a>

```python
def reset_data_set_usage_configuration() -> None
```

##### `reset_field_folders` <a name="reset_field_folders" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetFieldFolders"></a>

```python
def reset_field_folders() -> None
```

##### `reset_import_mode` <a name="reset_import_mode" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetImportMode"></a>

```python
def reset_import_mode() -> None
```

##### `reset_ingestion_wait_policy` <a name="reset_ingestion_wait_policy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetIngestionWaitPolicy"></a>

```python
def reset_ingestion_wait_policy() -> None
```

##### `reset_logical_table_map` <a name="reset_logical_table_map" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetLogicalTableMap"></a>

```python
def reset_logical_table_map() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_physical_table_map` <a name="reset_physical_table_map" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetPhysicalTableMap"></a>

```python
def reset_physical_table_map() -> None
```

##### `reset_row_level_permission_data_set` <a name="reset_row_level_permission_data_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetRowLevelPermissionDataSet"></a>

```python
def reset_row_level_permission_data_set() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a QuicksightDataSet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.isConstruct"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSet.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a QuicksightDataSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QuicksightDataSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QuicksightDataSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightDataSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.columnGroups">column_groups</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList">QuicksightDataSetColumnGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.columnLevelPermissionRules">column_level_permission_rules</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList">QuicksightDataSetColumnLevelPermissionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.consumedSpiceCapacityInBytes">consumed_spice_capacity_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dataSetUsageConfiguration">data_set_usage_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference">QuicksightDataSetDataSetUsageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.fieldFolders">field_folders</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap">QuicksightDataSetFieldFoldersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.ingestionWaitPolicy">ingestion_wait_policy</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference">QuicksightDataSetIngestionWaitPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.logicalTableMap">logical_table_map</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap">QuicksightDataSetLogicalTableMapMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.outputColumns">output_columns</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList">QuicksightDataSetOutputColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList">QuicksightDataSetPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.physicalTableMap">physical_table_map</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap">QuicksightDataSetPhysicalTableMapMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionDataSet">row_level_permission_data_set</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference">QuicksightDataSetRowLevelPermissionDataSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList">QuicksightDataSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.columnGroupsInput">column_groups_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.columnLevelPermissionRulesInput">column_level_permission_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dataSetIdInput">data_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dataSetUsageConfigurationInput">data_set_usage_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.fieldFoldersInput">field_folders_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.importModeInput">import_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.ingestionWaitPolicyInput">ingestion_wait_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy">QuicksightDataSetIngestionWaitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.logicalTableMapInput">logical_table_map_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.permissionsInput">permissions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.physicalTableMapInput">physical_table_map_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionDataSetInput">row_level_permission_data_set_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dataSetId">data_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.importMode">import_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `column_groups`<sup>Required</sup> <a name="column_groups" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.columnGroups"></a>

```python
column_groups: QuicksightDataSetColumnGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList">QuicksightDataSetColumnGroupsList</a>

---

##### `column_level_permission_rules`<sup>Required</sup> <a name="column_level_permission_rules" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.columnLevelPermissionRules"></a>

```python
column_level_permission_rules: QuicksightDataSetColumnLevelPermissionRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList">QuicksightDataSetColumnLevelPermissionRulesList</a>

---

##### `consumed_spice_capacity_in_bytes`<sup>Required</sup> <a name="consumed_spice_capacity_in_bytes" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.consumedSpiceCapacityInBytes"></a>

```python
consumed_spice_capacity_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `data_set_usage_configuration`<sup>Required</sup> <a name="data_set_usage_configuration" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dataSetUsageConfiguration"></a>

```python
data_set_usage_configuration: QuicksightDataSetDataSetUsageConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference">QuicksightDataSetDataSetUsageConfigurationOutputReference</a>

---

##### `field_folders`<sup>Required</sup> <a name="field_folders" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.fieldFolders"></a>

```python
field_folders: QuicksightDataSetFieldFoldersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap">QuicksightDataSetFieldFoldersMap</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingestion_wait_policy`<sup>Required</sup> <a name="ingestion_wait_policy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.ingestionWaitPolicy"></a>

```python
ingestion_wait_policy: QuicksightDataSetIngestionWaitPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference">QuicksightDataSetIngestionWaitPolicyOutputReference</a>

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `logical_table_map`<sup>Required</sup> <a name="logical_table_map" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.logicalTableMap"></a>

```python
logical_table_map: QuicksightDataSetLogicalTableMapMap
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap">QuicksightDataSetLogicalTableMapMap</a>

---

##### `output_columns`<sup>Required</sup> <a name="output_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.outputColumns"></a>

```python
output_columns: QuicksightDataSetOutputColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList">QuicksightDataSetOutputColumnsList</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.permissions"></a>

```python
permissions: QuicksightDataSetPermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList">QuicksightDataSetPermissionsList</a>

---

##### `physical_table_map`<sup>Required</sup> <a name="physical_table_map" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.physicalTableMap"></a>

```python
physical_table_map: QuicksightDataSetPhysicalTableMapMap
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap">QuicksightDataSetPhysicalTableMapMap</a>

---

##### `row_level_permission_data_set`<sup>Required</sup> <a name="row_level_permission_data_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionDataSet"></a>

```python
row_level_permission_data_set: QuicksightDataSetRowLevelPermissionDataSetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference">QuicksightDataSetRowLevelPermissionDataSetOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.tags"></a>

```python
tags: QuicksightDataSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList">QuicksightDataSetTagsList</a>

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `column_groups_input`<sup>Optional</sup> <a name="column_groups_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.columnGroupsInput"></a>

```python
column_groups_input: IResolvable | typing.List[QuicksightDataSetColumnGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>]

---

##### `column_level_permission_rules_input`<sup>Optional</sup> <a name="column_level_permission_rules_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.columnLevelPermissionRulesInput"></a>

```python
column_level_permission_rules_input: IResolvable | typing.List[QuicksightDataSetColumnLevelPermissionRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>]

---

##### `data_set_id_input`<sup>Optional</sup> <a name="data_set_id_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dataSetIdInput"></a>

```python
data_set_id_input: str
```

- *Type:* str

---

##### `data_set_usage_configuration_input`<sup>Optional</sup> <a name="data_set_usage_configuration_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dataSetUsageConfigurationInput"></a>

```python
data_set_usage_configuration_input: IResolvable | QuicksightDataSetDataSetUsageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a>

---

##### `field_folders_input`<sup>Optional</sup> <a name="field_folders_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.fieldFoldersInput"></a>

```python
field_folders_input: IResolvable | typing.Mapping[QuicksightDataSetFieldFolders]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>]

---

##### `import_mode_input`<sup>Optional</sup> <a name="import_mode_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.importModeInput"></a>

```python
import_mode_input: str
```

- *Type:* str

---

##### `ingestion_wait_policy_input`<sup>Optional</sup> <a name="ingestion_wait_policy_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.ingestionWaitPolicyInput"></a>

```python
ingestion_wait_policy_input: IResolvable | QuicksightDataSetIngestionWaitPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy">QuicksightDataSetIngestionWaitPolicy</a>

---

##### `logical_table_map_input`<sup>Optional</sup> <a name="logical_table_map_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.logicalTableMapInput"></a>

```python
logical_table_map_input: IResolvable | typing.Mapping[QuicksightDataSetLogicalTableMap]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.permissionsInput"></a>

```python
permissions_input: IResolvable | typing.List[QuicksightDataSetPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>]

---

##### `physical_table_map_input`<sup>Optional</sup> <a name="physical_table_map_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.physicalTableMapInput"></a>

```python
physical_table_map_input: IResolvable | typing.Mapping[QuicksightDataSetPhysicalTableMap]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>]

---

##### `row_level_permission_data_set_input`<sup>Optional</sup> <a name="row_level_permission_data_set_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionDataSetInput"></a>

```python
row_level_permission_data_set_input: IResolvable | QuicksightDataSetRowLevelPermissionDataSet
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[QuicksightDataSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `data_set_id`<sup>Required</sup> <a name="data_set_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.dataSetId"></a>

```python
data_set_id: str
```

- *Type:* str

---

##### `import_mode`<sup>Required</sup> <a name="import_mode" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.importMode"></a>

```python
import_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightDataSetColumnGroups <a name="QuicksightDataSetColumnGroups" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetColumnGroups(
  geo_spatial_column_group: QuicksightDataSetColumnGroupsGeoSpatialColumnGroup = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups.property.geoSpatialColumnGroup">geo_spatial_column_group</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a></code> | <p>Geospatial column group that denotes a hierarchy.</p>. |

---

##### `geo_spatial_column_group`<sup>Optional</sup> <a name="geo_spatial_column_group" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups.property.geoSpatialColumnGroup"></a>

```python
geo_spatial_column_group: QuicksightDataSetColumnGroupsGeoSpatialColumnGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

<p>Geospatial column group that denotes a hierarchy.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#geo_spatial_column_group QuicksightDataSet#geo_spatial_column_group}

---

### QuicksightDataSetColumnGroupsGeoSpatialColumnGroup <a name="QuicksightDataSetColumnGroupsGeoSpatialColumnGroup" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup(
  columns: typing.List[str] = None,
  country_code: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.columns">columns</a></code> | <code>typing.List[str]</code> | <p>Columns in this hierarchy.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.countryCode">country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#country_code QuicksightDataSet#country_code}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.name">name</a></code> | <code>str</code> | <p>A display name for the hierarchy.</p>. |

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

<p>Columns in this hierarchy.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#country_code QuicksightDataSet#country_code}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.name"></a>

```python
name: str
```

- *Type:* str

<p>A display name for the hierarchy.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

### QuicksightDataSetColumnLevelPermissionRules <a name="QuicksightDataSetColumnLevelPermissionRules" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules(
  column_names: typing.List[str] = None,
  principals: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_names QuicksightDataSet#column_names}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.property.principals">principals</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#principals QuicksightDataSet#principals}. |

---

##### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_names QuicksightDataSet#column_names}.

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#principals QuicksightDataSet#principals}.

---

### QuicksightDataSetConfig <a name="QuicksightDataSetConfig" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aws_account_id: str = None,
  column_groups: IResolvable | typing.List[QuicksightDataSetColumnGroups] = None,
  column_level_permission_rules: IResolvable | typing.List[QuicksightDataSetColumnLevelPermissionRules] = None,
  data_set_id: str = None,
  data_set_usage_configuration: QuicksightDataSetDataSetUsageConfiguration = None,
  field_folders: IResolvable | typing.Mapping[QuicksightDataSetFieldFolders] = None,
  import_mode: str = None,
  ingestion_wait_policy: QuicksightDataSetIngestionWaitPolicy = None,
  logical_table_map: IResolvable | typing.Mapping[QuicksightDataSetLogicalTableMap] = None,
  name: str = None,
  permissions: IResolvable | typing.List[QuicksightDataSetPermissions] = None,
  physical_table_map: IResolvable | typing.Mapping[QuicksightDataSetPhysicalTableMap] = None,
  row_level_permission_data_set: QuicksightDataSetRowLevelPermissionDataSet = None,
  tags: IResolvable | typing.List[QuicksightDataSetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#aws_account_id QuicksightDataSet#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.columnGroups">column_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>]</code> | <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.columnLevelPermissionRules">column_level_permission_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_level_permission_rules QuicksightDataSet#column_level_permission_rules}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.dataSetId">data_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#data_set_id QuicksightDataSet#data_set_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.dataSetUsageConfiguration">data_set_usage_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a></code> | <p>The dataset usage configuration for the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.fieldFolders">field_folders</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#field_folders QuicksightDataSet#field_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.importMode">import_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#import_mode QuicksightDataSet#import_mode}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.ingestionWaitPolicy">ingestion_wait_policy</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy">QuicksightDataSetIngestionWaitPolicy</a></code> | <p>Wait policy to use when creating/updating dataset. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.logicalTableMap">logical_table_map</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#logical_table_map QuicksightDataSet#logical_table_map}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.name">name</a></code> | <code>str</code> | <p>The display name for the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.permissions">permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>]</code> | <p>A list of resource permissions on the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.physicalTableMap">physical_table_map</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#physical_table_map QuicksightDataSet#physical_table_map}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.rowLevelPermissionDataSet">row_level_permission_data_set</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a></code> | <p>The row-level security configuration for the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>]</code> | <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#aws_account_id QuicksightDataSet#aws_account_id}.

---

##### `column_groups`<sup>Optional</sup> <a name="column_groups" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.columnGroups"></a>

```python
column_groups: IResolvable | typing.List[QuicksightDataSetColumnGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>]

<p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_groups QuicksightDataSet#column_groups}

---

##### `column_level_permission_rules`<sup>Optional</sup> <a name="column_level_permission_rules" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.columnLevelPermissionRules"></a>

```python
column_level_permission_rules: IResolvable | typing.List[QuicksightDataSetColumnLevelPermissionRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_level_permission_rules QuicksightDataSet#column_level_permission_rules}.

---

##### `data_set_id`<sup>Optional</sup> <a name="data_set_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.dataSetId"></a>

```python
data_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#data_set_id QuicksightDataSet#data_set_id}.

---

##### `data_set_usage_configuration`<sup>Optional</sup> <a name="data_set_usage_configuration" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.dataSetUsageConfiguration"></a>

```python
data_set_usage_configuration: QuicksightDataSetDataSetUsageConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a>

<p>The dataset usage configuration for the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#data_set_usage_configuration QuicksightDataSet#data_set_usage_configuration}

---

##### `field_folders`<sup>Optional</sup> <a name="field_folders" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.fieldFolders"></a>

```python
field_folders: IResolvable | typing.Mapping[QuicksightDataSetFieldFolders]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#field_folders QuicksightDataSet#field_folders}.

---

##### `import_mode`<sup>Optional</sup> <a name="import_mode" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.importMode"></a>

```python
import_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#import_mode QuicksightDataSet#import_mode}.

---

##### `ingestion_wait_policy`<sup>Optional</sup> <a name="ingestion_wait_policy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.ingestionWaitPolicy"></a>

```python
ingestion_wait_policy: QuicksightDataSetIngestionWaitPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy">QuicksightDataSetIngestionWaitPolicy</a>

<p>Wait policy to use when creating/updating dataset.

Default is to wait for SPICE ingestion to finish with timeout of 36 hours.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#ingestion_wait_policy QuicksightDataSet#ingestion_wait_policy}

---

##### `logical_table_map`<sup>Optional</sup> <a name="logical_table_map" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.logicalTableMap"></a>

```python
logical_table_map: IResolvable | typing.Mapping[QuicksightDataSetLogicalTableMap]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#logical_table_map QuicksightDataSet#logical_table_map}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

<p>The display name for the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.permissions"></a>

```python
permissions: IResolvable | typing.List[QuicksightDataSetPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>]

<p>A list of resource permissions on the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#permissions QuicksightDataSet#permissions}

---

##### `physical_table_map`<sup>Optional</sup> <a name="physical_table_map" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.physicalTableMap"></a>

```python
physical_table_map: IResolvable | typing.Mapping[QuicksightDataSetPhysicalTableMap]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#physical_table_map QuicksightDataSet#physical_table_map}.

---

##### `row_level_permission_data_set`<sup>Optional</sup> <a name="row_level_permission_data_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.rowLevelPermissionDataSet"></a>

```python
row_level_permission_data_set: QuicksightDataSetRowLevelPermissionDataSet
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a>

<p>The row-level security configuration for the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#row_level_permission_data_set QuicksightDataSet#row_level_permission_data_set}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[QuicksightDataSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>]

<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#tags QuicksightDataSet#tags}

---

### QuicksightDataSetDataSetUsageConfiguration <a name="QuicksightDataSetDataSetUsageConfiguration" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration(
  disable_use_as_direct_query_source: bool | IResolvable = None,
  disable_use_as_imported_source: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.property.disableUseAsDirectQuerySource">disable_use_as_direct_query_source</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#disable_use_as_direct_query_source QuicksightDataSet#disable_use_as_direct_query_source}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.property.disableUseAsImportedSource">disable_use_as_imported_source</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#disable_use_as_imported_source QuicksightDataSet#disable_use_as_imported_source}. |

---

##### `disable_use_as_direct_query_source`<sup>Optional</sup> <a name="disable_use_as_direct_query_source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.property.disableUseAsDirectQuerySource"></a>

```python
disable_use_as_direct_query_source: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#disable_use_as_direct_query_source QuicksightDataSet#disable_use_as_direct_query_source}.

---

##### `disable_use_as_imported_source`<sup>Optional</sup> <a name="disable_use_as_imported_source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.property.disableUseAsImportedSource"></a>

```python
disable_use_as_imported_source: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#disable_use_as_imported_source QuicksightDataSet#disable_use_as_imported_source}.

---

### QuicksightDataSetFieldFolders <a name="QuicksightDataSetFieldFolders" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetFieldFolders(
  columns: typing.List[str] = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders.property.columns">columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#description QuicksightDataSet#description}. |

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#description QuicksightDataSet#description}.

---

### QuicksightDataSetIngestionWaitPolicy <a name="QuicksightDataSetIngestionWaitPolicy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetIngestionWaitPolicy(
  ingestion_wait_time_in_hours: typing.Union[int, float] = None,
  wait_for_spice_ingestion: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy.property.ingestionWaitTimeInHours">ingestion_wait_time_in_hours</a></code> | <code>typing.Union[int, float]</code> | <p>The maximum time (in hours) to wait for Ingestion to complete. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy.property.waitForSpiceIngestion">wait_for_spice_ingestion</a></code> | <code>bool \| cdktn.IResolvable</code> | <p>Wait for SPICE ingestion to finish to mark dataset creation/update successful. |

---

##### `ingestion_wait_time_in_hours`<sup>Optional</sup> <a name="ingestion_wait_time_in_hours" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy.property.ingestionWaitTimeInHours"></a>

```python
ingestion_wait_time_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

<p>The maximum time (in hours) to wait for Ingestion to complete.

Default timeout is 36 hours.
Applicable only when DataSetImportMode mode is set to SPICE and WaitForSpiceIngestion is set to true.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#ingestion_wait_time_in_hours QuicksightDataSet#ingestion_wait_time_in_hours}

---

##### `wait_for_spice_ingestion`<sup>Optional</sup> <a name="wait_for_spice_ingestion" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy.property.waitForSpiceIngestion"></a>

```python
wait_for_spice_ingestion: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

<p>Wait for SPICE ingestion to finish to mark dataset creation/update successful.

Default (true).
Applicable only when DataSetImportMode mode is set to SPICE.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#wait_for_spice_ingestion QuicksightDataSet#wait_for_spice_ingestion}

---

### QuicksightDataSetLogicalTableMap <a name="QuicksightDataSetLogicalTableMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMap(
  alias: str = None,
  data_transforms: IResolvable | typing.List[QuicksightDataSetLogicalTableMapDataTransforms] = None,
  source: QuicksightDataSetLogicalTableMapSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.alias">alias</a></code> | <code>str</code> | <p>A display name for the logical table.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.dataTransforms">data_transforms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a>]</code> | <p>Transform operations that act on this logical table.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a></code> | <p>Information about the source of a logical table. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.alias"></a>

```python
alias: str
```

- *Type:* str

<p>A display name for the logical table.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#alias QuicksightDataSet#alias}

---

##### `data_transforms`<sup>Optional</sup> <a name="data_transforms" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.dataTransforms"></a>

```python
data_transforms: IResolvable | typing.List[QuicksightDataSetLogicalTableMapDataTransforms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a>]

<p>Transform operations that act on this logical table.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#data_transforms QuicksightDataSet#data_transforms}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.source"></a>

```python
source: QuicksightDataSetLogicalTableMapSource
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a>

<p>Information about the source of a logical table.

This is a variant type structure. For
this structure to be valid, only one of the attributes can be non-null.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#source QuicksightDataSet#source}

---

### QuicksightDataSetLogicalTableMapDataTransforms <a name="QuicksightDataSetLogicalTableMapDataTransforms" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms(
  cast_column_type_operation: QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation = None,
  create_columns_operation: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation = None,
  filter_operation: QuicksightDataSetLogicalTableMapDataTransformsFilterOperation = None,
  project_operation: QuicksightDataSetLogicalTableMapDataTransformsProjectOperation = None,
  rename_column_operation: QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation = None,
  tag_column_operation: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.castColumnTypeOperation">cast_column_type_operation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a></code> | <p>A transform operation that casts a column to a different type.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.createColumnsOperation">create_columns_operation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a></code> | <p>A transform operation that creates calculated columns. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.filterOperation">filter_operation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a></code> | <p>A transform operation that filters rows based on a condition.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.projectOperation">project_operation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a></code> | <p>A transform operation that projects columns. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.renameColumnOperation">rename_column_operation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a></code> | <p>A transform operation that renames a column.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.tagColumnOperation">tag_column_operation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a></code> | <p>A transform operation that tags a column with additional information.</p>. |

---

##### `cast_column_type_operation`<sup>Optional</sup> <a name="cast_column_type_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.castColumnTypeOperation"></a>

```python
cast_column_type_operation: QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

<p>A transform operation that casts a column to a different type.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#cast_column_type_operation QuicksightDataSet#cast_column_type_operation}

---

##### `create_columns_operation`<sup>Optional</sup> <a name="create_columns_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.createColumnsOperation"></a>

```python
create_columns_operation: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

<p>A transform operation that creates calculated columns.

Columns created in one such
operation form a lexical closure.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#create_columns_operation QuicksightDataSet#create_columns_operation}

---

##### `filter_operation`<sup>Optional</sup> <a name="filter_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.filterOperation"></a>

```python
filter_operation: QuicksightDataSetLogicalTableMapDataTransformsFilterOperation
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

<p>A transform operation that filters rows based on a condition.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#filter_operation QuicksightDataSet#filter_operation}

---

##### `project_operation`<sup>Optional</sup> <a name="project_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.projectOperation"></a>

```python
project_operation: QuicksightDataSetLogicalTableMapDataTransformsProjectOperation
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

<p>A transform operation that projects columns.

Operations that come after a projection
can only refer to projected columns.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#project_operation QuicksightDataSet#project_operation}

---

##### `rename_column_operation`<sup>Optional</sup> <a name="rename_column_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.renameColumnOperation"></a>

```python
rename_column_operation: QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

<p>A transform operation that renames a column.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#rename_column_operation QuicksightDataSet#rename_column_operation}

---

##### `tag_column_operation`<sup>Optional</sup> <a name="tag_column_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.tagColumnOperation"></a>

```python
tag_column_operation: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

<p>A transform operation that tags a column with additional information.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#tag_column_operation QuicksightDataSet#tag_column_operation}

---

### QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation(
  column_name: str = None,
  format: str = None,
  new_column_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.columnName">column_name</a></code> | <code>str</code> | <p>Column name.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.format">format</a></code> | <code>str</code> | <p>When casting a column from string to datetime type, you can supply a string in a             format supported by Amazon QuickSight to denote the source data format.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.newColumnType">new_column_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#new_column_type QuicksightDataSet#new_column_type}. |

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

<p>Column name.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.format"></a>

```python
format: str
```

- *Type:* str

<p>When casting a column from string to datetime type, you can supply a string in a             format supported by Amazon QuickSight to denote the source data format.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#format QuicksightDataSet#format}

---

##### `new_column_type`<sup>Optional</sup> <a name="new_column_type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.newColumnType"></a>

```python
new_column_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#new_column_type QuicksightDataSet#new_column_type}.

---

### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation(
  columns: IResolvable | typing.List[QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation.property.columns">columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>]</code> | <p>Calculated columns to create.</p>. |

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation.property.columns"></a>

```python
columns: IResolvable | typing.List[QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>]

<p>Calculated columns to create.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}

---

### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns(
  column_id: str = None,
  column_name: str = None,
  expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.columnId">column_id</a></code> | <code>str</code> | <p>A unique ID to identify a calculated column. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.columnName">column_name</a></code> | <code>str</code> | <p>Column name.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.expression">expression</a></code> | <code>str</code> | <p>An expression that defines the calculated column.</p>. |

---

##### `column_id`<sup>Optional</sup> <a name="column_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.columnId"></a>

```python
column_id: str
```

- *Type:* str

<p>A unique ID to identify a calculated column.

During a dataset update, if the column ID
of a calculated column matches that of an existing calculated column, Amazon QuickSight
preserves the existing calculated column.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_id QuicksightDataSet#column_id}

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

<p>Column name.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.expression"></a>

```python
expression: str
```

- *Type:* str

<p>An expression that defines the calculated column.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#expression QuicksightDataSet#expression}

---

### QuicksightDataSetLogicalTableMapDataTransformsFilterOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsFilterOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation(
  condition_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation.property.conditionExpression">condition_expression</a></code> | <code>str</code> | <p>An expression that must evaluate to a Boolean value. |

---

##### `condition_expression`<sup>Optional</sup> <a name="condition_expression" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation.property.conditionExpression"></a>

```python
condition_expression: str
```

- *Type:* str

<p>An expression that must evaluate to a Boolean value.

Rows for which the expression
evaluates to true are kept in the dataset.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#condition_expression QuicksightDataSet#condition_expression}

---

### QuicksightDataSetLogicalTableMapDataTransformsProjectOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsProjectOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation(
  projected_columns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation.property.projectedColumns">projected_columns</a></code> | <code>typing.List[str]</code> | <p>Projected columns.</p>. |

---

##### `projected_columns`<sup>Optional</sup> <a name="projected_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation.property.projectedColumns"></a>

```python
projected_columns: typing.List[str]
```

- *Type:* typing.List[str]

<p>Projected columns.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#projected_columns QuicksightDataSet#projected_columns}

---

### QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation(
  column_name: str = None,
  new_column_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.property.columnName">column_name</a></code> | <code>str</code> | <p>The name of the column to be renamed.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.property.newColumnName">new_column_name</a></code> | <code>str</code> | <p>The new name for the column.</p>. |

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

<p>The name of the column to be renamed.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}

---

##### `new_column_name`<sup>Optional</sup> <a name="new_column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.property.newColumnName"></a>

```python
new_column_name: str
```

- *Type:* str

<p>The new name for the column.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#new_column_name QuicksightDataSet#new_column_name}

---

### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation(
  column_name: str = None,
  tags: IResolvable | typing.List[QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.property.columnName">column_name</a></code> | <code>str</code> | <p>The column that this operation acts on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>]</code> | <p>The dataset column tag, currently only used for geospatial type tagging. |

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

<p>The column that this operation acts on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.property.tags"></a>

```python
tags: IResolvable | typing.List[QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>]

<p>The dataset column tag, currently only used for geospatial type tagging.

.</p>
<note>
<p>This is not tags for the AWS tagging feature. .</p>
</note>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#tags QuicksightDataSet#tags}

---

### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags(
  column_description: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription = None,
  column_geographic_role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.property.columnDescription">column_description</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a></code> | <p>Metadata that contains a description for a column.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.property.columnGeographicRole">column_geographic_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_geographic_role QuicksightDataSet#column_geographic_role}. |

---

##### `column_description`<sup>Optional</sup> <a name="column_description" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.property.columnDescription"></a>

```python
column_description: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

<p>Metadata that contains a description for a column.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_description QuicksightDataSet#column_description}

---

##### `column_geographic_role`<sup>Optional</sup> <a name="column_geographic_role" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.property.columnGeographicRole"></a>

```python
column_geographic_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_geographic_role QuicksightDataSet#column_geographic_role}.

---

### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription(
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription.property.text">text</a></code> | <code>str</code> | <p>The text of a description for a column.</p>. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription.property.text"></a>

```python
text: str
```

- *Type:* str

<p>The text of a description for a column.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#text QuicksightDataSet#text}

---

### QuicksightDataSetLogicalTableMapSource <a name="QuicksightDataSetLogicalTableMapSource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapSource(
  data_set_arn: str = None,
  join_instruction: QuicksightDataSetLogicalTableMapSourceJoinInstruction = None,
  physical_table_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.dataSetArn">data_set_arn</a></code> | <code>str</code> | <p>The Amazon Resource Name (ARN) for the dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.joinInstruction">join_instruction</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a></code> | <p>Join instruction.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.physicalTableId">physical_table_id</a></code> | <code>str</code> | <p>Physical table ID.</p>. |

---

##### `data_set_arn`<sup>Optional</sup> <a name="data_set_arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.dataSetArn"></a>

```python
data_set_arn: str
```

- *Type:* str

<p>The Amazon Resource Name (ARN) for the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#data_set_arn QuicksightDataSet#data_set_arn}

---

##### `join_instruction`<sup>Optional</sup> <a name="join_instruction" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.joinInstruction"></a>

```python
join_instruction: QuicksightDataSetLogicalTableMapSourceJoinInstruction
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

<p>Join instruction.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#join_instruction QuicksightDataSet#join_instruction}

---

##### `physical_table_id`<sup>Optional</sup> <a name="physical_table_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.physicalTableId"></a>

```python
physical_table_id: str
```

- *Type:* str

<p>Physical table ID.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#physical_table_id QuicksightDataSet#physical_table_id}

---

### QuicksightDataSetLogicalTableMapSourceJoinInstruction <a name="QuicksightDataSetLogicalTableMapSourceJoinInstruction" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction(
  left_join_key_properties: QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties = None,
  left_operand: str = None,
  on_clause: str = None,
  right_join_key_properties: QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties = None,
  right_operand: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.leftJoinKeyProperties">left_join_key_properties</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#left_join_key_properties QuicksightDataSet#left_join_key_properties}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.leftOperand">left_operand</a></code> | <code>str</code> | <p>Left operand.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.onClause">on_clause</a></code> | <code>str</code> | <p>On Clause.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.rightJoinKeyProperties">right_join_key_properties</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#right_join_key_properties QuicksightDataSet#right_join_key_properties}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.rightOperand">right_operand</a></code> | <code>str</code> | <p>Right operand.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}. |

---

##### `left_join_key_properties`<sup>Optional</sup> <a name="left_join_key_properties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.leftJoinKeyProperties"></a>

```python
left_join_key_properties: QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#left_join_key_properties QuicksightDataSet#left_join_key_properties}.

---

##### `left_operand`<sup>Optional</sup> <a name="left_operand" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.leftOperand"></a>

```python
left_operand: str
```

- *Type:* str

<p>Left operand.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#left_operand QuicksightDataSet#left_operand}

---

##### `on_clause`<sup>Optional</sup> <a name="on_clause" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.onClause"></a>

```python
on_clause: str
```

- *Type:* str

<p>On Clause.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#on_clause QuicksightDataSet#on_clause}

---

##### `right_join_key_properties`<sup>Optional</sup> <a name="right_join_key_properties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.rightJoinKeyProperties"></a>

```python
right_join_key_properties: QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#right_join_key_properties QuicksightDataSet#right_join_key_properties}.

---

##### `right_operand`<sup>Optional</sup> <a name="right_operand" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.rightOperand"></a>

```python
right_operand: str
```

- *Type:* str

<p>Right operand.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#right_operand QuicksightDataSet#right_operand}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}.

---

### QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties(
  unique_key: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties.property.uniqueKey">unique_key</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}. |

---

##### `unique_key`<sup>Optional</sup> <a name="unique_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties.property.uniqueKey"></a>

```python
unique_key: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}.

---

### QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties(
  unique_key: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties.property.uniqueKey">unique_key</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}. |

---

##### `unique_key`<sup>Optional</sup> <a name="unique_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties.property.uniqueKey"></a>

```python
unique_key: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}.

---

### QuicksightDataSetOutputColumns <a name="QuicksightDataSetOutputColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumns.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetOutputColumns()
```


### QuicksightDataSetPermissions <a name="QuicksightDataSetPermissions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPermissions(
  actions: typing.List[str] = None,
  principal: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions.property.actions">actions</a></code> | <code>typing.List[str]</code> | <p>The IAM action to grant or revoke permissions on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions.property.principal">principal</a></code> | <code>str</code> | <p>The Amazon Resource Name (ARN) of the principal. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

<p>The IAM action to grant or revoke permissions on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#actions QuicksightDataSet#actions}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions.property.principal"></a>

```python
principal: str
```

- *Type:* str

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#principal QuicksightDataSet#principal}

---

### QuicksightDataSetPhysicalTableMap <a name="QuicksightDataSetPhysicalTableMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMap(
  custom_sql: QuicksightDataSetPhysicalTableMapCustomSql = None,
  relational_table: QuicksightDataSetPhysicalTableMapRelationalTable = None,
  s3_source: QuicksightDataSetPhysicalTableMapS3Source = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.customSql">custom_sql</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a></code> | <p>A physical table type built from the results of the custom SQL query.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.relationalTable">relational_table</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a></code> | <p>A physical table type for relational data sources.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.s3Source">s3_source</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a></code> | <p>A physical table type for as S3 data source.</p>. |

---

##### `custom_sql`<sup>Optional</sup> <a name="custom_sql" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.customSql"></a>

```python
custom_sql: QuicksightDataSetPhysicalTableMapCustomSql
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a>

<p>A physical table type built from the results of the custom SQL query.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#custom_sql QuicksightDataSet#custom_sql}

---

##### `relational_table`<sup>Optional</sup> <a name="relational_table" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.relationalTable"></a>

```python
relational_table: QuicksightDataSetPhysicalTableMapRelationalTable
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a>

<p>A physical table type for relational data sources.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#relational_table QuicksightDataSet#relational_table}

---

##### `s3_source`<sup>Optional</sup> <a name="s3_source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.s3Source"></a>

```python
s3_source: QuicksightDataSetPhysicalTableMapS3Source
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a>

<p>A physical table type for as S3 data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#s3_source QuicksightDataSet#s3_source}

---

### QuicksightDataSetPhysicalTableMapCustomSql <a name="QuicksightDataSetPhysicalTableMapCustomSql" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql(
  columns: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapCustomSqlColumns] = None,
  data_source_arn: str = None,
  name: str = None,
  sql_query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.columns">columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a>]</code> | <p>The column schema from the SQL query result set.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.dataSourceArn">data_source_arn</a></code> | <code>str</code> | <p>The Amazon Resource Name (ARN) of the data source.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.name">name</a></code> | <code>str</code> | <p>A display name for the SQL query result.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.sqlQuery">sql_query</a></code> | <code>str</code> | <p>The SQL query.</p>. |

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.columns"></a>

```python
columns: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapCustomSqlColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a>]

<p>The column schema from the SQL query result set.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}

---

##### `data_source_arn`<sup>Optional</sup> <a name="data_source_arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.dataSourceArn"></a>

```python
data_source_arn: str
```

- *Type:* str

<p>The Amazon Resource Name (ARN) of the data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.name"></a>

```python
name: str
```

- *Type:* str

<p>A display name for the SQL query result.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

##### `sql_query`<sup>Optional</sup> <a name="sql_query" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.sqlQuery"></a>

```python
sql_query: str
```

- *Type:* str

<p>The SQL query.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#sql_query QuicksightDataSet#sql_query}

---

### QuicksightDataSetPhysicalTableMapCustomSqlColumns <a name="QuicksightDataSetPhysicalTableMapCustomSqlColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns(
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.property.name">name</a></code> | <code>str</code> | <p>The name of this column in the underlying data source.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.property.name"></a>

```python
name: str
```

- *Type:* str

<p>The name of this column in the underlying data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}.

---

### QuicksightDataSetPhysicalTableMapRelationalTable <a name="QuicksightDataSetPhysicalTableMapRelationalTable" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable(
  catalog: str = None,
  data_source_arn: str = None,
  input_columns: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapRelationalTableInputColumns] = None,
  name: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.catalog">catalog</a></code> | <code>str</code> | <p>The catalog associated with a table.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.dataSourceArn">data_source_arn</a></code> | <code>str</code> | <p>The Amazon Resource Name (ARN) for the data source.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.inputColumns">input_columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>]</code> | <p>The column schema of the table.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.name">name</a></code> | <code>str</code> | <p>The name of the relational table.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.schema">schema</a></code> | <code>str</code> | <p>The schema name. This name applies to certain relational database engines.</p>. |

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

<p>The catalog associated with a table.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#catalog QuicksightDataSet#catalog}

---

##### `data_source_arn`<sup>Optional</sup> <a name="data_source_arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.dataSourceArn"></a>

```python
data_source_arn: str
```

- *Type:* str

<p>The Amazon Resource Name (ARN) for the data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}

---

##### `input_columns`<sup>Optional</sup> <a name="input_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.inputColumns"></a>

```python
input_columns: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapRelationalTableInputColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>]

<p>The column schema of the table.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#input_columns QuicksightDataSet#input_columns}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.name"></a>

```python
name: str
```

- *Type:* str

<p>The name of the relational table.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.schema"></a>

```python
schema: str
```

- *Type:* str

<p>The schema name. This name applies to certain relational database engines.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#schema QuicksightDataSet#schema}

---

### QuicksightDataSetPhysicalTableMapRelationalTableInputColumns <a name="QuicksightDataSetPhysicalTableMapRelationalTableInputColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns(
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.property.name">name</a></code> | <code>str</code> | <p>The name of this column in the underlying data source.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.property.name"></a>

```python
name: str
```

- *Type:* str

<p>The name of this column in the underlying data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}.

---

### QuicksightDataSetPhysicalTableMapS3Source <a name="QuicksightDataSetPhysicalTableMapS3Source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source(
  data_source_arn: str = None,
  input_columns: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapS3SourceInputColumns] = None,
  upload_settings: QuicksightDataSetPhysicalTableMapS3SourceUploadSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.dataSourceArn">data_source_arn</a></code> | <code>str</code> | <p>The amazon Resource Name (ARN) for the data source.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.inputColumns">input_columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>]</code> | <p>A physical table type for as S3 data source.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.uploadSettings">upload_settings</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a></code> | <p>Information about the format for a source file or files.</p>. |

---

##### `data_source_arn`<sup>Optional</sup> <a name="data_source_arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.dataSourceArn"></a>

```python
data_source_arn: str
```

- *Type:* str

<p>The amazon Resource Name (ARN) for the data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}

---

##### `input_columns`<sup>Optional</sup> <a name="input_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.inputColumns"></a>

```python
input_columns: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapS3SourceInputColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>]

<p>A physical table type for as S3 data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#input_columns QuicksightDataSet#input_columns}

---

##### `upload_settings`<sup>Optional</sup> <a name="upload_settings" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.uploadSettings"></a>

```python
upload_settings: QuicksightDataSetPhysicalTableMapS3SourceUploadSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

<p>Information about the format for a source file or files.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#upload_settings QuicksightDataSet#upload_settings}

---

### QuicksightDataSetPhysicalTableMapS3SourceInputColumns <a name="QuicksightDataSetPhysicalTableMapS3SourceInputColumns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns(
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.property.name">name</a></code> | <code>str</code> | <p>The name of this column in the underlying data source.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.property.name"></a>

```python
name: str
```

- *Type:* str

<p>The name of this column in the underlying data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}.

---

### QuicksightDataSetPhysicalTableMapS3SourceUploadSettings <a name="QuicksightDataSetPhysicalTableMapS3SourceUploadSettings" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings(
  contains_header: bool | IResolvable = None,
  delimiter: str = None,
  format: str = None,
  start_from_row: typing.Union[int, float] = None,
  text_qualifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.containsHeader">contains_header</a></code> | <code>bool \| cdktn.IResolvable</code> | <p>Whether the file has a header row, or the files each have a header row.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.delimiter">delimiter</a></code> | <code>str</code> | <p>The delimiter between values in the file.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#format QuicksightDataSet#format}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.startFromRow">start_from_row</a></code> | <code>typing.Union[int, float]</code> | <p>A row number to start reading data from.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.textQualifier">text_qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#text_qualifier QuicksightDataSet#text_qualifier}. |

---

##### `contains_header`<sup>Optional</sup> <a name="contains_header" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.containsHeader"></a>

```python
contains_header: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

<p>Whether the file has a header row, or the files each have a header row.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#contains_header QuicksightDataSet#contains_header}

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

<p>The delimiter between values in the file.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#delimiter QuicksightDataSet#delimiter}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#format QuicksightDataSet#format}.

---

##### `start_from_row`<sup>Optional</sup> <a name="start_from_row" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.startFromRow"></a>

```python
start_from_row: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

<p>A row number to start reading data from.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#start_from_row QuicksightDataSet#start_from_row}

---

##### `text_qualifier`<sup>Optional</sup> <a name="text_qualifier" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.textQualifier"></a>

```python
text_qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#text_qualifier QuicksightDataSet#text_qualifier}.

---

### QuicksightDataSetRowLevelPermissionDataSet <a name="QuicksightDataSetRowLevelPermissionDataSet" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet(
  arn: str = None,
  format_version: str = None,
  namespace: str = None,
  permission_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.arn">arn</a></code> | <code>str</code> | <p>The Amazon Resource Name (ARN) of the permission dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.formatVersion">format_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#format_version QuicksightDataSet#format_version}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.namespace">namespace</a></code> | <code>str</code> | <p>The namespace associated with the row-level permissions dataset.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.permissionPolicy">permission_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#permission_policy QuicksightDataSet#permission_policy}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.arn"></a>

```python
arn: str
```

- *Type:* str

<p>The Amazon Resource Name (ARN) of the permission dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#arn QuicksightDataSet#arn}

---

##### `format_version`<sup>Optional</sup> <a name="format_version" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.formatVersion"></a>

```python
format_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#format_version QuicksightDataSet#format_version}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

<p>The namespace associated with the row-level permissions dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#namespace QuicksightDataSet#namespace}

---

##### `permission_policy`<sup>Optional</sup> <a name="permission_policy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.permissionPolicy"></a>

```python
permission_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#permission_policy QuicksightDataSet#permission_policy}.

---

### QuicksightDataSetTags <a name="QuicksightDataSetTags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags.property.key">key</a></code> | <code>str</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags.property.value">value</a></code> | <code>str</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags.property.key"></a>

```python
key: str
```

- *Type:* str

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#key QuicksightDataSet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags.property.value"></a>

```python
value: str
```

- *Type:* str

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#value QuicksightDataSet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference <a name="QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resetColumns">reset_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_columns` <a name="reset_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resetColumns"></a>

```python
def reset_columns() -> None
```

##### `reset_country_code` <a name="reset_country_code" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columnsInput">columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columns">columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columnsInput"></a>

```python
columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetColumnGroupsGeoSpatialColumnGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

---


### QuicksightDataSetColumnGroupsList <a name="QuicksightDataSetColumnGroupsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetColumnGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDataSetColumnGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightDataSetColumnGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>]

---


### QuicksightDataSetColumnGroupsOutputReference <a name="QuicksightDataSetColumnGroupsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.putGeoSpatialColumnGroup">put_geo_spatial_column_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resetGeoSpatialColumnGroup">reset_geo_spatial_column_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_geo_spatial_column_group` <a name="put_geo_spatial_column_group" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.putGeoSpatialColumnGroup"></a>

```python
def put_geo_spatial_column_group(
  columns: typing.List[str] = None,
  country_code: str = None,
  name: str = None
) -> None
```

###### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.putGeoSpatialColumnGroup.parameter.columns"></a>

- *Type:* typing.List[str]

<p>Columns in this hierarchy.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}

---

###### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.putGeoSpatialColumnGroup.parameter.countryCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#country_code QuicksightDataSet#country_code}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.putGeoSpatialColumnGroup.parameter.name"></a>

- *Type:* str

<p>A display name for the hierarchy.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

##### `reset_geo_spatial_column_group` <a name="reset_geo_spatial_column_group" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resetGeoSpatialColumnGroup"></a>

```python
def reset_geo_spatial_column_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroup">geo_spatial_column_group</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference">QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroupInput">geo_spatial_column_group_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `geo_spatial_column_group`<sup>Required</sup> <a name="geo_spatial_column_group" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroup"></a>

```python
geo_spatial_column_group: QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference">QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference</a>

---

##### `geo_spatial_column_group_input`<sup>Optional</sup> <a name="geo_spatial_column_group_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroupInput"></a>

```python
geo_spatial_column_group_input: IResolvable | QuicksightDataSetColumnGroupsGeoSpatialColumnGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetColumnGroups
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnGroups">QuicksightDataSetColumnGroups</a>

---


### QuicksightDataSetColumnLevelPermissionRulesList <a name="QuicksightDataSetColumnLevelPermissionRulesList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDataSetColumnLevelPermissionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightDataSetColumnLevelPermissionRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>]

---


### QuicksightDataSetColumnLevelPermissionRulesOutputReference <a name="QuicksightDataSetColumnLevelPermissionRulesOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resetColumnNames">reset_column_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resetPrincipals">reset_principals</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column_names` <a name="reset_column_names" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resetColumnNames"></a>

```python
def reset_column_names() -> None
```

##### `reset_principals` <a name="reset_principals" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resetPrincipals"></a>

```python
def reset_principals() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNamesInput">column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principalsInput">principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principals">principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_names_input`<sup>Optional</sup> <a name="column_names_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNamesInput"></a>

```python
column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principals_input`<sup>Optional</sup> <a name="principals_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principalsInput"></a>

```python
principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column_names`<sup>Required</sup> <a name="column_names" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetColumnLevelPermissionRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules">QuicksightDataSetColumnLevelPermissionRules</a>

---


### QuicksightDataSetDataSetUsageConfigurationOutputReference <a name="QuicksightDataSetDataSetUsageConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resetDisableUseAsDirectQuerySource">reset_disable_use_as_direct_query_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resetDisableUseAsImportedSource">reset_disable_use_as_imported_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_use_as_direct_query_source` <a name="reset_disable_use_as_direct_query_source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resetDisableUseAsDirectQuerySource"></a>

```python
def reset_disable_use_as_direct_query_source() -> None
```

##### `reset_disable_use_as_imported_source` <a name="reset_disable_use_as_imported_source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resetDisableUseAsImportedSource"></a>

```python
def reset_disable_use_as_imported_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySourceInput">disable_use_as_direct_query_source_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSourceInput">disable_use_as_imported_source_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySource">disable_use_as_direct_query_source</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSource">disable_use_as_imported_source</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_use_as_direct_query_source_input`<sup>Optional</sup> <a name="disable_use_as_direct_query_source_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySourceInput"></a>

```python
disable_use_as_direct_query_source_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_use_as_imported_source_input`<sup>Optional</sup> <a name="disable_use_as_imported_source_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSourceInput"></a>

```python
disable_use_as_imported_source_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_use_as_direct_query_source`<sup>Required</sup> <a name="disable_use_as_direct_query_source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySource"></a>

```python
disable_use_as_direct_query_source: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_use_as_imported_source`<sup>Required</sup> <a name="disable_use_as_imported_source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSource"></a>

```python
disable_use_as_imported_source: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetDataSetUsageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a>

---


### QuicksightDataSetFieldFoldersMap <a name="QuicksightDataSetFieldFoldersMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetFieldFoldersMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.get"></a>

```python
def get(
  key: str
) -> QuicksightDataSetFieldFoldersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[QuicksightDataSetFieldFolders]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>]

---


### QuicksightDataSetFieldFoldersOutputReference <a name="QuicksightDataSetFieldFoldersOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resetColumns">reset_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_columns` <a name="reset_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resetColumns"></a>

```python
def reset_columns() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.columnsInput">columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.columns">columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.columnsInput"></a>

```python
columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetFieldFolders
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetFieldFolders">QuicksightDataSetFieldFolders</a>

---


### QuicksightDataSetIngestionWaitPolicyOutputReference <a name="QuicksightDataSetIngestionWaitPolicyOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.resetIngestionWaitTimeInHours">reset_ingestion_wait_time_in_hours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.resetWaitForSpiceIngestion">reset_wait_for_spice_ingestion</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ingestion_wait_time_in_hours` <a name="reset_ingestion_wait_time_in_hours" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.resetIngestionWaitTimeInHours"></a>

```python
def reset_ingestion_wait_time_in_hours() -> None
```

##### `reset_wait_for_spice_ingestion` <a name="reset_wait_for_spice_ingestion" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.resetWaitForSpiceIngestion"></a>

```python
def reset_wait_for_spice_ingestion() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.ingestionWaitTimeInHoursInput">ingestion_wait_time_in_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.waitForSpiceIngestionInput">wait_for_spice_ingestion_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.ingestionWaitTimeInHours">ingestion_wait_time_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.waitForSpiceIngestion">wait_for_spice_ingestion</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy">QuicksightDataSetIngestionWaitPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingestion_wait_time_in_hours_input`<sup>Optional</sup> <a name="ingestion_wait_time_in_hours_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.ingestionWaitTimeInHoursInput"></a>

```python
ingestion_wait_time_in_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_for_spice_ingestion_input`<sup>Optional</sup> <a name="wait_for_spice_ingestion_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.waitForSpiceIngestionInput"></a>

```python
wait_for_spice_ingestion_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ingestion_wait_time_in_hours`<sup>Required</sup> <a name="ingestion_wait_time_in_hours" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.ingestionWaitTimeInHours"></a>

```python
ingestion_wait_time_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_for_spice_ingestion`<sup>Required</sup> <a name="wait_for_spice_ingestion" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.waitForSpiceIngestion"></a>

```python
wait_for_spice_ingestion: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetIngestionWaitPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetIngestionWaitPolicy">QuicksightDataSetIngestionWaitPolicy</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resetColumnName">reset_column_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resetNewColumnType">reset_new_column_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column_name` <a name="reset_column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resetColumnName"></a>

```python
def reset_column_name() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_new_column_type` <a name="reset_new_column_type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resetNewColumnType"></a>

```python
def reset_new_column_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnTypeInput">new_column_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnType">new_column_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `new_column_type_input`<sup>Optional</sup> <a name="new_column_type_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnTypeInput"></a>

```python
new_column_type_input: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `new_column_type`<sup>Required</sup> <a name="new_column_type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnType"></a>

```python
new_column_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>]

---


### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resetColumnId">reset_column_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resetColumnName">reset_column_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resetExpression">reset_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column_id` <a name="reset_column_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resetColumnId"></a>

```python
def reset_column_id() -> None
```

##### `reset_column_name` <a name="reset_column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resetColumnName"></a>

```python
def reset_column_name() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnIdInput">column_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnId">column_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_id_input`<sup>Optional</sup> <a name="column_id_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnIdInput"></a>

```python
column_id_input: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `column_id`<sup>Required</sup> <a name="column_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnId"></a>

```python
column_id: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.putColumns">put_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resetColumns">reset_columns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_columns` <a name="put_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.putColumns"></a>

```python
def put_columns(
  value: IResolvable | typing.List[QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.putColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>]

---

##### `reset_columns` <a name="reset_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resetColumns"></a>

```python
def reset_columns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columnsInput">columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columns"></a>

```python
columns: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList</a>

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columnsInput"></a>

```python
columns_input: IResolvable | typing.List[QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resetConditionExpression">reset_condition_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition_expression` <a name="reset_condition_expression" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resetConditionExpression"></a>

```python
def reset_condition_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpressionInput">condition_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpression">condition_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_expression_input`<sup>Optional</sup> <a name="condition_expression_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpressionInput"></a>

```python
condition_expression_input: str
```

- *Type:* str

---

##### `condition_expression`<sup>Required</sup> <a name="condition_expression" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpression"></a>

```python
condition_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetLogicalTableMapDataTransformsFilterOperation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsList <a name="QuicksightDataSetLogicalTableMapDataTransformsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDataSetLogicalTableMapDataTransformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightDataSetLogicalTableMapDataTransforms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a>]

---


### QuicksightDataSetLogicalTableMapDataTransformsOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCastColumnTypeOperation">put_cast_column_type_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCreateColumnsOperation">put_create_columns_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putFilterOperation">put_filter_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putProjectOperation">put_project_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putRenameColumnOperation">put_rename_column_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putTagColumnOperation">put_tag_column_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetCastColumnTypeOperation">reset_cast_column_type_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetCreateColumnsOperation">reset_create_columns_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetFilterOperation">reset_filter_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetProjectOperation">reset_project_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetRenameColumnOperation">reset_rename_column_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetTagColumnOperation">reset_tag_column_operation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cast_column_type_operation` <a name="put_cast_column_type_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCastColumnTypeOperation"></a>

```python
def put_cast_column_type_operation(
  column_name: str = None,
  format: str = None,
  new_column_type: str = None
) -> None
```

###### `column_name`<sup>Optional</sup> <a name="column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCastColumnTypeOperation.parameter.columnName"></a>

- *Type:* str

<p>Column name.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}

---

###### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCastColumnTypeOperation.parameter.format"></a>

- *Type:* str

<p>When casting a column from string to datetime type, you can supply a string in a             format supported by Amazon QuickSight to denote the source data format.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#format QuicksightDataSet#format}

---

###### `new_column_type`<sup>Optional</sup> <a name="new_column_type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCastColumnTypeOperation.parameter.newColumnType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#new_column_type QuicksightDataSet#new_column_type}.

---

##### `put_create_columns_operation` <a name="put_create_columns_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCreateColumnsOperation"></a>

```python
def put_create_columns_operation(
  columns: IResolvable | typing.List[QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns] = None
) -> None
```

###### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCreateColumnsOperation.parameter.columns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>]

<p>Calculated columns to create.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}

---

##### `put_filter_operation` <a name="put_filter_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putFilterOperation"></a>

```python
def put_filter_operation(
  condition_expression: str = None
) -> None
```

###### `condition_expression`<sup>Optional</sup> <a name="condition_expression" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putFilterOperation.parameter.conditionExpression"></a>

- *Type:* str

<p>An expression that must evaluate to a Boolean value.

Rows for which the expression
evaluates to true are kept in the dataset.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#condition_expression QuicksightDataSet#condition_expression}

---

##### `put_project_operation` <a name="put_project_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putProjectOperation"></a>

```python
def put_project_operation(
  projected_columns: typing.List[str] = None
) -> None
```

###### `projected_columns`<sup>Optional</sup> <a name="projected_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putProjectOperation.parameter.projectedColumns"></a>

- *Type:* typing.List[str]

<p>Projected columns.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#projected_columns QuicksightDataSet#projected_columns}

---

##### `put_rename_column_operation` <a name="put_rename_column_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putRenameColumnOperation"></a>

```python
def put_rename_column_operation(
  column_name: str = None,
  new_column_name: str = None
) -> None
```

###### `column_name`<sup>Optional</sup> <a name="column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putRenameColumnOperation.parameter.columnName"></a>

- *Type:* str

<p>The name of the column to be renamed.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}

---

###### `new_column_name`<sup>Optional</sup> <a name="new_column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putRenameColumnOperation.parameter.newColumnName"></a>

- *Type:* str

<p>The new name for the column.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#new_column_name QuicksightDataSet#new_column_name}

---

##### `put_tag_column_operation` <a name="put_tag_column_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putTagColumnOperation"></a>

```python
def put_tag_column_operation(
  column_name: str = None,
  tags: IResolvable | typing.List[QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags] = None
) -> None
```

###### `column_name`<sup>Optional</sup> <a name="column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putTagColumnOperation.parameter.columnName"></a>

- *Type:* str

<p>The column that this operation acts on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putTagColumnOperation.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>]

<p>The dataset column tag, currently only used for geospatial type tagging.

.</p>
<note>
<p>This is not tags for the AWS tagging feature. .</p>
</note>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#tags QuicksightDataSet#tags}

---

##### `reset_cast_column_type_operation` <a name="reset_cast_column_type_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetCastColumnTypeOperation"></a>

```python
def reset_cast_column_type_operation() -> None
```

##### `reset_create_columns_operation` <a name="reset_create_columns_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetCreateColumnsOperation"></a>

```python
def reset_create_columns_operation() -> None
```

##### `reset_filter_operation` <a name="reset_filter_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetFilterOperation"></a>

```python
def reset_filter_operation() -> None
```

##### `reset_project_operation` <a name="reset_project_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetProjectOperation"></a>

```python
def reset_project_operation() -> None
```

##### `reset_rename_column_operation` <a name="reset_rename_column_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetRenameColumnOperation"></a>

```python
def reset_rename_column_operation() -> None
```

##### `reset_tag_column_operation` <a name="reset_tag_column_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetTagColumnOperation"></a>

```python
def reset_tag_column_operation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperation">cast_column_type_operation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperation">create_columns_operation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperation">filter_operation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperation">project_operation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperation">rename_column_operation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperation">tag_column_operation</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperationInput">cast_column_type_operation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperationInput">create_columns_operation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperationInput">filter_operation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperationInput">project_operation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperationInput">rename_column_operation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperationInput">tag_column_operation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cast_column_type_operation`<sup>Required</sup> <a name="cast_column_type_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperation"></a>

```python
cast_column_type_operation: QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference</a>

---

##### `create_columns_operation`<sup>Required</sup> <a name="create_columns_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperation"></a>

```python
create_columns_operation: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference</a>

---

##### `filter_operation`<sup>Required</sup> <a name="filter_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperation"></a>

```python
filter_operation: QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference</a>

---

##### `project_operation`<sup>Required</sup> <a name="project_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperation"></a>

```python
project_operation: QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference</a>

---

##### `rename_column_operation`<sup>Required</sup> <a name="rename_column_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperation"></a>

```python
rename_column_operation: QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference</a>

---

##### `tag_column_operation`<sup>Required</sup> <a name="tag_column_operation" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperation"></a>

```python
tag_column_operation: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference</a>

---

##### `cast_column_type_operation_input`<sup>Optional</sup> <a name="cast_column_type_operation_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperationInput"></a>

```python
cast_column_type_operation_input: IResolvable | QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

---

##### `create_columns_operation_input`<sup>Optional</sup> <a name="create_columns_operation_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperationInput"></a>

```python
create_columns_operation_input: IResolvable | QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

---

##### `filter_operation_input`<sup>Optional</sup> <a name="filter_operation_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperationInput"></a>

```python
filter_operation_input: IResolvable | QuicksightDataSetLogicalTableMapDataTransformsFilterOperation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

---

##### `project_operation_input`<sup>Optional</sup> <a name="project_operation_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperationInput"></a>

```python
project_operation_input: IResolvable | QuicksightDataSetLogicalTableMapDataTransformsProjectOperation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

---

##### `rename_column_operation_input`<sup>Optional</sup> <a name="rename_column_operation_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperationInput"></a>

```python
rename_column_operation_input: IResolvable | QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

---

##### `tag_column_operation_input`<sup>Optional</sup> <a name="tag_column_operation_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperationInput"></a>

```python
tag_column_operation_input: IResolvable | QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetLogicalTableMapDataTransforms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resetProjectedColumns">reset_projected_columns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_projected_columns` <a name="reset_projected_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resetProjectedColumns"></a>

```python
def reset_projected_columns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumnsInput">projected_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumns">projected_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `projected_columns_input`<sup>Optional</sup> <a name="projected_columns_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumnsInput"></a>

```python
projected_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `projected_columns`<sup>Required</sup> <a name="projected_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumns"></a>

```python
projected_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetLogicalTableMapDataTransformsProjectOperation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resetColumnName">reset_column_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resetNewColumnName">reset_new_column_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column_name` <a name="reset_column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resetColumnName"></a>

```python
def reset_column_name() -> None
```

##### `reset_new_column_name` <a name="reset_new_column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resetNewColumnName"></a>

```python
def reset_new_column_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnNameInput">new_column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnName">new_column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `new_column_name_input`<sup>Optional</sup> <a name="new_column_name_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnNameInput"></a>

```python
new_column_name_input: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `new_column_name`<sup>Required</sup> <a name="new_column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnName"></a>

```python
new_column_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resetColumnName">reset_column_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>]

---

##### `reset_column_name` <a name="reset_column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resetColumnName"></a>

```python
def reset_column_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tags"></a>

```python
tags: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList</a>

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>]

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_text` <a name="reset_text" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>]

---


### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.putColumnDescription">put_column_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resetColumnDescription">reset_column_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resetColumnGeographicRole">reset_column_geographic_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column_description` <a name="put_column_description" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.putColumnDescription"></a>

```python
def put_column_description(
  text: str = None
) -> None
```

###### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.putColumnDescription.parameter.text"></a>

- *Type:* str

<p>The text of a description for a column.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#text QuicksightDataSet#text}

---

##### `reset_column_description` <a name="reset_column_description" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resetColumnDescription"></a>

```python
def reset_column_description() -> None
```

##### `reset_column_geographic_role` <a name="reset_column_geographic_role" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resetColumnGeographicRole"></a>

```python
def reset_column_geographic_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescription">column_description</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescriptionInput">column_description_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRoleInput">column_geographic_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRole">column_geographic_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_description`<sup>Required</sup> <a name="column_description" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescription"></a>

```python
column_description: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference</a>

---

##### `column_description_input`<sup>Optional</sup> <a name="column_description_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescriptionInput"></a>

```python
column_description_input: IResolvable | QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

---

##### `column_geographic_role_input`<sup>Optional</sup> <a name="column_geographic_role_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRoleInput"></a>

```python
column_geographic_role_input: str
```

- *Type:* str

---

##### `column_geographic_role`<sup>Required</sup> <a name="column_geographic_role" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRole"></a>

```python
column_geographic_role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>

---


### QuicksightDataSetLogicalTableMapMap <a name="QuicksightDataSetLogicalTableMapMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.get"></a>

```python
def get(
  key: str
) -> QuicksightDataSetLogicalTableMapOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[QuicksightDataSetLogicalTableMap]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>]

---


### QuicksightDataSetLogicalTableMapOutputReference <a name="QuicksightDataSetLogicalTableMapOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putDataTransforms">put_data_transforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resetDataTransforms">reset_data_transforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_transforms` <a name="put_data_transforms" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putDataTransforms"></a>

```python
def put_data_transforms(
  value: IResolvable | typing.List[QuicksightDataSetLogicalTableMapDataTransforms]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putDataTransforms.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a>]

---

##### `put_source` <a name="put_source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putSource"></a>

```python
def put_source(
  data_set_arn: str = None,
  join_instruction: QuicksightDataSetLogicalTableMapSourceJoinInstruction = None,
  physical_table_id: str = None
) -> None
```

###### `data_set_arn`<sup>Optional</sup> <a name="data_set_arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putSource.parameter.dataSetArn"></a>

- *Type:* str

<p>The Amazon Resource Name (ARN) for the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#data_set_arn QuicksightDataSet#data_set_arn}

---

###### `join_instruction`<sup>Optional</sup> <a name="join_instruction" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putSource.parameter.joinInstruction"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

<p>Join instruction.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#join_instruction QuicksightDataSet#join_instruction}

---

###### `physical_table_id`<sup>Optional</sup> <a name="physical_table_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putSource.parameter.physicalTableId"></a>

- *Type:* str

<p>Physical table ID.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#physical_table_id QuicksightDataSet#physical_table_id}

---

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_data_transforms` <a name="reset_data_transforms" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resetDataTransforms"></a>

```python
def reset_data_transforms() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.dataTransforms">data_transforms</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList">QuicksightDataSetLogicalTableMapDataTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference">QuicksightDataSetLogicalTableMapSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.dataTransformsInput">data_transforms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.sourceInput">source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_transforms`<sup>Required</sup> <a name="data_transforms" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.dataTransforms"></a>

```python
data_transforms: QuicksightDataSetLogicalTableMapDataTransformsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList">QuicksightDataSetLogicalTableMapDataTransformsList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.source"></a>

```python
source: QuicksightDataSetLogicalTableMapSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference">QuicksightDataSetLogicalTableMapSourceOutputReference</a>

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `data_transforms_input`<sup>Optional</sup> <a name="data_transforms_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.dataTransformsInput"></a>

```python
data_transforms_input: IResolvable | typing.List[QuicksightDataSetLogicalTableMapDataTransforms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms">QuicksightDataSetLogicalTableMapDataTransforms</a>]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.sourceInput"></a>

```python
source_input: IResolvable | QuicksightDataSetLogicalTableMapSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetLogicalTableMap
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMap">QuicksightDataSetLogicalTableMap</a>

---


### QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resetUniqueKey">reset_unique_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_unique_key` <a name="reset_unique_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resetUniqueKey"></a>

```python
def reset_unique_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKeyInput">unique_key_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKey">unique_key</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unique_key_input`<sup>Optional</sup> <a name="unique_key_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKeyInput"></a>

```python
unique_key_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `unique_key`<sup>Required</sup> <a name="unique_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKey"></a>

```python
unique_key: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

---


### QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putLeftJoinKeyProperties">put_left_join_key_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putRightJoinKeyProperties">put_right_join_key_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetLeftJoinKeyProperties">reset_left_join_key_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetLeftOperand">reset_left_operand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetOnClause">reset_on_clause</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetRightJoinKeyProperties">reset_right_join_key_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetRightOperand">reset_right_operand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_left_join_key_properties` <a name="put_left_join_key_properties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putLeftJoinKeyProperties"></a>

```python
def put_left_join_key_properties(
  unique_key: bool | IResolvable = None
) -> None
```

###### `unique_key`<sup>Optional</sup> <a name="unique_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putLeftJoinKeyProperties.parameter.uniqueKey"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}.

---

##### `put_right_join_key_properties` <a name="put_right_join_key_properties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putRightJoinKeyProperties"></a>

```python
def put_right_join_key_properties(
  unique_key: bool | IResolvable = None
) -> None
```

###### `unique_key`<sup>Optional</sup> <a name="unique_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putRightJoinKeyProperties.parameter.uniqueKey"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}.

---

##### `reset_left_join_key_properties` <a name="reset_left_join_key_properties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetLeftJoinKeyProperties"></a>

```python
def reset_left_join_key_properties() -> None
```

##### `reset_left_operand` <a name="reset_left_operand" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetLeftOperand"></a>

```python
def reset_left_operand() -> None
```

##### `reset_on_clause` <a name="reset_on_clause" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetOnClause"></a>

```python
def reset_on_clause() -> None
```

##### `reset_right_join_key_properties` <a name="reset_right_join_key_properties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetRightJoinKeyProperties"></a>

```python
def reset_right_join_key_properties() -> None
```

##### `reset_right_operand` <a name="reset_right_operand" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetRightOperand"></a>

```python
def reset_right_operand() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyProperties">left_join_key_properties</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyProperties">right_join_key_properties</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyPropertiesInput">left_join_key_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperandInput">left_operand_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClauseInput">on_clause_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyPropertiesInput">right_join_key_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperandInput">right_operand_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperand">left_operand</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClause">on_clause</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperand">right_operand</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `left_join_key_properties`<sup>Required</sup> <a name="left_join_key_properties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyProperties"></a>

```python
left_join_key_properties: QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference</a>

---

##### `right_join_key_properties`<sup>Required</sup> <a name="right_join_key_properties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyProperties"></a>

```python
right_join_key_properties: QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference</a>

---

##### `left_join_key_properties_input`<sup>Optional</sup> <a name="left_join_key_properties_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyPropertiesInput"></a>

```python
left_join_key_properties_input: IResolvable | QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

---

##### `left_operand_input`<sup>Optional</sup> <a name="left_operand_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperandInput"></a>

```python
left_operand_input: str
```

- *Type:* str

---

##### `on_clause_input`<sup>Optional</sup> <a name="on_clause_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClauseInput"></a>

```python
on_clause_input: str
```

- *Type:* str

---

##### `right_join_key_properties_input`<sup>Optional</sup> <a name="right_join_key_properties_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyPropertiesInput"></a>

```python
right_join_key_properties_input: IResolvable | QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

---

##### `right_operand_input`<sup>Optional</sup> <a name="right_operand_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperandInput"></a>

```python
right_operand_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `left_operand`<sup>Required</sup> <a name="left_operand" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperand"></a>

```python
left_operand: str
```

- *Type:* str

---

##### `on_clause`<sup>Required</sup> <a name="on_clause" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClause"></a>

```python
on_clause: str
```

- *Type:* str

---

##### `right_operand`<sup>Required</sup> <a name="right_operand" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperand"></a>

```python
right_operand: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetLogicalTableMapSourceJoinInstruction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

---


### QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resetUniqueKey">reset_unique_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_unique_key` <a name="reset_unique_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resetUniqueKey"></a>

```python
def reset_unique_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKeyInput">unique_key_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKey">unique_key</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unique_key_input`<sup>Optional</sup> <a name="unique_key_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKeyInput"></a>

```python
unique_key_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `unique_key`<sup>Required</sup> <a name="unique_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKey"></a>

```python
unique_key: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

---


### QuicksightDataSetLogicalTableMapSourceOutputReference <a name="QuicksightDataSetLogicalTableMapSourceOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.putJoinInstruction">put_join_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetDataSetArn">reset_data_set_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetJoinInstruction">reset_join_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetPhysicalTableId">reset_physical_table_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_join_instruction` <a name="put_join_instruction" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.putJoinInstruction"></a>

```python
def put_join_instruction(
  left_join_key_properties: QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties = None,
  left_operand: str = None,
  on_clause: str = None,
  right_join_key_properties: QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties = None,
  right_operand: str = None,
  type: str = None
) -> None
```

###### `left_join_key_properties`<sup>Optional</sup> <a name="left_join_key_properties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.putJoinInstruction.parameter.leftJoinKeyProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#left_join_key_properties QuicksightDataSet#left_join_key_properties}.

---

###### `left_operand`<sup>Optional</sup> <a name="left_operand" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.putJoinInstruction.parameter.leftOperand"></a>

- *Type:* str

<p>Left operand.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#left_operand QuicksightDataSet#left_operand}

---

###### `on_clause`<sup>Optional</sup> <a name="on_clause" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.putJoinInstruction.parameter.onClause"></a>

- *Type:* str

<p>On Clause.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#on_clause QuicksightDataSet#on_clause}

---

###### `right_join_key_properties`<sup>Optional</sup> <a name="right_join_key_properties" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.putJoinInstruction.parameter.rightJoinKeyProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#right_join_key_properties QuicksightDataSet#right_join_key_properties}.

---

###### `right_operand`<sup>Optional</sup> <a name="right_operand" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.putJoinInstruction.parameter.rightOperand"></a>

- *Type:* str

<p>Right operand.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#right_operand QuicksightDataSet#right_operand}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.putJoinInstruction.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}.

---

##### `reset_data_set_arn` <a name="reset_data_set_arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetDataSetArn"></a>

```python
def reset_data_set_arn() -> None
```

##### `reset_join_instruction` <a name="reset_join_instruction" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetJoinInstruction"></a>

```python
def reset_join_instruction() -> None
```

##### `reset_physical_table_id` <a name="reset_physical_table_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetPhysicalTableId"></a>

```python
def reset_physical_table_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstruction">join_instruction</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArnInput">data_set_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstructionInput">join_instruction_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableIdInput">physical_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArn">data_set_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableId">physical_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `join_instruction`<sup>Required</sup> <a name="join_instruction" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstruction"></a>

```python
join_instruction: QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference</a>

---

##### `data_set_arn_input`<sup>Optional</sup> <a name="data_set_arn_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArnInput"></a>

```python
data_set_arn_input: str
```

- *Type:* str

---

##### `join_instruction_input`<sup>Optional</sup> <a name="join_instruction_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstructionInput"></a>

```python
join_instruction_input: IResolvable | QuicksightDataSetLogicalTableMapSourceJoinInstruction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

---

##### `physical_table_id_input`<sup>Optional</sup> <a name="physical_table_id_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableIdInput"></a>

```python
physical_table_id_input: str
```

- *Type:* str

---

##### `data_set_arn`<sup>Required</sup> <a name="data_set_arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArn"></a>

```python
data_set_arn: str
```

- *Type:* str

---

##### `physical_table_id`<sup>Required</sup> <a name="physical_table_id" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableId"></a>

```python
physical_table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetLogicalTableMapSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a>

---


### QuicksightDataSetOutputColumnsList <a name="QuicksightDataSetOutputColumnsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetOutputColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDataSetOutputColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### QuicksightDataSetOutputColumnsOutputReference <a name="QuicksightDataSetOutputColumnsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumns">QuicksightDataSetOutputColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSetOutputColumns
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetOutputColumns">QuicksightDataSetOutputColumns</a>

---


### QuicksightDataSetPermissionsList <a name="QuicksightDataSetPermissionsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDataSetPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightDataSetPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>]

---


### QuicksightDataSetPermissionsOutputReference <a name="QuicksightDataSetPermissionsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_actions` <a name="reset_actions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_principal` <a name="reset_principal" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetPermissions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPermissions">QuicksightDataSetPermissions</a>

---


### QuicksightDataSetPhysicalTableMapCustomSqlColumnsList <a name="QuicksightDataSetPhysicalTableMapCustomSqlColumnsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapCustomSqlColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a>]

---


### QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference <a name="QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetPhysicalTableMapCustomSqlColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a>

---


### QuicksightDataSetPhysicalTableMapCustomSqlOutputReference <a name="QuicksightDataSetPhysicalTableMapCustomSqlOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.putColumns">put_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetColumns">reset_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetDataSourceArn">reset_data_source_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetSqlQuery">reset_sql_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_columns` <a name="put_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.putColumns"></a>

```python
def put_columns(
  value: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapCustomSqlColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.putColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a>]

---

##### `reset_columns` <a name="reset_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetColumns"></a>

```python
def reset_columns() -> None
```

##### `reset_data_source_arn` <a name="reset_data_source_arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetDataSourceArn"></a>

```python
def reset_data_source_arn() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_sql_query` <a name="reset_sql_query" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetSqlQuery"></a>

```python
def reset_sql_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList">QuicksightDataSetPhysicalTableMapCustomSqlColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columnsInput">columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArnInput">data_source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQueryInput">sql_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArn">data_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQuery">sql_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columns"></a>

```python
columns: QuicksightDataSetPhysicalTableMapCustomSqlColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList">QuicksightDataSetPhysicalTableMapCustomSqlColumnsList</a>

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columnsInput"></a>

```python
columns_input: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapCustomSqlColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a>]

---

##### `data_source_arn_input`<sup>Optional</sup> <a name="data_source_arn_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArnInput"></a>

```python
data_source_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sql_query_input`<sup>Optional</sup> <a name="sql_query_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQueryInput"></a>

```python
sql_query_input: str
```

- *Type:* str

---

##### `data_source_arn`<sup>Required</sup> <a name="data_source_arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArn"></a>

```python
data_source_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sql_query`<sup>Required</sup> <a name="sql_query" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQuery"></a>

```python
sql_query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetPhysicalTableMapCustomSql
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a>

---


### QuicksightDataSetPhysicalTableMapMap <a name="QuicksightDataSetPhysicalTableMapMap" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.get"></a>

```python
def get(
  key: str
) -> QuicksightDataSetPhysicalTableMapOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[QuicksightDataSetPhysicalTableMap]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>]

---


### QuicksightDataSetPhysicalTableMapOutputReference <a name="QuicksightDataSetPhysicalTableMapOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putCustomSql">put_custom_sql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putRelationalTable">put_relational_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putS3Source">put_s3_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetCustomSql">reset_custom_sql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetRelationalTable">reset_relational_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetS3Source">reset_s3_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_sql` <a name="put_custom_sql" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putCustomSql"></a>

```python
def put_custom_sql(
  columns: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapCustomSqlColumns] = None,
  data_source_arn: str = None,
  name: str = None,
  sql_query: str = None
) -> None
```

###### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putCustomSql.parameter.columns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns">QuicksightDataSetPhysicalTableMapCustomSqlColumns</a>]

<p>The column schema from the SQL query result set.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}

---

###### `data_source_arn`<sup>Optional</sup> <a name="data_source_arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putCustomSql.parameter.dataSourceArn"></a>

- *Type:* str

<p>The Amazon Resource Name (ARN) of the data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putCustomSql.parameter.name"></a>

- *Type:* str

<p>A display name for the SQL query result.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

###### `sql_query`<sup>Optional</sup> <a name="sql_query" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putCustomSql.parameter.sqlQuery"></a>

- *Type:* str

<p>The SQL query.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#sql_query QuicksightDataSet#sql_query}

---

##### `put_relational_table` <a name="put_relational_table" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putRelationalTable"></a>

```python
def put_relational_table(
  catalog: str = None,
  data_source_arn: str = None,
  input_columns: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapRelationalTableInputColumns] = None,
  name: str = None,
  schema: str = None
) -> None
```

###### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putRelationalTable.parameter.catalog"></a>

- *Type:* str

<p>The catalog associated with a table.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#catalog QuicksightDataSet#catalog}

---

###### `data_source_arn`<sup>Optional</sup> <a name="data_source_arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putRelationalTable.parameter.dataSourceArn"></a>

- *Type:* str

<p>The Amazon Resource Name (ARN) for the data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}

---

###### `input_columns`<sup>Optional</sup> <a name="input_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putRelationalTable.parameter.inputColumns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>]

<p>The column schema of the table.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#input_columns QuicksightDataSet#input_columns}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putRelationalTable.parameter.name"></a>

- *Type:* str

<p>The name of the relational table.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putRelationalTable.parameter.schema"></a>

- *Type:* str

<p>The schema name. This name applies to certain relational database engines.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#schema QuicksightDataSet#schema}

---

##### `put_s3_source` <a name="put_s3_source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putS3Source"></a>

```python
def put_s3_source(
  data_source_arn: str = None,
  input_columns: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapS3SourceInputColumns] = None,
  upload_settings: QuicksightDataSetPhysicalTableMapS3SourceUploadSettings = None
) -> None
```

###### `data_source_arn`<sup>Optional</sup> <a name="data_source_arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putS3Source.parameter.dataSourceArn"></a>

- *Type:* str

<p>The amazon Resource Name (ARN) for the data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}

---

###### `input_columns`<sup>Optional</sup> <a name="input_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putS3Source.parameter.inputColumns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>]

<p>A physical table type for as S3 data source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#input_columns QuicksightDataSet#input_columns}

---

###### `upload_settings`<sup>Optional</sup> <a name="upload_settings" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putS3Source.parameter.uploadSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

<p>Information about the format for a source file or files.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#upload_settings QuicksightDataSet#upload_settings}

---

##### `reset_custom_sql` <a name="reset_custom_sql" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetCustomSql"></a>

```python
def reset_custom_sql() -> None
```

##### `reset_relational_table` <a name="reset_relational_table" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetRelationalTable"></a>

```python
def reset_relational_table() -> None
```

##### `reset_s3_source` <a name="reset_s3_source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetS3Source"></a>

```python
def reset_s3_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.customSql">custom_sql</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference">QuicksightDataSetPhysicalTableMapCustomSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.relationalTable">relational_table</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference">QuicksightDataSetPhysicalTableMapRelationalTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.s3Source">s3_source</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference">QuicksightDataSetPhysicalTableMapS3SourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.customSqlInput">custom_sql_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.relationalTableInput">relational_table_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.s3SourceInput">s3_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_sql`<sup>Required</sup> <a name="custom_sql" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.customSql"></a>

```python
custom_sql: QuicksightDataSetPhysicalTableMapCustomSqlOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference">QuicksightDataSetPhysicalTableMapCustomSqlOutputReference</a>

---

##### `relational_table`<sup>Required</sup> <a name="relational_table" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.relationalTable"></a>

```python
relational_table: QuicksightDataSetPhysicalTableMapRelationalTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference">QuicksightDataSetPhysicalTableMapRelationalTableOutputReference</a>

---

##### `s3_source`<sup>Required</sup> <a name="s3_source" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.s3Source"></a>

```python
s3_source: QuicksightDataSetPhysicalTableMapS3SourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference">QuicksightDataSetPhysicalTableMapS3SourceOutputReference</a>

---

##### `custom_sql_input`<sup>Optional</sup> <a name="custom_sql_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.customSqlInput"></a>

```python
custom_sql_input: IResolvable | QuicksightDataSetPhysicalTableMapCustomSql
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a>

---

##### `relational_table_input`<sup>Optional</sup> <a name="relational_table_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.relationalTableInput"></a>

```python
relational_table_input: IResolvable | QuicksightDataSetPhysicalTableMapRelationalTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a>

---

##### `s3_source_input`<sup>Optional</sup> <a name="s3_source_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.s3SourceInput"></a>

```python
s3_source_input: IResolvable | QuicksightDataSetPhysicalTableMapS3Source
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetPhysicalTableMap
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMap">QuicksightDataSetPhysicalTableMap</a>

---


### QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList <a name="QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapRelationalTableInputColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>]

---


### QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference <a name="QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetPhysicalTableMapRelationalTableInputColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>

---


### QuicksightDataSetPhysicalTableMapRelationalTableOutputReference <a name="QuicksightDataSetPhysicalTableMapRelationalTableOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.putInputColumns">put_input_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetDataSourceArn">reset_data_source_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetInputColumns">reset_input_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input_columns` <a name="put_input_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.putInputColumns"></a>

```python
def put_input_columns(
  value: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapRelationalTableInputColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.putInputColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>]

---

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_data_source_arn` <a name="reset_data_source_arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetDataSourceArn"></a>

```python
def reset_data_source_arn() -> None
```

##### `reset_input_columns` <a name="reset_input_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetInputColumns"></a>

```python
def reset_input_columns() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumns">input_columns</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList">QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArnInput">data_source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumnsInput">input_columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArn">data_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_columns`<sup>Required</sup> <a name="input_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumns"></a>

```python
input_columns: QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList">QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList</a>

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `data_source_arn_input`<sup>Optional</sup> <a name="data_source_arn_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArnInput"></a>

```python
data_source_arn_input: str
```

- *Type:* str

---

##### `input_columns_input`<sup>Optional</sup> <a name="input_columns_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumnsInput"></a>

```python
input_columns_input: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapRelationalTableInputColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns">QuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `data_source_arn`<sup>Required</sup> <a name="data_source_arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArn"></a>

```python
data_source_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetPhysicalTableMapRelationalTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a>

---


### QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList <a name="QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapS3SourceInputColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>]

---


### QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference <a name="QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetPhysicalTableMapS3SourceInputColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>

---


### QuicksightDataSetPhysicalTableMapS3SourceOutputReference <a name="QuicksightDataSetPhysicalTableMapS3SourceOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putInputColumns">put_input_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putUploadSettings">put_upload_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resetDataSourceArn">reset_data_source_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resetInputColumns">reset_input_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resetUploadSettings">reset_upload_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input_columns` <a name="put_input_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putInputColumns"></a>

```python
def put_input_columns(
  value: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapS3SourceInputColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putInputColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>]

---

##### `put_upload_settings` <a name="put_upload_settings" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putUploadSettings"></a>

```python
def put_upload_settings(
  contains_header: bool | IResolvable = None,
  delimiter: str = None,
  format: str = None,
  start_from_row: typing.Union[int, float] = None,
  text_qualifier: str = None
) -> None
```

###### `contains_header`<sup>Optional</sup> <a name="contains_header" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putUploadSettings.parameter.containsHeader"></a>

- *Type:* bool | cdktn.IResolvable

<p>Whether the file has a header row, or the files each have a header row.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#contains_header QuicksightDataSet#contains_header}

---

###### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putUploadSettings.parameter.delimiter"></a>

- *Type:* str

<p>The delimiter between values in the file.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#delimiter QuicksightDataSet#delimiter}

---

###### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putUploadSettings.parameter.format"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#format QuicksightDataSet#format}.

---

###### `start_from_row`<sup>Optional</sup> <a name="start_from_row" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putUploadSettings.parameter.startFromRow"></a>

- *Type:* typing.Union[int, float]

<p>A row number to start reading data from.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#start_from_row QuicksightDataSet#start_from_row}

---

###### `text_qualifier`<sup>Optional</sup> <a name="text_qualifier" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putUploadSettings.parameter.textQualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_data_set#text_qualifier QuicksightDataSet#text_qualifier}.

---

##### `reset_data_source_arn` <a name="reset_data_source_arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resetDataSourceArn"></a>

```python
def reset_data_source_arn() -> None
```

##### `reset_input_columns` <a name="reset_input_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resetInputColumns"></a>

```python
def reset_input_columns() -> None
```

##### `reset_upload_settings` <a name="reset_upload_settings" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resetUploadSettings"></a>

```python
def reset_upload_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumns">input_columns</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList">QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettings">upload_settings</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference">QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArnInput">data_source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumnsInput">input_columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettingsInput">upload_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArn">data_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_columns`<sup>Required</sup> <a name="input_columns" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumns"></a>

```python
input_columns: QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList">QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList</a>

---

##### `upload_settings`<sup>Required</sup> <a name="upload_settings" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettings"></a>

```python
upload_settings: QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference">QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference</a>

---

##### `data_source_arn_input`<sup>Optional</sup> <a name="data_source_arn_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArnInput"></a>

```python
data_source_arn_input: str
```

- *Type:* str

---

##### `input_columns_input`<sup>Optional</sup> <a name="input_columns_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumnsInput"></a>

```python
input_columns_input: IResolvable | typing.List[QuicksightDataSetPhysicalTableMapS3SourceInputColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns">QuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>]

---

##### `upload_settings_input`<sup>Optional</sup> <a name="upload_settings_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettingsInput"></a>

```python
upload_settings_input: IResolvable | QuicksightDataSetPhysicalTableMapS3SourceUploadSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

---

##### `data_source_arn`<sup>Required</sup> <a name="data_source_arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArn"></a>

```python
data_source_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetPhysicalTableMapS3Source
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a>

---


### QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference <a name="QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetContainsHeader">reset_contains_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetDelimiter">reset_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetStartFromRow">reset_start_from_row</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetTextQualifier">reset_text_qualifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contains_header` <a name="reset_contains_header" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetContainsHeader"></a>

```python
def reset_contains_header() -> None
```

##### `reset_delimiter` <a name="reset_delimiter" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetDelimiter"></a>

```python
def reset_delimiter() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_start_from_row` <a name="reset_start_from_row" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetStartFromRow"></a>

```python
def reset_start_from_row() -> None
```

##### `reset_text_qualifier` <a name="reset_text_qualifier" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetTextQualifier"></a>

```python
def reset_text_qualifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeaderInput">contains_header_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiterInput">delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRowInput">start_from_row_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifierInput">text_qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeader">contains_header</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRow">start_from_row</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifier">text_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contains_header_input`<sup>Optional</sup> <a name="contains_header_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeaderInput"></a>

```python
contains_header_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delimiter_input`<sup>Optional</sup> <a name="delimiter_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiterInput"></a>

```python
delimiter_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `start_from_row_input`<sup>Optional</sup> <a name="start_from_row_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRowInput"></a>

```python
start_from_row_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `text_qualifier_input`<sup>Optional</sup> <a name="text_qualifier_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifierInput"></a>

```python
text_qualifier_input: str
```

- *Type:* str

---

##### `contains_header`<sup>Required</sup> <a name="contains_header" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeader"></a>

```python
contains_header: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `start_from_row`<sup>Required</sup> <a name="start_from_row" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRow"></a>

```python
start_from_row: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `text_qualifier`<sup>Required</sup> <a name="text_qualifier" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifier"></a>

```python
text_qualifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetPhysicalTableMapS3SourceUploadSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

---


### QuicksightDataSetRowLevelPermissionDataSetOutputReference <a name="QuicksightDataSetRowLevelPermissionDataSetOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetFormatVersion">reset_format_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetPermissionPolicy">reset_permission_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_format_version` <a name="reset_format_version" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetFormatVersion"></a>

```python
def reset_format_version() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_permission_policy` <a name="reset_permission_policy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetPermissionPolicy"></a>

```python
def reset_permission_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersionInput">format_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicyInput">permission_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersion">format_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicy">permission_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `format_version_input`<sup>Optional</sup> <a name="format_version_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersionInput"></a>

```python
format_version_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `permission_policy_input`<sup>Optional</sup> <a name="permission_policy_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicyInput"></a>

```python
permission_policy_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `format_version`<sup>Required</sup> <a name="format_version" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersion"></a>

```python
format_version: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `permission_policy`<sup>Required</sup> <a name="permission_policy" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicy"></a>

```python
permission_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetRowLevelPermissionDataSet
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a>

---


### QuicksightDataSetTagsList <a name="QuicksightDataSetTagsList" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDataSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightDataSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>]

---


### QuicksightDataSetTagsOutputReference <a name="QuicksightDataSetTagsOutputReference" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_data_set

quicksightDataSet.QuicksightDataSetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightDataSetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightDataSet.QuicksightDataSetTags">QuicksightDataSetTags</a>

---



