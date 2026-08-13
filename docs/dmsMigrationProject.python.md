# `dmsMigrationProject` Submodule <a name="`dmsMigrationProject` Submodule" id="@cdktn/provider-awscc.dmsMigrationProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsMigrationProject <a name="DmsMigrationProject" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project awscc_dms_migration_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer"></a>

```python
from cdktn_provider_awscc import dms_migration_project

dmsMigrationProject.DmsMigrationProject(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  instance_profile_arn: str = None,
  instance_profile_identifier: str = None,
  instance_profile_name: str = None,
  migration_project_creation_time: str = None,
  migration_project_identifier: str = None,
  migration_project_name: str = None,
  schema_conversion_application_attributes: DmsMigrationProjectSchemaConversionApplicationAttributes = None,
  source_data_provider_descriptors: IResolvable | typing.List[DmsMigrationProjectSourceDataProviderDescriptors] = None,
  tags: IResolvable | typing.List[DmsMigrationProjectTags] = None,
  target_data_provider_descriptors: IResolvable | typing.List[DmsMigrationProjectTargetDataProviderDescriptors] = None,
  transformation_rules: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.description">description</a></code> | <code>str</code> | The optional description of the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | The property describes an instance profile arn for the migration project. For read. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.instanceProfileIdentifier">instance_profile_identifier</a></code> | <code>str</code> | The property describes an instance profile identifier for the migration project. For create. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.instanceProfileName">instance_profile_name</a></code> | <code>str</code> | The property describes an instance profile name for the migration project. For read. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.migrationProjectCreationTime">migration_project_creation_time</a></code> | <code>str</code> | The property describes a creating time of the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.migrationProjectIdentifier">migration_project_identifier</a></code> | <code>str</code> | The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.migrationProjectName">migration_project_name</a></code> | <code>str</code> | The property describes a name to identify the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.schemaConversionApplicationAttributes">schema_conversion_application_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | The property describes schema conversion application attributes for the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.sourceDataProviderDescriptors">source_data_provider_descriptors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>]</code> | The property describes source data provider descriptors for the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.targetDataProviderDescriptors">target_data_provider_descriptors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>]</code> | The property describes target data provider descriptors for the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.transformationRules">transformation_rules</a></code> | <code>str</code> | The property describes transformation rules for the migration project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.description"></a>

- *Type:* str

The optional description of the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}

---

##### `instance_profile_arn`<sup>Optional</sup> <a name="instance_profile_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.instanceProfileArn"></a>

- *Type:* str

The property describes an instance profile arn for the migration project. For read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}

---

##### `instance_profile_identifier`<sup>Optional</sup> <a name="instance_profile_identifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.instanceProfileIdentifier"></a>

- *Type:* str

The property describes an instance profile identifier for the migration project. For create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#instance_profile_identifier DmsMigrationProject#instance_profile_identifier}

---

##### `instance_profile_name`<sup>Optional</sup> <a name="instance_profile_name" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.instanceProfileName"></a>

- *Type:* str

The property describes an instance profile name for the migration project. For read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#instance_profile_name DmsMigrationProject#instance_profile_name}

---

##### `migration_project_creation_time`<sup>Optional</sup> <a name="migration_project_creation_time" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.migrationProjectCreationTime"></a>

- *Type:* str

The property describes a creating time of the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#migration_project_creation_time DmsMigrationProject#migration_project_creation_time}

---

##### `migration_project_identifier`<sup>Optional</sup> <a name="migration_project_identifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.migrationProjectIdentifier"></a>

- *Type:* str

The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#migration_project_identifier DmsMigrationProject#migration_project_identifier}

---

##### `migration_project_name`<sup>Optional</sup> <a name="migration_project_name" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.migrationProjectName"></a>

- *Type:* str

The property describes a name to identify the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#migration_project_name DmsMigrationProject#migration_project_name}

---

##### `schema_conversion_application_attributes`<sup>Optional</sup> <a name="schema_conversion_application_attributes" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.schemaConversionApplicationAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>

The property describes schema conversion application attributes for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#schema_conversion_application_attributes DmsMigrationProject#schema_conversion_application_attributes}

---

##### `source_data_provider_descriptors`<sup>Optional</sup> <a name="source_data_provider_descriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.sourceDataProviderDescriptors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>]

The property describes source data provider descriptors for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#source_data_provider_descriptors DmsMigrationProject#source_data_provider_descriptors}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}

---

##### `target_data_provider_descriptors`<sup>Optional</sup> <a name="target_data_provider_descriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.targetDataProviderDescriptors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>]

The property describes target data provider descriptors for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#target_data_provider_descriptors DmsMigrationProject#target_data_provider_descriptors}

---

##### `transformation_rules`<sup>Optional</sup> <a name="transformation_rules" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.transformationRules"></a>

- *Type:* str

The property describes transformation rules for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes">put_schema_conversion_application_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptors">put_source_data_provider_descriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptors">put_target_data_provider_descriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileArn">reset_instance_profile_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileIdentifier">reset_instance_profile_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileName">reset_instance_profile_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectCreationTime">reset_migration_project_creation_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectIdentifier">reset_migration_project_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectName">reset_migration_project_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetSchemaConversionApplicationAttributes">reset_schema_conversion_application_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetSourceDataProviderDescriptors">reset_source_data_provider_descriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTargetDataProviderDescriptors">reset_target_data_provider_descriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTransformationRules">reset_transformation_rules</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_schema_conversion_application_attributes` <a name="put_schema_conversion_application_attributes" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes"></a>

```python
def put_schema_conversion_application_attributes(
  s3_bucket_path: str = None,
  s3_bucket_role_arn: str = None
) -> None
```

###### `s3_bucket_path`<sup>Optional</sup> <a name="s3_bucket_path" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes.parameter.s3BucketPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#s3_bucket_path DmsMigrationProject#s3_bucket_path}.

---

###### `s3_bucket_role_arn`<sup>Optional</sup> <a name="s3_bucket_role_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes.parameter.s3BucketRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#s3_bucket_role_arn DmsMigrationProject#s3_bucket_role_arn}.

---

##### `put_source_data_provider_descriptors` <a name="put_source_data_provider_descriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptors"></a>

```python
def put_source_data_provider_descriptors(
  value: IResolvable | typing.List[DmsMigrationProjectSourceDataProviderDescriptors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DmsMigrationProjectTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>]

---

##### `put_target_data_provider_descriptors` <a name="put_target_data_provider_descriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptors"></a>

```python
def put_target_data_provider_descriptors(
  value: IResolvable | typing.List[DmsMigrationProjectTargetDataProviderDescriptors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_instance_profile_arn` <a name="reset_instance_profile_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileArn"></a>

```python
def reset_instance_profile_arn() -> None
```

##### `reset_instance_profile_identifier` <a name="reset_instance_profile_identifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileIdentifier"></a>

```python
def reset_instance_profile_identifier() -> None
```

##### `reset_instance_profile_name` <a name="reset_instance_profile_name" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileName"></a>

```python
def reset_instance_profile_name() -> None
```

##### `reset_migration_project_creation_time` <a name="reset_migration_project_creation_time" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectCreationTime"></a>

```python
def reset_migration_project_creation_time() -> None
```

##### `reset_migration_project_identifier` <a name="reset_migration_project_identifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectIdentifier"></a>

```python
def reset_migration_project_identifier() -> None
```

##### `reset_migration_project_name` <a name="reset_migration_project_name" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectName"></a>

```python
def reset_migration_project_name() -> None
```

##### `reset_schema_conversion_application_attributes` <a name="reset_schema_conversion_application_attributes" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetSchemaConversionApplicationAttributes"></a>

```python
def reset_schema_conversion_application_attributes() -> None
```

##### `reset_source_data_provider_descriptors` <a name="reset_source_data_provider_descriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetSourceDataProviderDescriptors"></a>

```python
def reset_source_data_provider_descriptors() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_data_provider_descriptors` <a name="reset_target_data_provider_descriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTargetDataProviderDescriptors"></a>

```python
def reset_target_data_provider_descriptors() -> None
```

##### `reset_transformation_rules` <a name="reset_transformation_rules" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTransformationRules"></a>

```python
def reset_transformation_rules() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DmsMigrationProject resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isConstruct"></a>

```python
from cdktn_provider_awscc import dms_migration_project

dmsMigrationProject.DmsMigrationProject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformElement"></a>

```python
from cdktn_provider_awscc import dms_migration_project

dmsMigrationProject.DmsMigrationProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformResource"></a>

```python
from cdktn_provider_awscc import dms_migration_project

dmsMigrationProject.DmsMigrationProject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import dms_migration_project

dmsMigrationProject.DmsMigrationProject.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DmsMigrationProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DmsMigrationProject to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DmsMigrationProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DmsMigrationProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectArn">migration_project_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributes">schema_conversion_application_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference">DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptors">source_data_provider_descriptors</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList">DmsMigrationProjectSourceDataProviderDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList">DmsMigrationProjectTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptors">target_data_provider_descriptors</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList">DmsMigrationProjectTargetDataProviderDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArnInput">instance_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileIdentifierInput">instance_profile_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileNameInput">instance_profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectCreationTimeInput">migration_project_creation_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectIdentifierInput">migration_project_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectNameInput">migration_project_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributesInput">schema_conversion_application_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptorsInput">source_data_provider_descriptors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptorsInput">target_data_provider_descriptors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.transformationRulesInput">transformation_rules_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileIdentifier">instance_profile_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileName">instance_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectCreationTime">migration_project_creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectIdentifier">migration_project_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectName">migration_project_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.transformationRules">transformation_rules</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `migration_project_arn`<sup>Required</sup> <a name="migration_project_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectArn"></a>

```python
migration_project_arn: str
```

- *Type:* str

---

##### `schema_conversion_application_attributes`<sup>Required</sup> <a name="schema_conversion_application_attributes" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributes"></a>

```python
schema_conversion_application_attributes: DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference">DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference</a>

---

##### `source_data_provider_descriptors`<sup>Required</sup> <a name="source_data_provider_descriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptors"></a>

```python
source_data_provider_descriptors: DmsMigrationProjectSourceDataProviderDescriptorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList">DmsMigrationProjectSourceDataProviderDescriptorsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tags"></a>

```python
tags: DmsMigrationProjectTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList">DmsMigrationProjectTagsList</a>

---

##### `target_data_provider_descriptors`<sup>Required</sup> <a name="target_data_provider_descriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptors"></a>

```python
target_data_provider_descriptors: DmsMigrationProjectTargetDataProviderDescriptorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList">DmsMigrationProjectTargetDataProviderDescriptorsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `instance_profile_arn_input`<sup>Optional</sup> <a name="instance_profile_arn_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArnInput"></a>

```python
instance_profile_arn_input: str
```

- *Type:* str

---

##### `instance_profile_identifier_input`<sup>Optional</sup> <a name="instance_profile_identifier_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileIdentifierInput"></a>

```python
instance_profile_identifier_input: str
```

- *Type:* str

---

##### `instance_profile_name_input`<sup>Optional</sup> <a name="instance_profile_name_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileNameInput"></a>

```python
instance_profile_name_input: str
```

- *Type:* str

---

##### `migration_project_creation_time_input`<sup>Optional</sup> <a name="migration_project_creation_time_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectCreationTimeInput"></a>

```python
migration_project_creation_time_input: str
```

- *Type:* str

---

##### `migration_project_identifier_input`<sup>Optional</sup> <a name="migration_project_identifier_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectIdentifierInput"></a>

```python
migration_project_identifier_input: str
```

- *Type:* str

---

##### `migration_project_name_input`<sup>Optional</sup> <a name="migration_project_name_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectNameInput"></a>

```python
migration_project_name_input: str
```

- *Type:* str

---

##### `schema_conversion_application_attributes_input`<sup>Optional</sup> <a name="schema_conversion_application_attributes_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributesInput"></a>

```python
schema_conversion_application_attributes_input: IResolvable | DmsMigrationProjectSchemaConversionApplicationAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>

---

##### `source_data_provider_descriptors_input`<sup>Optional</sup> <a name="source_data_provider_descriptors_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptorsInput"></a>

```python
source_data_provider_descriptors_input: IResolvable | typing.List[DmsMigrationProjectSourceDataProviderDescriptors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DmsMigrationProjectTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>]

---

##### `target_data_provider_descriptors_input`<sup>Optional</sup> <a name="target_data_provider_descriptors_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptorsInput"></a>

```python
target_data_provider_descriptors_input: IResolvable | typing.List[DmsMigrationProjectTargetDataProviderDescriptors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>]

---

##### `transformation_rules_input`<sup>Optional</sup> <a name="transformation_rules_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.transformationRulesInput"></a>

```python
transformation_rules_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `instance_profile_arn`<sup>Required</sup> <a name="instance_profile_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

---

##### `instance_profile_identifier`<sup>Required</sup> <a name="instance_profile_identifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileIdentifier"></a>

```python
instance_profile_identifier: str
```

- *Type:* str

---

##### `instance_profile_name`<sup>Required</sup> <a name="instance_profile_name" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileName"></a>

```python
instance_profile_name: str
```

- *Type:* str

---

##### `migration_project_creation_time`<sup>Required</sup> <a name="migration_project_creation_time" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectCreationTime"></a>

```python
migration_project_creation_time: str
```

- *Type:* str

---

##### `migration_project_identifier`<sup>Required</sup> <a name="migration_project_identifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectIdentifier"></a>

```python
migration_project_identifier: str
```

- *Type:* str

---

##### `migration_project_name`<sup>Required</sup> <a name="migration_project_name" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectName"></a>

```python
migration_project_name: str
```

- *Type:* str

---

##### `transformation_rules`<sup>Required</sup> <a name="transformation_rules" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.transformationRules"></a>

```python
transformation_rules: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsMigrationProjectConfig <a name="DmsMigrationProjectConfig" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.Initializer"></a>

```python
from cdktn_provider_awscc import dms_migration_project

dmsMigrationProject.DmsMigrationProjectConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  instance_profile_arn: str = None,
  instance_profile_identifier: str = None,
  instance_profile_name: str = None,
  migration_project_creation_time: str = None,
  migration_project_identifier: str = None,
  migration_project_name: str = None,
  schema_conversion_application_attributes: DmsMigrationProjectSchemaConversionApplicationAttributes = None,
  source_data_provider_descriptors: IResolvable | typing.List[DmsMigrationProjectSourceDataProviderDescriptors] = None,
  tags: IResolvable | typing.List[DmsMigrationProjectTags] = None,
  target_data_provider_descriptors: IResolvable | typing.List[DmsMigrationProjectTargetDataProviderDescriptors] = None,
  transformation_rules: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.description">description</a></code> | <code>str</code> | The optional description of the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | The property describes an instance profile arn for the migration project. For read. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileIdentifier">instance_profile_identifier</a></code> | <code>str</code> | The property describes an instance profile identifier for the migration project. For create. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileName">instance_profile_name</a></code> | <code>str</code> | The property describes an instance profile name for the migration project. For read. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectCreationTime">migration_project_creation_time</a></code> | <code>str</code> | The property describes a creating time of the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectIdentifier">migration_project_identifier</a></code> | <code>str</code> | The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectName">migration_project_name</a></code> | <code>str</code> | The property describes a name to identify the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.schemaConversionApplicationAttributes">schema_conversion_application_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | The property describes schema conversion application attributes for the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.sourceDataProviderDescriptors">source_data_provider_descriptors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>]</code> | The property describes source data provider descriptors for the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.targetDataProviderDescriptors">target_data_provider_descriptors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>]</code> | The property describes target data provider descriptors for the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.transformationRules">transformation_rules</a></code> | <code>str</code> | The property describes transformation rules for the migration project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The optional description of the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}

---

##### `instance_profile_arn`<sup>Optional</sup> <a name="instance_profile_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

The property describes an instance profile arn for the migration project. For read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}

---

##### `instance_profile_identifier`<sup>Optional</sup> <a name="instance_profile_identifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileIdentifier"></a>

```python
instance_profile_identifier: str
```

- *Type:* str

The property describes an instance profile identifier for the migration project. For create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#instance_profile_identifier DmsMigrationProject#instance_profile_identifier}

---

##### `instance_profile_name`<sup>Optional</sup> <a name="instance_profile_name" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileName"></a>

```python
instance_profile_name: str
```

- *Type:* str

The property describes an instance profile name for the migration project. For read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#instance_profile_name DmsMigrationProject#instance_profile_name}

---

##### `migration_project_creation_time`<sup>Optional</sup> <a name="migration_project_creation_time" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectCreationTime"></a>

```python
migration_project_creation_time: str
```

- *Type:* str

The property describes a creating time of the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#migration_project_creation_time DmsMigrationProject#migration_project_creation_time}

---

##### `migration_project_identifier`<sup>Optional</sup> <a name="migration_project_identifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectIdentifier"></a>

```python
migration_project_identifier: str
```

- *Type:* str

The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#migration_project_identifier DmsMigrationProject#migration_project_identifier}

---

##### `migration_project_name`<sup>Optional</sup> <a name="migration_project_name" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectName"></a>

```python
migration_project_name: str
```

- *Type:* str

The property describes a name to identify the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#migration_project_name DmsMigrationProject#migration_project_name}

---

##### `schema_conversion_application_attributes`<sup>Optional</sup> <a name="schema_conversion_application_attributes" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.schemaConversionApplicationAttributes"></a>

```python
schema_conversion_application_attributes: DmsMigrationProjectSchemaConversionApplicationAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>

The property describes schema conversion application attributes for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#schema_conversion_application_attributes DmsMigrationProject#schema_conversion_application_attributes}

---

##### `source_data_provider_descriptors`<sup>Optional</sup> <a name="source_data_provider_descriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.sourceDataProviderDescriptors"></a>

```python
source_data_provider_descriptors: IResolvable | typing.List[DmsMigrationProjectSourceDataProviderDescriptors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>]

The property describes source data provider descriptors for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#source_data_provider_descriptors DmsMigrationProject#source_data_provider_descriptors}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DmsMigrationProjectTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}

---

##### `target_data_provider_descriptors`<sup>Optional</sup> <a name="target_data_provider_descriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.targetDataProviderDescriptors"></a>

```python
target_data_provider_descriptors: IResolvable | typing.List[DmsMigrationProjectTargetDataProviderDescriptors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>]

The property describes target data provider descriptors for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#target_data_provider_descriptors DmsMigrationProject#target_data_provider_descriptors}

---

##### `transformation_rules`<sup>Optional</sup> <a name="transformation_rules" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.transformationRules"></a>

```python
transformation_rules: str
```

- *Type:* str

The property describes transformation rules for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}

---

### DmsMigrationProjectSchemaConversionApplicationAttributes <a name="DmsMigrationProjectSchemaConversionApplicationAttributes" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import dms_migration_project

dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes(
  s3_bucket_path: str = None,
  s3_bucket_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketPath">s3_bucket_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#s3_bucket_path DmsMigrationProject#s3_bucket_path}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketRoleArn">s3_bucket_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#s3_bucket_role_arn DmsMigrationProject#s3_bucket_role_arn}. |

---

##### `s3_bucket_path`<sup>Optional</sup> <a name="s3_bucket_path" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketPath"></a>

```python
s3_bucket_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#s3_bucket_path DmsMigrationProject#s3_bucket_path}.

---

##### `s3_bucket_role_arn`<sup>Optional</sup> <a name="s3_bucket_role_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketRoleArn"></a>

```python
s3_bucket_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#s3_bucket_role_arn DmsMigrationProject#s3_bucket_role_arn}.

---

### DmsMigrationProjectSourceDataProviderDescriptors <a name="DmsMigrationProjectSourceDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.Initializer"></a>

```python
from cdktn_provider_awscc import dms_migration_project

dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors(
  data_provider_arn: str = None,
  data_provider_identifier: str = None,
  data_provider_name: str = None,
  secrets_manager_access_role_arn: str = None,
  secrets_manager_secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderArn">data_provider_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderIdentifier">data_provider_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#data_provider_identifier DmsMigrationProject#data_provider_identifier}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderName">data_provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#data_provider_name DmsMigrationProject#data_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}. |

---

##### `data_provider_arn`<sup>Optional</sup> <a name="data_provider_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderArn"></a>

```python
data_provider_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}.

---

##### `data_provider_identifier`<sup>Optional</sup> <a name="data_provider_identifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderIdentifier"></a>

```python
data_provider_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#data_provider_identifier DmsMigrationProject#data_provider_identifier}.

---

##### `data_provider_name`<sup>Optional</sup> <a name="data_provider_name" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderName"></a>

```python
data_provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#data_provider_name DmsMigrationProject#data_provider_name}.

---

##### `secrets_manager_access_role_arn`<sup>Optional</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}.

---

##### `secrets_manager_secret_id`<sup>Optional</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}.

---

### DmsMigrationProjectTags <a name="DmsMigrationProjectTags" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags.Initializer"></a>

```python
from cdktn_provider_awscc import dms_migration_project

dmsMigrationProject.DmsMigrationProjectTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, , and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#key DmsMigrationProject#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, , and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#value DmsMigrationProject#value}

---

### DmsMigrationProjectTargetDataProviderDescriptors <a name="DmsMigrationProjectTargetDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.Initializer"></a>

```python
from cdktn_provider_awscc import dms_migration_project

dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors(
  data_provider_arn: str = None,
  data_provider_identifier: str = None,
  data_provider_name: str = None,
  secrets_manager_access_role_arn: str = None,
  secrets_manager_secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderArn">data_provider_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderIdentifier">data_provider_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#data_provider_identifier DmsMigrationProject#data_provider_identifier}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderName">data_provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#data_provider_name DmsMigrationProject#data_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}. |

---

##### `data_provider_arn`<sup>Optional</sup> <a name="data_provider_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderArn"></a>

```python
data_provider_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}.

---

##### `data_provider_identifier`<sup>Optional</sup> <a name="data_provider_identifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderIdentifier"></a>

```python
data_provider_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#data_provider_identifier DmsMigrationProject#data_provider_identifier}.

---

##### `data_provider_name`<sup>Optional</sup> <a name="data_provider_name" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderName"></a>

```python
data_provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#data_provider_name DmsMigrationProject#data_provider_name}.

---

##### `secrets_manager_access_role_arn`<sup>Optional</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}.

---

##### `secrets_manager_secret_id`<sup>Optional</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference <a name="DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_migration_project

dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketPath">reset_s3_bucket_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketRoleArn">reset_s3_bucket_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_bucket_path` <a name="reset_s3_bucket_path" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketPath"></a>

```python
def reset_s3_bucket_path() -> None
```

##### `reset_s3_bucket_role_arn` <a name="reset_s3_bucket_role_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketRoleArn"></a>

```python
def reset_s3_bucket_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPathInput">s3_bucket_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArnInput">s3_bucket_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath">s3_bucket_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn">s3_bucket_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_path_input`<sup>Optional</sup> <a name="s3_bucket_path_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPathInput"></a>

```python
s3_bucket_path_input: str
```

- *Type:* str

---

##### `s3_bucket_role_arn_input`<sup>Optional</sup> <a name="s3_bucket_role_arn_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArnInput"></a>

```python
s3_bucket_role_arn_input: str
```

- *Type:* str

---

##### `s3_bucket_path`<sup>Required</sup> <a name="s3_bucket_path" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath"></a>

```python
s3_bucket_path: str
```

- *Type:* str

---

##### `s3_bucket_role_arn`<sup>Required</sup> <a name="s3_bucket_role_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn"></a>

```python
s3_bucket_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsMigrationProjectSchemaConversionApplicationAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>

---


### DmsMigrationProjectSourceDataProviderDescriptorsList <a name="DmsMigrationProjectSourceDataProviderDescriptorsList" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer"></a>

```python
from cdktn_provider_awscc import dms_migration_project

dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsMigrationProjectSourceDataProviderDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsMigrationProjectSourceDataProviderDescriptors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>]

---


### DmsMigrationProjectSourceDataProviderDescriptorsOutputReference <a name="DmsMigrationProjectSourceDataProviderDescriptorsOutputReference" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_migration_project

dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderArn">reset_data_provider_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderIdentifier">reset_data_provider_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderName">reset_data_provider_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetSecretsManagerAccessRoleArn">reset_secrets_manager_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetSecretsManagerSecretId">reset_secrets_manager_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_provider_arn` <a name="reset_data_provider_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderArn"></a>

```python
def reset_data_provider_arn() -> None
```

##### `reset_data_provider_identifier` <a name="reset_data_provider_identifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderIdentifier"></a>

```python
def reset_data_provider_identifier() -> None
```

##### `reset_data_provider_name` <a name="reset_data_provider_name" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderName"></a>

```python
def reset_data_provider_name() -> None
```

##### `reset_secrets_manager_access_role_arn` <a name="reset_secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```python
def reset_secrets_manager_access_role_arn() -> None
```

##### `reset_secrets_manager_secret_id` <a name="reset_secrets_manager_secret_id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetSecretsManagerSecretId"></a>

```python
def reset_secrets_manager_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArnInput">data_provider_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifierInput">data_provider_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderNameInput">data_provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArnInput">secrets_manager_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretIdInput">secrets_manager_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArn">data_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifier">data_provider_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderName">data_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_provider_arn_input`<sup>Optional</sup> <a name="data_provider_arn_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArnInput"></a>

```python
data_provider_arn_input: str
```

- *Type:* str

---

##### `data_provider_identifier_input`<sup>Optional</sup> <a name="data_provider_identifier_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifierInput"></a>

```python
data_provider_identifier_input: str
```

- *Type:* str

---

##### `data_provider_name_input`<sup>Optional</sup> <a name="data_provider_name_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderNameInput"></a>

```python
data_provider_name_input: str
```

- *Type:* str

---

##### `secrets_manager_access_role_arn_input`<sup>Optional</sup> <a name="secrets_manager_access_role_arn_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```python
secrets_manager_access_role_arn_input: str
```

- *Type:* str

---

##### `secrets_manager_secret_id_input`<sup>Optional</sup> <a name="secrets_manager_secret_id_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretIdInput"></a>

```python
secrets_manager_secret_id_input: str
```

- *Type:* str

---

##### `data_provider_arn`<sup>Required</sup> <a name="data_provider_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArn"></a>

```python
data_provider_arn: str
```

- *Type:* str

---

##### `data_provider_identifier`<sup>Required</sup> <a name="data_provider_identifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifier"></a>

```python
data_provider_identifier: str
```

- *Type:* str

---

##### `data_provider_name`<sup>Required</sup> <a name="data_provider_name" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderName"></a>

```python
data_provider_name: str
```

- *Type:* str

---

##### `secrets_manager_access_role_arn`<sup>Required</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_secret_id`<sup>Required</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsMigrationProjectSourceDataProviderDescriptors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>

---


### DmsMigrationProjectTagsList <a name="DmsMigrationProjectTagsList" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import dms_migration_project

dmsMigrationProject.DmsMigrationProjectTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsMigrationProjectTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsMigrationProjectTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>]

---


### DmsMigrationProjectTagsOutputReference <a name="DmsMigrationProjectTagsOutputReference" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_migration_project

dmsMigrationProject.DmsMigrationProjectTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsMigrationProjectTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>

---


### DmsMigrationProjectTargetDataProviderDescriptorsList <a name="DmsMigrationProjectTargetDataProviderDescriptorsList" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer"></a>

```python
from cdktn_provider_awscc import dms_migration_project

dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsMigrationProjectTargetDataProviderDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsMigrationProjectTargetDataProviderDescriptors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>]

---


### DmsMigrationProjectTargetDataProviderDescriptorsOutputReference <a name="DmsMigrationProjectTargetDataProviderDescriptorsOutputReference" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_migration_project

dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderArn">reset_data_provider_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderIdentifier">reset_data_provider_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderName">reset_data_provider_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetSecretsManagerAccessRoleArn">reset_secrets_manager_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetSecretsManagerSecretId">reset_secrets_manager_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_provider_arn` <a name="reset_data_provider_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderArn"></a>

```python
def reset_data_provider_arn() -> None
```

##### `reset_data_provider_identifier` <a name="reset_data_provider_identifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderIdentifier"></a>

```python
def reset_data_provider_identifier() -> None
```

##### `reset_data_provider_name` <a name="reset_data_provider_name" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderName"></a>

```python
def reset_data_provider_name() -> None
```

##### `reset_secrets_manager_access_role_arn` <a name="reset_secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```python
def reset_secrets_manager_access_role_arn() -> None
```

##### `reset_secrets_manager_secret_id` <a name="reset_secrets_manager_secret_id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetSecretsManagerSecretId"></a>

```python
def reset_secrets_manager_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArnInput">data_provider_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifierInput">data_provider_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderNameInput">data_provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArnInput">secrets_manager_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretIdInput">secrets_manager_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArn">data_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifier">data_provider_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderName">data_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_provider_arn_input`<sup>Optional</sup> <a name="data_provider_arn_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArnInput"></a>

```python
data_provider_arn_input: str
```

- *Type:* str

---

##### `data_provider_identifier_input`<sup>Optional</sup> <a name="data_provider_identifier_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifierInput"></a>

```python
data_provider_identifier_input: str
```

- *Type:* str

---

##### `data_provider_name_input`<sup>Optional</sup> <a name="data_provider_name_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderNameInput"></a>

```python
data_provider_name_input: str
```

- *Type:* str

---

##### `secrets_manager_access_role_arn_input`<sup>Optional</sup> <a name="secrets_manager_access_role_arn_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```python
secrets_manager_access_role_arn_input: str
```

- *Type:* str

---

##### `secrets_manager_secret_id_input`<sup>Optional</sup> <a name="secrets_manager_secret_id_input" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretIdInput"></a>

```python
secrets_manager_secret_id_input: str
```

- *Type:* str

---

##### `data_provider_arn`<sup>Required</sup> <a name="data_provider_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArn"></a>

```python
data_provider_arn: str
```

- *Type:* str

---

##### `data_provider_identifier`<sup>Required</sup> <a name="data_provider_identifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifier"></a>

```python
data_provider_identifier: str
```

- *Type:* str

---

##### `data_provider_name`<sup>Required</sup> <a name="data_provider_name" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderName"></a>

```python
data_provider_name: str
```

- *Type:* str

---

##### `secrets_manager_access_role_arn`<sup>Required</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_secret_id`<sup>Required</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsMigrationProjectTargetDataProviderDescriptors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>

---



