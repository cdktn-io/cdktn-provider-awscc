# `dmsMigrationProject` Submodule <a name="`dmsMigrationProject` Submodule" id="@cdktn/provider-awscc.dmsMigrationProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsMigrationProject <a name="DmsMigrationProject" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project awscc_dms_migration_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_migration_project.DmsMigrationProject;

DmsMigrationProject.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .instanceProfileArn(java.lang.String)
//  .instanceProfileIdentifier(java.lang.String)
//  .instanceProfileName(java.lang.String)
//  .migrationProjectCreationTime(java.lang.String)
//  .migrationProjectIdentifier(java.lang.String)
//  .migrationProjectName(java.lang.String)
//  .schemaConversionApplicationAttributes(DmsMigrationProjectSchemaConversionApplicationAttributes)
//  .sourceDataProviderDescriptors(IResolvable|java.util.List<DmsMigrationProjectSourceDataProviderDescriptors>)
//  .tags(IResolvable|java.util.List<DmsMigrationProjectTags>)
//  .targetDataProviderDescriptors(IResolvable|java.util.List<DmsMigrationProjectTargetDataProviderDescriptors>)
//  .transformationRules(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The optional description of the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | The property describes an instance profile arn for the migration project. For read. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.instanceProfileIdentifier">instanceProfileIdentifier</a></code> | <code>java.lang.String</code> | The property describes an instance profile identifier for the migration project. For create. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.instanceProfileName">instanceProfileName</a></code> | <code>java.lang.String</code> | The property describes an instance profile name for the migration project. For read. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.migrationProjectCreationTime">migrationProjectCreationTime</a></code> | <code>java.lang.String</code> | The property describes a creating time of the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.migrationProjectIdentifier">migrationProjectIdentifier</a></code> | <code>java.lang.String</code> | The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.migrationProjectName">migrationProjectName</a></code> | <code>java.lang.String</code> | The property describes a name to identify the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.schemaConversionApplicationAttributes">schemaConversionApplicationAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | The property describes schema conversion application attributes for the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.sourceDataProviderDescriptors">sourceDataProviderDescriptors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>></code> | The property describes source data provider descriptors for the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.targetDataProviderDescriptors">targetDataProviderDescriptors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>></code> | The property describes target data provider descriptors for the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.transformationRules">transformationRules</a></code> | <code>java.lang.String</code> | The property describes transformation rules for the migration project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The optional description of the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.instanceProfileArn"></a>

- *Type:* java.lang.String

The property describes an instance profile arn for the migration project. For read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}

---

##### `instanceProfileIdentifier`<sup>Optional</sup> <a name="instanceProfileIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.instanceProfileIdentifier"></a>

- *Type:* java.lang.String

The property describes an instance profile identifier for the migration project. For create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#instance_profile_identifier DmsMigrationProject#instance_profile_identifier}

---

##### `instanceProfileName`<sup>Optional</sup> <a name="instanceProfileName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.instanceProfileName"></a>

- *Type:* java.lang.String

The property describes an instance profile name for the migration project. For read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#instance_profile_name DmsMigrationProject#instance_profile_name}

---

##### `migrationProjectCreationTime`<sup>Optional</sup> <a name="migrationProjectCreationTime" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.migrationProjectCreationTime"></a>

- *Type:* java.lang.String

The property describes a creating time of the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#migration_project_creation_time DmsMigrationProject#migration_project_creation_time}

---

##### `migrationProjectIdentifier`<sup>Optional</sup> <a name="migrationProjectIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.migrationProjectIdentifier"></a>

- *Type:* java.lang.String

The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#migration_project_identifier DmsMigrationProject#migration_project_identifier}

---

##### `migrationProjectName`<sup>Optional</sup> <a name="migrationProjectName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.migrationProjectName"></a>

- *Type:* java.lang.String

The property describes a name to identify the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#migration_project_name DmsMigrationProject#migration_project_name}

---

##### `schemaConversionApplicationAttributes`<sup>Optional</sup> <a name="schemaConversionApplicationAttributes" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.schemaConversionApplicationAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>

The property describes schema conversion application attributes for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#schema_conversion_application_attributes DmsMigrationProject#schema_conversion_application_attributes}

---

##### `sourceDataProviderDescriptors`<sup>Optional</sup> <a name="sourceDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.sourceDataProviderDescriptors"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>>

The property describes source data provider descriptors for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#source_data_provider_descriptors DmsMigrationProject#source_data_provider_descriptors}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}

---

##### `targetDataProviderDescriptors`<sup>Optional</sup> <a name="targetDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.targetDataProviderDescriptors"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>>

The property describes target data provider descriptors for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#target_data_provider_descriptors DmsMigrationProject#target_data_provider_descriptors}

---

##### `transformationRules`<sup>Optional</sup> <a name="transformationRules" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.transformationRules"></a>

- *Type:* java.lang.String

The property describes transformation rules for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes">putSchemaConversionApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptors">putSourceDataProviderDescriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptors">putTargetDataProviderDescriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileIdentifier">resetInstanceProfileIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileName">resetInstanceProfileName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectCreationTime">resetMigrationProjectCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectIdentifier">resetMigrationProjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectName">resetMigrationProjectName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetSchemaConversionApplicationAttributes">resetSchemaConversionApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetSourceDataProviderDescriptors">resetSourceDataProviderDescriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTargetDataProviderDescriptors">resetTargetDataProviderDescriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTransformationRules">resetTransformationRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchemaConversionApplicationAttributes` <a name="putSchemaConversionApplicationAttributes" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes"></a>

```java
public void putSchemaConversionApplicationAttributes(DmsMigrationProjectSchemaConversionApplicationAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>

---

##### `putSourceDataProviderDescriptors` <a name="putSourceDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptors"></a>

```java
public void putSourceDataProviderDescriptors(IResolvable|java.util.List<DmsMigrationProjectSourceDataProviderDescriptors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DmsMigrationProjectTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>>

---

##### `putTargetDataProviderDescriptors` <a name="putTargetDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptors"></a>

```java
public void putTargetDataProviderDescriptors(IResolvable|java.util.List<DmsMigrationProjectTargetDataProviderDescriptors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileArn"></a>

```java
public void resetInstanceProfileArn()
```

##### `resetInstanceProfileIdentifier` <a name="resetInstanceProfileIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileIdentifier"></a>

```java
public void resetInstanceProfileIdentifier()
```

##### `resetInstanceProfileName` <a name="resetInstanceProfileName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileName"></a>

```java
public void resetInstanceProfileName()
```

##### `resetMigrationProjectCreationTime` <a name="resetMigrationProjectCreationTime" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectCreationTime"></a>

```java
public void resetMigrationProjectCreationTime()
```

##### `resetMigrationProjectIdentifier` <a name="resetMigrationProjectIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectIdentifier"></a>

```java
public void resetMigrationProjectIdentifier()
```

##### `resetMigrationProjectName` <a name="resetMigrationProjectName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectName"></a>

```java
public void resetMigrationProjectName()
```

##### `resetSchemaConversionApplicationAttributes` <a name="resetSchemaConversionApplicationAttributes" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetSchemaConversionApplicationAttributes"></a>

```java
public void resetSchemaConversionApplicationAttributes()
```

##### `resetSourceDataProviderDescriptors` <a name="resetSourceDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetSourceDataProviderDescriptors"></a>

```java
public void resetSourceDataProviderDescriptors()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetDataProviderDescriptors` <a name="resetTargetDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTargetDataProviderDescriptors"></a>

```java
public void resetTargetDataProviderDescriptors()
```

##### `resetTransformationRules` <a name="resetTransformationRules" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTransformationRules"></a>

```java
public void resetTransformationRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DmsMigrationProject resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isConstruct"></a>

```java
import io.cdktn.providers.awscc.dms_migration_project.DmsMigrationProject;

DmsMigrationProject.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.dms_migration_project.DmsMigrationProject;

DmsMigrationProject.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.dms_migration_project.DmsMigrationProject;

DmsMigrationProject.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.dms_migration_project.DmsMigrationProject;

DmsMigrationProject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DmsMigrationProject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DmsMigrationProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DmsMigrationProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DmsMigrationProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DmsMigrationProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectArn">migrationProjectArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributes">schemaConversionApplicationAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference">DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptors">sourceDataProviderDescriptors</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList">DmsMigrationProjectSourceDataProviderDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList">DmsMigrationProjectTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptors">targetDataProviderDescriptors</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList">DmsMigrationProjectTargetDataProviderDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileIdentifierInput">instanceProfileIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileNameInput">instanceProfileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectCreationTimeInput">migrationProjectCreationTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectIdentifierInput">migrationProjectIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectNameInput">migrationProjectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributesInput">schemaConversionApplicationAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptorsInput">sourceDataProviderDescriptorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptorsInput">targetDataProviderDescriptorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.transformationRulesInput">transformationRulesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileIdentifier">instanceProfileIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileName">instanceProfileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectCreationTime">migrationProjectCreationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectIdentifier">migrationProjectIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectName">migrationProjectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.transformationRules">transformationRules</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `migrationProjectArn`<sup>Required</sup> <a name="migrationProjectArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectArn"></a>

```java
public java.lang.String getMigrationProjectArn();
```

- *Type:* java.lang.String

---

##### `schemaConversionApplicationAttributes`<sup>Required</sup> <a name="schemaConversionApplicationAttributes" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributes"></a>

```java
public DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference getSchemaConversionApplicationAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference">DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference</a>

---

##### `sourceDataProviderDescriptors`<sup>Required</sup> <a name="sourceDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptors"></a>

```java
public DmsMigrationProjectSourceDataProviderDescriptorsList getSourceDataProviderDescriptors();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList">DmsMigrationProjectSourceDataProviderDescriptorsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tags"></a>

```java
public DmsMigrationProjectTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList">DmsMigrationProjectTagsList</a>

---

##### `targetDataProviderDescriptors`<sup>Required</sup> <a name="targetDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptors"></a>

```java
public DmsMigrationProjectTargetDataProviderDescriptorsList getTargetDataProviderDescriptors();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList">DmsMigrationProjectTargetDataProviderDescriptorsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArnInput"></a>

```java
public java.lang.String getInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `instanceProfileIdentifierInput`<sup>Optional</sup> <a name="instanceProfileIdentifierInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileIdentifierInput"></a>

```java
public java.lang.String getInstanceProfileIdentifierInput();
```

- *Type:* java.lang.String

---

##### `instanceProfileNameInput`<sup>Optional</sup> <a name="instanceProfileNameInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileNameInput"></a>

```java
public java.lang.String getInstanceProfileNameInput();
```

- *Type:* java.lang.String

---

##### `migrationProjectCreationTimeInput`<sup>Optional</sup> <a name="migrationProjectCreationTimeInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectCreationTimeInput"></a>

```java
public java.lang.String getMigrationProjectCreationTimeInput();
```

- *Type:* java.lang.String

---

##### `migrationProjectIdentifierInput`<sup>Optional</sup> <a name="migrationProjectIdentifierInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectIdentifierInput"></a>

```java
public java.lang.String getMigrationProjectIdentifierInput();
```

- *Type:* java.lang.String

---

##### `migrationProjectNameInput`<sup>Optional</sup> <a name="migrationProjectNameInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectNameInput"></a>

```java
public java.lang.String getMigrationProjectNameInput();
```

- *Type:* java.lang.String

---

##### `schemaConversionApplicationAttributesInput`<sup>Optional</sup> <a name="schemaConversionApplicationAttributesInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributesInput"></a>

```java
public IResolvable|DmsMigrationProjectSchemaConversionApplicationAttributes getSchemaConversionApplicationAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>

---

##### `sourceDataProviderDescriptorsInput`<sup>Optional</sup> <a name="sourceDataProviderDescriptorsInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptorsInput"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectSourceDataProviderDescriptors> getSourceDataProviderDescriptorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>>

---

##### `targetDataProviderDescriptorsInput`<sup>Optional</sup> <a name="targetDataProviderDescriptorsInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptorsInput"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectTargetDataProviderDescriptors> getTargetDataProviderDescriptorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>>

---

##### `transformationRulesInput`<sup>Optional</sup> <a name="transformationRulesInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.transformationRulesInput"></a>

```java
public java.lang.String getTransformationRulesInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `instanceProfileIdentifier`<sup>Required</sup> <a name="instanceProfileIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileIdentifier"></a>

```java
public java.lang.String getInstanceProfileIdentifier();
```

- *Type:* java.lang.String

---

##### `instanceProfileName`<sup>Required</sup> <a name="instanceProfileName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileName"></a>

```java
public java.lang.String getInstanceProfileName();
```

- *Type:* java.lang.String

---

##### `migrationProjectCreationTime`<sup>Required</sup> <a name="migrationProjectCreationTime" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectCreationTime"></a>

```java
public java.lang.String getMigrationProjectCreationTime();
```

- *Type:* java.lang.String

---

##### `migrationProjectIdentifier`<sup>Required</sup> <a name="migrationProjectIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectIdentifier"></a>

```java
public java.lang.String getMigrationProjectIdentifier();
```

- *Type:* java.lang.String

---

##### `migrationProjectName`<sup>Required</sup> <a name="migrationProjectName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectName"></a>

```java
public java.lang.String getMigrationProjectName();
```

- *Type:* java.lang.String

---

##### `transformationRules`<sup>Required</sup> <a name="transformationRules" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.transformationRules"></a>

```java
public java.lang.String getTransformationRules();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DmsMigrationProjectConfig <a name="DmsMigrationProjectConfig" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_migration_project.DmsMigrationProjectConfig;

DmsMigrationProjectConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .instanceProfileArn(java.lang.String)
//  .instanceProfileIdentifier(java.lang.String)
//  .instanceProfileName(java.lang.String)
//  .migrationProjectCreationTime(java.lang.String)
//  .migrationProjectIdentifier(java.lang.String)
//  .migrationProjectName(java.lang.String)
//  .schemaConversionApplicationAttributes(DmsMigrationProjectSchemaConversionApplicationAttributes)
//  .sourceDataProviderDescriptors(IResolvable|java.util.List<DmsMigrationProjectSourceDataProviderDescriptors>)
//  .tags(IResolvable|java.util.List<DmsMigrationProjectTags>)
//  .targetDataProviderDescriptors(IResolvable|java.util.List<DmsMigrationProjectTargetDataProviderDescriptors>)
//  .transformationRules(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.description">description</a></code> | <code>java.lang.String</code> | The optional description of the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | The property describes an instance profile arn for the migration project. For read. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileIdentifier">instanceProfileIdentifier</a></code> | <code>java.lang.String</code> | The property describes an instance profile identifier for the migration project. For create. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileName">instanceProfileName</a></code> | <code>java.lang.String</code> | The property describes an instance profile name for the migration project. For read. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectCreationTime">migrationProjectCreationTime</a></code> | <code>java.lang.String</code> | The property describes a creating time of the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectIdentifier">migrationProjectIdentifier</a></code> | <code>java.lang.String</code> | The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectName">migrationProjectName</a></code> | <code>java.lang.String</code> | The property describes a name to identify the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.schemaConversionApplicationAttributes">schemaConversionApplicationAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | The property describes schema conversion application attributes for the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.sourceDataProviderDescriptors">sourceDataProviderDescriptors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>></code> | The property describes source data provider descriptors for the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.targetDataProviderDescriptors">targetDataProviderDescriptors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>></code> | The property describes target data provider descriptors for the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.transformationRules">transformationRules</a></code> | <code>java.lang.String</code> | The property describes transformation rules for the migration project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The optional description of the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

The property describes an instance profile arn for the migration project. For read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}

---

##### `instanceProfileIdentifier`<sup>Optional</sup> <a name="instanceProfileIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileIdentifier"></a>

```java
public java.lang.String getInstanceProfileIdentifier();
```

- *Type:* java.lang.String

The property describes an instance profile identifier for the migration project. For create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#instance_profile_identifier DmsMigrationProject#instance_profile_identifier}

---

##### `instanceProfileName`<sup>Optional</sup> <a name="instanceProfileName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileName"></a>

```java
public java.lang.String getInstanceProfileName();
```

- *Type:* java.lang.String

The property describes an instance profile name for the migration project. For read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#instance_profile_name DmsMigrationProject#instance_profile_name}

---

##### `migrationProjectCreationTime`<sup>Optional</sup> <a name="migrationProjectCreationTime" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectCreationTime"></a>

```java
public java.lang.String getMigrationProjectCreationTime();
```

- *Type:* java.lang.String

The property describes a creating time of the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#migration_project_creation_time DmsMigrationProject#migration_project_creation_time}

---

##### `migrationProjectIdentifier`<sup>Optional</sup> <a name="migrationProjectIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectIdentifier"></a>

```java
public java.lang.String getMigrationProjectIdentifier();
```

- *Type:* java.lang.String

The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#migration_project_identifier DmsMigrationProject#migration_project_identifier}

---

##### `migrationProjectName`<sup>Optional</sup> <a name="migrationProjectName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectName"></a>

```java
public java.lang.String getMigrationProjectName();
```

- *Type:* java.lang.String

The property describes a name to identify the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#migration_project_name DmsMigrationProject#migration_project_name}

---

##### `schemaConversionApplicationAttributes`<sup>Optional</sup> <a name="schemaConversionApplicationAttributes" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.schemaConversionApplicationAttributes"></a>

```java
public DmsMigrationProjectSchemaConversionApplicationAttributes getSchemaConversionApplicationAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>

The property describes schema conversion application attributes for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#schema_conversion_application_attributes DmsMigrationProject#schema_conversion_application_attributes}

---

##### `sourceDataProviderDescriptors`<sup>Optional</sup> <a name="sourceDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.sourceDataProviderDescriptors"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectSourceDataProviderDescriptors> getSourceDataProviderDescriptors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>>

The property describes source data provider descriptors for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#source_data_provider_descriptors DmsMigrationProject#source_data_provider_descriptors}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}

---

##### `targetDataProviderDescriptors`<sup>Optional</sup> <a name="targetDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.targetDataProviderDescriptors"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectTargetDataProviderDescriptors> getTargetDataProviderDescriptors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>>

The property describes target data provider descriptors for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#target_data_provider_descriptors DmsMigrationProject#target_data_provider_descriptors}

---

##### `transformationRules`<sup>Optional</sup> <a name="transformationRules" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.transformationRules"></a>

```java
public java.lang.String getTransformationRules();
```

- *Type:* java.lang.String

The property describes transformation rules for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}

---

### DmsMigrationProjectSchemaConversionApplicationAttributes <a name="DmsMigrationProjectSchemaConversionApplicationAttributes" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_migration_project.DmsMigrationProjectSchemaConversionApplicationAttributes;

DmsMigrationProjectSchemaConversionApplicationAttributes.builder()
//  .s3BucketPath(java.lang.String)
//  .s3BucketRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketPath">s3BucketPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#s3_bucket_path DmsMigrationProject#s3_bucket_path}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketRoleArn">s3BucketRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#s3_bucket_role_arn DmsMigrationProject#s3_bucket_role_arn}. |

---

##### `s3BucketPath`<sup>Optional</sup> <a name="s3BucketPath" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketPath"></a>

```java
public java.lang.String getS3BucketPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#s3_bucket_path DmsMigrationProject#s3_bucket_path}.

---

##### `s3BucketRoleArn`<sup>Optional</sup> <a name="s3BucketRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketRoleArn"></a>

```java
public java.lang.String getS3BucketRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#s3_bucket_role_arn DmsMigrationProject#s3_bucket_role_arn}.

---

### DmsMigrationProjectSourceDataProviderDescriptors <a name="DmsMigrationProjectSourceDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_migration_project.DmsMigrationProjectSourceDataProviderDescriptors;

DmsMigrationProjectSourceDataProviderDescriptors.builder()
//  .dataProviderArn(java.lang.String)
//  .dataProviderIdentifier(java.lang.String)
//  .dataProviderName(java.lang.String)
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderArn">dataProviderArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderIdentifier">dataProviderIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_identifier DmsMigrationProject#data_provider_identifier}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderName">dataProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_name DmsMigrationProject#data_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}. |

---

##### `dataProviderArn`<sup>Optional</sup> <a name="dataProviderArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderArn"></a>

```java
public java.lang.String getDataProviderArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}.

---

##### `dataProviderIdentifier`<sup>Optional</sup> <a name="dataProviderIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderIdentifier"></a>

```java
public java.lang.String getDataProviderIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_identifier DmsMigrationProject#data_provider_identifier}.

---

##### `dataProviderName`<sup>Optional</sup> <a name="dataProviderName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderName"></a>

```java
public java.lang.String getDataProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_name DmsMigrationProject#data_provider_name}.

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}.

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}.

---

### DmsMigrationProjectTags <a name="DmsMigrationProjectTags" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_migration_project.DmsMigrationProjectTags;

DmsMigrationProjectTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, , and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#key DmsMigrationProject#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, , and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#value DmsMigrationProject#value}

---

### DmsMigrationProjectTargetDataProviderDescriptors <a name="DmsMigrationProjectTargetDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_migration_project.DmsMigrationProjectTargetDataProviderDescriptors;

DmsMigrationProjectTargetDataProviderDescriptors.builder()
//  .dataProviderArn(java.lang.String)
//  .dataProviderIdentifier(java.lang.String)
//  .dataProviderName(java.lang.String)
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderArn">dataProviderArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderIdentifier">dataProviderIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_identifier DmsMigrationProject#data_provider_identifier}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderName">dataProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_name DmsMigrationProject#data_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}. |

---

##### `dataProviderArn`<sup>Optional</sup> <a name="dataProviderArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderArn"></a>

```java
public java.lang.String getDataProviderArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}.

---

##### `dataProviderIdentifier`<sup>Optional</sup> <a name="dataProviderIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderIdentifier"></a>

```java
public java.lang.String getDataProviderIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_identifier DmsMigrationProject#data_provider_identifier}.

---

##### `dataProviderName`<sup>Optional</sup> <a name="dataProviderName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderName"></a>

```java
public java.lang.String getDataProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_name DmsMigrationProject#data_provider_name}.

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}.

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference <a name="DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_migration_project.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference;

new DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketPath">resetS3BucketPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketRoleArn">resetS3BucketRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3BucketPath` <a name="resetS3BucketPath" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketPath"></a>

```java
public void resetS3BucketPath()
```

##### `resetS3BucketRoleArn` <a name="resetS3BucketRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketRoleArn"></a>

```java
public void resetS3BucketRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPathInput">s3BucketPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArnInput">s3BucketRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath">s3BucketPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn">s3BucketRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketPathInput`<sup>Optional</sup> <a name="s3BucketPathInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPathInput"></a>

```java
public java.lang.String getS3BucketPathInput();
```

- *Type:* java.lang.String

---

##### `s3BucketRoleArnInput`<sup>Optional</sup> <a name="s3BucketRoleArnInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArnInput"></a>

```java
public java.lang.String getS3BucketRoleArnInput();
```

- *Type:* java.lang.String

---

##### `s3BucketPath`<sup>Required</sup> <a name="s3BucketPath" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath"></a>

```java
public java.lang.String getS3BucketPath();
```

- *Type:* java.lang.String

---

##### `s3BucketRoleArn`<sup>Required</sup> <a name="s3BucketRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn"></a>

```java
public java.lang.String getS3BucketRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsMigrationProjectSchemaConversionApplicationAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>

---


### DmsMigrationProjectSourceDataProviderDescriptorsList <a name="DmsMigrationProjectSourceDataProviderDescriptorsList" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_migration_project.DmsMigrationProjectSourceDataProviderDescriptorsList;

new DmsMigrationProjectSourceDataProviderDescriptorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.get"></a>

```java
public DmsMigrationProjectSourceDataProviderDescriptorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectSourceDataProviderDescriptors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>>

---


### DmsMigrationProjectSourceDataProviderDescriptorsOutputReference <a name="DmsMigrationProjectSourceDataProviderDescriptorsOutputReference" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_migration_project.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference;

new DmsMigrationProjectSourceDataProviderDescriptorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderArn">resetDataProviderArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderIdentifier">resetDataProviderIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderName">resetDataProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataProviderArn` <a name="resetDataProviderArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderArn"></a>

```java
public void resetDataProviderArn()
```

##### `resetDataProviderIdentifier` <a name="resetDataProviderIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderIdentifier"></a>

```java
public void resetDataProviderIdentifier()
```

##### `resetDataProviderName` <a name="resetDataProviderName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderName"></a>

```java
public void resetDataProviderName()
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```java
public void resetSecretsManagerAccessRoleArn()
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetSecretsManagerSecretId"></a>

```java
public void resetSecretsManagerSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArnInput">dataProviderArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifierInput">dataProviderIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderNameInput">dataProviderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArn">dataProviderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifier">dataProviderIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderName">dataProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataProviderArnInput`<sup>Optional</sup> <a name="dataProviderArnInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArnInput"></a>

```java
public java.lang.String getDataProviderArnInput();
```

- *Type:* java.lang.String

---

##### `dataProviderIdentifierInput`<sup>Optional</sup> <a name="dataProviderIdentifierInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifierInput"></a>

```java
public java.lang.String getDataProviderIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dataProviderNameInput`<sup>Optional</sup> <a name="dataProviderNameInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderNameInput"></a>

```java
public java.lang.String getDataProviderNameInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerSecretIdInput();
```

- *Type:* java.lang.String

---

##### `dataProviderArn`<sup>Required</sup> <a name="dataProviderArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArn"></a>

```java
public java.lang.String getDataProviderArn();
```

- *Type:* java.lang.String

---

##### `dataProviderIdentifier`<sup>Required</sup> <a name="dataProviderIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifier"></a>

```java
public java.lang.String getDataProviderIdentifier();
```

- *Type:* java.lang.String

---

##### `dataProviderName`<sup>Required</sup> <a name="dataProviderName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderName"></a>

```java
public java.lang.String getDataProviderName();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsMigrationProjectSourceDataProviderDescriptors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>

---


### DmsMigrationProjectTagsList <a name="DmsMigrationProjectTagsList" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_migration_project.DmsMigrationProjectTagsList;

new DmsMigrationProjectTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.get"></a>

```java
public DmsMigrationProjectTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>>

---


### DmsMigrationProjectTagsOutputReference <a name="DmsMigrationProjectTagsOutputReference" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_migration_project.DmsMigrationProjectTagsOutputReference;

new DmsMigrationProjectTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsMigrationProjectTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>

---


### DmsMigrationProjectTargetDataProviderDescriptorsList <a name="DmsMigrationProjectTargetDataProviderDescriptorsList" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_migration_project.DmsMigrationProjectTargetDataProviderDescriptorsList;

new DmsMigrationProjectTargetDataProviderDescriptorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.get"></a>

```java
public DmsMigrationProjectTargetDataProviderDescriptorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectTargetDataProviderDescriptors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>>

---


### DmsMigrationProjectTargetDataProviderDescriptorsOutputReference <a name="DmsMigrationProjectTargetDataProviderDescriptorsOutputReference" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_migration_project.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference;

new DmsMigrationProjectTargetDataProviderDescriptorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderArn">resetDataProviderArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderIdentifier">resetDataProviderIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderName">resetDataProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataProviderArn` <a name="resetDataProviderArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderArn"></a>

```java
public void resetDataProviderArn()
```

##### `resetDataProviderIdentifier` <a name="resetDataProviderIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderIdentifier"></a>

```java
public void resetDataProviderIdentifier()
```

##### `resetDataProviderName` <a name="resetDataProviderName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderName"></a>

```java
public void resetDataProviderName()
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```java
public void resetSecretsManagerAccessRoleArn()
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetSecretsManagerSecretId"></a>

```java
public void resetSecretsManagerSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArnInput">dataProviderArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifierInput">dataProviderIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderNameInput">dataProviderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArn">dataProviderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifier">dataProviderIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderName">dataProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataProviderArnInput`<sup>Optional</sup> <a name="dataProviderArnInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArnInput"></a>

```java
public java.lang.String getDataProviderArnInput();
```

- *Type:* java.lang.String

---

##### `dataProviderIdentifierInput`<sup>Optional</sup> <a name="dataProviderIdentifierInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifierInput"></a>

```java
public java.lang.String getDataProviderIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dataProviderNameInput`<sup>Optional</sup> <a name="dataProviderNameInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderNameInput"></a>

```java
public java.lang.String getDataProviderNameInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerSecretIdInput();
```

- *Type:* java.lang.String

---

##### `dataProviderArn`<sup>Required</sup> <a name="dataProviderArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArn"></a>

```java
public java.lang.String getDataProviderArn();
```

- *Type:* java.lang.String

---

##### `dataProviderIdentifier`<sup>Required</sup> <a name="dataProviderIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifier"></a>

```java
public java.lang.String getDataProviderIdentifier();
```

- *Type:* java.lang.String

---

##### `dataProviderName`<sup>Required</sup> <a name="dataProviderName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderName"></a>

```java
public java.lang.String getDataProviderName();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsMigrationProjectTargetDataProviderDescriptors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>

---



