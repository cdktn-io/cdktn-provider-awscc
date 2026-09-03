# `qbusinessDataSource` Submodule <a name="`qbusinessDataSource` Submodule" id="@cdktn/provider-awscc.qbusinessDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QbusinessDataSource <a name="QbusinessDataSource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source awscc_qbusiness_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSource;

QbusinessDataSource.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .configuration(java.lang.String)
    .displayName(java.lang.String)
    .indexId(java.lang.String)
//  .description(java.lang.String)
//  .documentEnrichmentConfiguration(QbusinessDataSourceDocumentEnrichmentConfiguration)
//  .mediaExtractionConfiguration(QbusinessDataSourceMediaExtractionConfiguration)
//  .roleArn(java.lang.String)
//  .syncSchedule(java.lang.String)
//  .tags(IResolvable|java.util.List<QbusinessDataSourceTags>)
//  .vpcConfiguration(QbusinessDataSourceVpcConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#application_id QbusinessDataSource#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.configuration">configuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#configuration QbusinessDataSource#configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#display_name QbusinessDataSource#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.indexId">indexId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#index_id QbusinessDataSource#index_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#description QbusinessDataSource#description}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.documentEnrichmentConfiguration">documentEnrichmentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#document_enrichment_configuration QbusinessDataSource#document_enrichment_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.mediaExtractionConfiguration">mediaExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#media_extraction_configuration QbusinessDataSource#media_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.syncSchedule">syncSchedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#sync_schedule QbusinessDataSource#sync_schedule}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#tags QbusinessDataSource#tags}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#vpc_configuration QbusinessDataSource#vpc_configuration}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#application_id QbusinessDataSource#application_id}.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.configuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#configuration QbusinessDataSource#configuration}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#display_name QbusinessDataSource#display_name}.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.indexId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#index_id QbusinessDataSource#index_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#description QbusinessDataSource#description}.

---

##### `documentEnrichmentConfiguration`<sup>Optional</sup> <a name="documentEnrichmentConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.documentEnrichmentConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#document_enrichment_configuration QbusinessDataSource#document_enrichment_configuration}.

---

##### `mediaExtractionConfiguration`<sup>Optional</sup> <a name="mediaExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.mediaExtractionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#media_extraction_configuration QbusinessDataSource#media_extraction_configuration}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}.

---

##### `syncSchedule`<sup>Optional</sup> <a name="syncSchedule" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.syncSchedule"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#sync_schedule QbusinessDataSource#sync_schedule}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#tags QbusinessDataSource#tags}.

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#vpc_configuration QbusinessDataSource#vpc_configuration}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putDocumentEnrichmentConfiguration">putDocumentEnrichmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putMediaExtractionConfiguration">putMediaExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putVpcConfiguration">putVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetDocumentEnrichmentConfiguration">resetDocumentEnrichmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetMediaExtractionConfiguration">resetMediaExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetSyncSchedule">resetSyncSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetVpcConfiguration">resetVpcConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDocumentEnrichmentConfiguration` <a name="putDocumentEnrichmentConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putDocumentEnrichmentConfiguration"></a>

```java
public void putDocumentEnrichmentConfiguration(QbusinessDataSourceDocumentEnrichmentConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putDocumentEnrichmentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a>

---

##### `putMediaExtractionConfiguration` <a name="putMediaExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putMediaExtractionConfiguration"></a>

```java
public void putMediaExtractionConfiguration(QbusinessDataSourceMediaExtractionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putMediaExtractionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<QbusinessDataSourceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>>

---

##### `putVpcConfiguration` <a name="putVpcConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putVpcConfiguration"></a>

```java
public void putVpcConfiguration(QbusinessDataSourceVpcConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDocumentEnrichmentConfiguration` <a name="resetDocumentEnrichmentConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetDocumentEnrichmentConfiguration"></a>

```java
public void resetDocumentEnrichmentConfiguration()
```

##### `resetMediaExtractionConfiguration` <a name="resetMediaExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetMediaExtractionConfiguration"></a>

```java
public void resetMediaExtractionConfiguration()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetSyncSchedule` <a name="resetSyncSchedule" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetSyncSchedule"></a>

```java
public void resetSyncSchedule()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetTags"></a>

```java
public void resetTags()
```

##### `resetVpcConfiguration` <a name="resetVpcConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetVpcConfiguration"></a>

```java
public void resetVpcConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QbusinessDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isConstruct"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSource;

QbusinessDataSource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSource;

QbusinessDataSource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSource;

QbusinessDataSource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSource;

QbusinessDataSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QbusinessDataSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a QbusinessDataSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QbusinessDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QbusinessDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the QbusinessDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dataSourceArn">dataSourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.documentEnrichmentConfiguration">documentEnrichmentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.mediaExtractionConfiguration">mediaExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList">QbusinessDataSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference">QbusinessDataSourceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.configurationInput">configurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.documentEnrichmentConfigurationInput">documentEnrichmentConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.indexIdInput">indexIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.mediaExtractionConfigurationInput">mediaExtractionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.syncScheduleInput">syncScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.vpcConfigurationInput">vpcConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.configuration">configuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.indexId">indexId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.syncSchedule">syncSchedule</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dataSourceArn"></a>

```java
public java.lang.String getDataSourceArn();
```

- *Type:* java.lang.String

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `documentEnrichmentConfiguration`<sup>Required</sup> <a name="documentEnrichmentConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.documentEnrichmentConfiguration"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference getDocumentEnrichmentConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mediaExtractionConfiguration`<sup>Required</sup> <a name="mediaExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.mediaExtractionConfiguration"></a>

```java
public QbusinessDataSourceMediaExtractionConfigurationOutputReference getMediaExtractionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tags"></a>

```java
public QbusinessDataSourceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList">QbusinessDataSourceTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.vpcConfiguration"></a>

```java
public QbusinessDataSourceVpcConfigurationOutputReference getVpcConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference">QbusinessDataSourceVpcConfigurationOutputReference</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.configurationInput"></a>

```java
public java.lang.String getConfigurationInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `documentEnrichmentConfigurationInput`<sup>Optional</sup> <a name="documentEnrichmentConfigurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.documentEnrichmentConfigurationInput"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfiguration getDocumentEnrichmentConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a>

---

##### `indexIdInput`<sup>Optional</sup> <a name="indexIdInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.indexIdInput"></a>

```java
public java.lang.String getIndexIdInput();
```

- *Type:* java.lang.String

---

##### `mediaExtractionConfigurationInput`<sup>Optional</sup> <a name="mediaExtractionConfigurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.mediaExtractionConfigurationInput"></a>

```java
public IResolvable|QbusinessDataSourceMediaExtractionConfiguration getMediaExtractionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `syncScheduleInput`<sup>Optional</sup> <a name="syncScheduleInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.syncScheduleInput"></a>

```java
public java.lang.String getSyncScheduleInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tagsInput"></a>

```java
public IResolvable|java.util.List<QbusinessDataSourceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>>

---

##### `vpcConfigurationInput`<sup>Optional</sup> <a name="vpcConfigurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.vpcConfigurationInput"></a>

```java
public IResolvable|QbusinessDataSourceVpcConfiguration getVpcConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.indexId"></a>

```java
public java.lang.String getIndexId();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `syncSchedule`<sup>Required</sup> <a name="syncSchedule" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.syncSchedule"></a>

```java
public java.lang.String getSyncSchedule();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QbusinessDataSourceConfig <a name="QbusinessDataSourceConfig" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceConfig;

QbusinessDataSourceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .configuration(java.lang.String)
    .displayName(java.lang.String)
    .indexId(java.lang.String)
//  .description(java.lang.String)
//  .documentEnrichmentConfiguration(QbusinessDataSourceDocumentEnrichmentConfiguration)
//  .mediaExtractionConfiguration(QbusinessDataSourceMediaExtractionConfiguration)
//  .roleArn(java.lang.String)
//  .syncSchedule(java.lang.String)
//  .tags(IResolvable|java.util.List<QbusinessDataSourceTags>)
//  .vpcConfiguration(QbusinessDataSourceVpcConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#application_id QbusinessDataSource#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.configuration">configuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#configuration QbusinessDataSource#configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#display_name QbusinessDataSource#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.indexId">indexId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#index_id QbusinessDataSource#index_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#description QbusinessDataSource#description}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.documentEnrichmentConfiguration">documentEnrichmentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#document_enrichment_configuration QbusinessDataSource#document_enrichment_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.mediaExtractionConfiguration">mediaExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#media_extraction_configuration QbusinessDataSource#media_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.syncSchedule">syncSchedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#sync_schedule QbusinessDataSource#sync_schedule}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#tags QbusinessDataSource#tags}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#vpc_configuration QbusinessDataSource#vpc_configuration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#application_id QbusinessDataSource#application_id}.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#configuration QbusinessDataSource#configuration}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#display_name QbusinessDataSource#display_name}.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.indexId"></a>

```java
public java.lang.String getIndexId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#index_id QbusinessDataSource#index_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#description QbusinessDataSource#description}.

---

##### `documentEnrichmentConfiguration`<sup>Optional</sup> <a name="documentEnrichmentConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.documentEnrichmentConfiguration"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfiguration getDocumentEnrichmentConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#document_enrichment_configuration QbusinessDataSource#document_enrichment_configuration}.

---

##### `mediaExtractionConfiguration`<sup>Optional</sup> <a name="mediaExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.mediaExtractionConfiguration"></a>

```java
public QbusinessDataSourceMediaExtractionConfiguration getMediaExtractionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#media_extraction_configuration QbusinessDataSource#media_extraction_configuration}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}.

---

##### `syncSchedule`<sup>Optional</sup> <a name="syncSchedule" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.syncSchedule"></a>

```java
public java.lang.String getSyncSchedule();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#sync_schedule QbusinessDataSource#sync_schedule}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<QbusinessDataSourceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#tags QbusinessDataSource#tags}.

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.vpcConfiguration"></a>

```java
public QbusinessDataSourceVpcConfiguration getVpcConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#vpc_configuration QbusinessDataSource#vpc_configuration}.

---

### QbusinessDataSourceDocumentEnrichmentConfiguration <a name="QbusinessDataSourceDocumentEnrichmentConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfiguration;

QbusinessDataSourceDocumentEnrichmentConfiguration.builder()
//  .inlineConfigurations(IResolvable|java.util.List<QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations>)
//  .postExtractionHookConfiguration(QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration)
//  .preExtractionHookConfiguration(QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.inlineConfigurations">inlineConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#inline_configurations QbusinessDataSource#inline_configurations}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.postExtractionHookConfiguration">postExtractionHookConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#post_extraction_hook_configuration QbusinessDataSource#post_extraction_hook_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.preExtractionHookConfiguration">preExtractionHookConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#pre_extraction_hook_configuration QbusinessDataSource#pre_extraction_hook_configuration}. |

---

##### `inlineConfigurations`<sup>Optional</sup> <a name="inlineConfigurations" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.inlineConfigurations"></a>

```java
public IResolvable|java.util.List<QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations> getInlineConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#inline_configurations QbusinessDataSource#inline_configurations}.

---

##### `postExtractionHookConfiguration`<sup>Optional</sup> <a name="postExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.postExtractionHookConfiguration"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration getPostExtractionHookConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#post_extraction_hook_configuration QbusinessDataSource#post_extraction_hook_configuration}.

---

##### `preExtractionHookConfiguration`<sup>Optional</sup> <a name="preExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.preExtractionHookConfiguration"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration getPreExtractionHookConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#pre_extraction_hook_configuration QbusinessDataSource#pre_extraction_hook_configuration}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations;

QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.builder()
//  .condition(QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition)
//  .documentContentOperator(java.lang.String)
//  .target(QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#condition QbusinessDataSource#condition}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.documentContentOperator">documentContentOperator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#document_content_operator QbusinessDataSource#document_content_operator}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#target QbusinessDataSource#target}. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.condition"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#condition QbusinessDataSource#condition}.

---

##### `documentContentOperator`<sup>Optional</sup> <a name="documentContentOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.documentContentOperator"></a>

```java
public java.lang.String getDocumentContentOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#document_content_operator QbusinessDataSource#document_content_operator}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.target"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget getTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#target QbusinessDataSource#target}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition;

QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.builder()
//  .key(java.lang.String)
//  .operator(java.lang.String)
//  .value(QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.value"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue;

QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.builder()
//  .dateValue(java.lang.String)
//  .longValue(java.lang.Number)
//  .stringListValue(java.util.List<java.lang.String>)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.dateValue">dateValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.longValue">longValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.stringListValue">stringListValue</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}. |

---

##### `dateValue`<sup>Optional</sup> <a name="dateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.dateValue"></a>

```java
public java.lang.String getDateValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}.

---

##### `longValue`<sup>Optional</sup> <a name="longValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.longValue"></a>

```java
public java.lang.Number getLongValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}.

---

##### `stringListValue`<sup>Optional</sup> <a name="stringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.stringListValue"></a>

```java
public java.util.List<java.lang.String> getStringListValue();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget;

QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.builder()
//  .attributeValueOperator(java.lang.String)
//  .key(java.lang.String)
//  .value(QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.attributeValueOperator">attributeValueOperator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#attribute_value_operator QbusinessDataSource#attribute_value_operator}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}. |

---

##### `attributeValueOperator`<sup>Optional</sup> <a name="attributeValueOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.attributeValueOperator"></a>

```java
public java.lang.String getAttributeValueOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#attribute_value_operator QbusinessDataSource#attribute_value_operator}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.value"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue;

QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.builder()
//  .dateValue(java.lang.String)
//  .longValue(java.lang.Number)
//  .stringListValue(java.util.List<java.lang.String>)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.dateValue">dateValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.longValue">longValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.stringListValue">stringListValue</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}. |

---

##### `dateValue`<sup>Optional</sup> <a name="dateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.dateValue"></a>

```java
public java.lang.String getDateValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}.

---

##### `longValue`<sup>Optional</sup> <a name="longValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.longValue"></a>

```java
public java.lang.Number getLongValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}.

---

##### `stringListValue`<sup>Optional</sup> <a name="stringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.stringListValue"></a>

```java
public java.util.List<java.lang.String> getStringListValue();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration;

QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.builder()
//  .invocationCondition(QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition)
//  .lambdaArn(java.lang.String)
//  .roleArn(java.lang.String)
//  .s3BucketName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.invocationCondition">invocationCondition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#invocation_condition QbusinessDataSource#invocation_condition}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#lambda_arn QbusinessDataSource#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#s3_bucket_name QbusinessDataSource#s3_bucket_name}. |

---

##### `invocationCondition`<sup>Optional</sup> <a name="invocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.invocationCondition"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition getInvocationCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#invocation_condition QbusinessDataSource#invocation_condition}.

---

##### `lambdaArn`<sup>Optional</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#lambda_arn QbusinessDataSource#lambda_arn}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}.

---

##### `s3BucketName`<sup>Optional</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#s3_bucket_name QbusinessDataSource#s3_bucket_name}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition;

QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.builder()
//  .key(java.lang.String)
//  .operator(java.lang.String)
//  .value(QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.value"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue;

QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.builder()
//  .dateValue(java.lang.String)
//  .longValue(java.lang.Number)
//  .stringListValue(java.util.List<java.lang.String>)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.dateValue">dateValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.longValue">longValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.stringListValue">stringListValue</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}. |

---

##### `dateValue`<sup>Optional</sup> <a name="dateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.dateValue"></a>

```java
public java.lang.String getDateValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}.

---

##### `longValue`<sup>Optional</sup> <a name="longValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.longValue"></a>

```java
public java.lang.Number getLongValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}.

---

##### `stringListValue`<sup>Optional</sup> <a name="stringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.stringListValue"></a>

```java
public java.util.List<java.lang.String> getStringListValue();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration;

QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.builder()
//  .invocationCondition(QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition)
//  .lambdaArn(java.lang.String)
//  .roleArn(java.lang.String)
//  .s3BucketName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.invocationCondition">invocationCondition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#invocation_condition QbusinessDataSource#invocation_condition}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#lambda_arn QbusinessDataSource#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#s3_bucket_name QbusinessDataSource#s3_bucket_name}. |

---

##### `invocationCondition`<sup>Optional</sup> <a name="invocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.invocationCondition"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition getInvocationCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#invocation_condition QbusinessDataSource#invocation_condition}.

---

##### `lambdaArn`<sup>Optional</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#lambda_arn QbusinessDataSource#lambda_arn}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}.

---

##### `s3BucketName`<sup>Optional</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#s3_bucket_name QbusinessDataSource#s3_bucket_name}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition;

QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.builder()
//  .key(java.lang.String)
//  .operator(java.lang.String)
//  .value(QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.value"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue;

QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.builder()
//  .dateValue(java.lang.String)
//  .longValue(java.lang.Number)
//  .stringListValue(java.util.List<java.lang.String>)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.dateValue">dateValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.longValue">longValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.stringListValue">stringListValue</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}. |

---

##### `dateValue`<sup>Optional</sup> <a name="dateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.dateValue"></a>

```java
public java.lang.String getDateValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}.

---

##### `longValue`<sup>Optional</sup> <a name="longValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.longValue"></a>

```java
public java.lang.Number getLongValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}.

---

##### `stringListValue`<sup>Optional</sup> <a name="stringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.stringListValue"></a>

```java
public java.util.List<java.lang.String> getStringListValue();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}.

---

### QbusinessDataSourceMediaExtractionConfiguration <a name="QbusinessDataSourceMediaExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceMediaExtractionConfiguration;

QbusinessDataSourceMediaExtractionConfiguration.builder()
//  .audioExtractionConfiguration(QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration)
//  .imageExtractionConfiguration(QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration)
//  .videoExtractionConfiguration(QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.audioExtractionConfiguration">audioExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#audio_extraction_configuration QbusinessDataSource#audio_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.imageExtractionConfiguration">imageExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#image_extraction_configuration QbusinessDataSource#image_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.videoExtractionConfiguration">videoExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#video_extraction_configuration QbusinessDataSource#video_extraction_configuration}. |

---

##### `audioExtractionConfiguration`<sup>Optional</sup> <a name="audioExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.audioExtractionConfiguration"></a>

```java
public QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration getAudioExtractionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#audio_extraction_configuration QbusinessDataSource#audio_extraction_configuration}.

---

##### `imageExtractionConfiguration`<sup>Optional</sup> <a name="imageExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.imageExtractionConfiguration"></a>

```java
public QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration getImageExtractionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#image_extraction_configuration QbusinessDataSource#image_extraction_configuration}.

---

##### `videoExtractionConfiguration`<sup>Optional</sup> <a name="videoExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.videoExtractionConfiguration"></a>

```java
public QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration getVideoExtractionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#video_extraction_configuration QbusinessDataSource#video_extraction_configuration}.

---

### QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration <a name="QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration;

QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration.builder()
//  .audioExtractionStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration.property.audioExtractionStatus">audioExtractionStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#audio_extraction_status QbusinessDataSource#audio_extraction_status}. |

---

##### `audioExtractionStatus`<sup>Optional</sup> <a name="audioExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration.property.audioExtractionStatus"></a>

```java
public java.lang.String getAudioExtractionStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#audio_extraction_status QbusinessDataSource#audio_extraction_status}.

---

### QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration <a name="QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration;

QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration.builder()
//  .imageExtractionStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration.property.imageExtractionStatus">imageExtractionStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#image_extraction_status QbusinessDataSource#image_extraction_status}. |

---

##### `imageExtractionStatus`<sup>Optional</sup> <a name="imageExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration.property.imageExtractionStatus"></a>

```java
public java.lang.String getImageExtractionStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#image_extraction_status QbusinessDataSource#image_extraction_status}.

---

### QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration <a name="QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration;

QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration.builder()
//  .videoExtractionStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionStatus">videoExtractionStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#video_extraction_status QbusinessDataSource#video_extraction_status}. |

---

##### `videoExtractionStatus`<sup>Optional</sup> <a name="videoExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionStatus"></a>

```java
public java.lang.String getVideoExtractionStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#video_extraction_status QbusinessDataSource#video_extraction_status}.

---

### QbusinessDataSourceTags <a name="QbusinessDataSourceTags" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceTags;

QbusinessDataSourceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

### QbusinessDataSourceVpcConfiguration <a name="QbusinessDataSourceVpcConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceVpcConfiguration;

QbusinessDataSourceVpcConfiguration.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#security_group_ids QbusinessDataSource#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#subnet_ids QbusinessDataSource#subnet_ids}. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#security_group_ids QbusinessDataSource#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#subnet_ids QbusinessDataSource#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference;

new QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putValue"></a>

```java
public void putValue(QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a>

---

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.valueInput">valueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.value"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.valueInput"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue getValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference;

new QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetDateValue">resetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetLongValue">resetLongValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetStringListValue">resetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDateValue` <a name="resetDateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetDateValue"></a>

```java
public void resetDateValue()
```

##### `resetLongValue` <a name="resetLongValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetLongValue"></a>

```java
public void resetLongValue()
```

##### `resetStringListValue` <a name="resetStringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetStringListValue"></a>

```java
public void resetStringListValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.dateValueInput">dateValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.longValueInput">longValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringListValueInput">stringListValueInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.dateValue">dateValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.longValue">longValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringListValue">stringListValue</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateValueInput`<sup>Optional</sup> <a name="dateValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.dateValueInput"></a>

```java
public java.lang.String getDateValueInput();
```

- *Type:* java.lang.String

---

##### `longValueInput`<sup>Optional</sup> <a name="longValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.longValueInput"></a>

```java
public java.lang.Number getLongValueInput();
```

- *Type:* java.lang.Number

---

##### `stringListValueInput`<sup>Optional</sup> <a name="stringListValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringListValueInput"></a>

```java
public java.util.List<java.lang.String> getStringListValueInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `dateValue`<sup>Required</sup> <a name="dateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.dateValue"></a>

```java
public java.lang.String getDateValue();
```

- *Type:* java.lang.String

---

##### `longValue`<sup>Required</sup> <a name="longValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.longValue"></a>

```java
public java.lang.Number getLongValue();
```

- *Type:* java.lang.Number

---

##### `stringListValue`<sup>Required</sup> <a name="stringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringListValue"></a>

```java
public java.util.List<java.lang.String> getStringListValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList;

new QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.get"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference;

new QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetDocumentContentOperator">resetDocumentContentOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition"></a>

```java
public void putCondition(QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

---

##### `putTarget` <a name="putTarget" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget"></a>

```java
public void putTarget(QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDocumentContentOperator` <a name="resetDocumentContentOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetDocumentContentOperator"></a>

```java
public void resetDocumentContentOperator()
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.conditionInput">conditionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentOperatorInput">documentContentOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.targetInput">targetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentOperator">documentContentOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.condition"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.target"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.conditionInput"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition getConditionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

---

##### `documentContentOperatorInput`<sup>Optional</sup> <a name="documentContentOperatorInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentOperatorInput"></a>

```java
public java.lang.String getDocumentContentOperatorInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.targetInput"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget getTargetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

---

##### `documentContentOperator`<sup>Required</sup> <a name="documentContentOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentOperator"></a>

```java
public java.lang.String getDocumentContentOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference;

new QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetAttributeValueOperator">resetAttributeValueOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putValue"></a>

```java
public void putValue(QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a>

---

##### `resetAttributeValueOperator` <a name="resetAttributeValueOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetAttributeValueOperator"></a>

```java
public void resetAttributeValueOperator()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.attributeValueOperatorInput">attributeValueOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.valueInput">valueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.attributeValueOperator">attributeValueOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.value"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference</a>

---

##### `attributeValueOperatorInput`<sup>Optional</sup> <a name="attributeValueOperatorInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.attributeValueOperatorInput"></a>

```java
public java.lang.String getAttributeValueOperatorInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.valueInput"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue getValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a>

---

##### `attributeValueOperator`<sup>Required</sup> <a name="attributeValueOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.attributeValueOperator"></a>

```java
public java.lang.String getAttributeValueOperator();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference;

new QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetDateValue">resetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetLongValue">resetLongValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetStringListValue">resetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDateValue` <a name="resetDateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetDateValue"></a>

```java
public void resetDateValue()
```

##### `resetLongValue` <a name="resetLongValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetLongValue"></a>

```java
public void resetLongValue()
```

##### `resetStringListValue` <a name="resetStringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetStringListValue"></a>

```java
public void resetStringListValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.dateValueInput">dateValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.longValueInput">longValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringListValueInput">stringListValueInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.dateValue">dateValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.longValue">longValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringListValue">stringListValue</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateValueInput`<sup>Optional</sup> <a name="dateValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.dateValueInput"></a>

```java
public java.lang.String getDateValueInput();
```

- *Type:* java.lang.String

---

##### `longValueInput`<sup>Optional</sup> <a name="longValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.longValueInput"></a>

```java
public java.lang.Number getLongValueInput();
```

- *Type:* java.lang.Number

---

##### `stringListValueInput`<sup>Optional</sup> <a name="stringListValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringListValueInput"></a>

```java
public java.util.List<java.lang.String> getStringListValueInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `dateValue`<sup>Required</sup> <a name="dateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.dateValue"></a>

```java
public java.lang.String getDateValue();
```

- *Type:* java.lang.String

---

##### `longValue`<sup>Required</sup> <a name="longValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.longValue"></a>

```java
public java.lang.Number getLongValue();
```

- *Type:* java.lang.Number

---

##### `stringListValue`<sup>Required</sup> <a name="stringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringListValue"></a>

```java
public java.util.List<java.lang.String> getStringListValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference;

new QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putInlineConfigurations">putInlineConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration">putPostExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration">putPreExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetInlineConfigurations">resetInlineConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetPostExtractionHookConfiguration">resetPostExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetPreExtractionHookConfiguration">resetPreExtractionHookConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInlineConfigurations` <a name="putInlineConfigurations" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putInlineConfigurations"></a>

```java
public void putInlineConfigurations(IResolvable|java.util.List<QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putInlineConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>>

---

##### `putPostExtractionHookConfiguration` <a name="putPostExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration"></a>

```java
public void putPostExtractionHookConfiguration(QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

---

##### `putPreExtractionHookConfiguration` <a name="putPreExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration"></a>

```java
public void putPreExtractionHookConfiguration(QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

---

##### `resetInlineConfigurations` <a name="resetInlineConfigurations" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetInlineConfigurations"></a>

```java
public void resetInlineConfigurations()
```

##### `resetPostExtractionHookConfiguration` <a name="resetPostExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetPostExtractionHookConfiguration"></a>

```java
public void resetPostExtractionHookConfiguration()
```

##### `resetPreExtractionHookConfiguration` <a name="resetPreExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetPreExtractionHookConfiguration"></a>

```java
public void resetPreExtractionHookConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurations">inlineConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfiguration">postExtractionHookConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfiguration">preExtractionHookConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurationsInput">inlineConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfigurationInput">postExtractionHookConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfigurationInput">preExtractionHookConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inlineConfigurations`<sup>Required</sup> <a name="inlineConfigurations" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurations"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList getInlineConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList</a>

---

##### `postExtractionHookConfiguration`<sup>Required</sup> <a name="postExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfiguration"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference getPostExtractionHookConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference</a>

---

##### `preExtractionHookConfiguration`<sup>Required</sup> <a name="preExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfiguration"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference getPreExtractionHookConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference</a>

---

##### `inlineConfigurationsInput`<sup>Optional</sup> <a name="inlineConfigurationsInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurationsInput"></a>

```java
public IResolvable|java.util.List<QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations> getInlineConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>>

---

##### `postExtractionHookConfigurationInput`<sup>Optional</sup> <a name="postExtractionHookConfigurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfigurationInput"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration getPostExtractionHookConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

---

##### `preExtractionHookConfigurationInput`<sup>Optional</sup> <a name="preExtractionHookConfigurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfigurationInput"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration getPreExtractionHookConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference;

new QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putValue"></a>

```java
public void putValue(QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a>

---

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.valueInput">valueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.value"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.valueInput"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue getValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference;

new QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetDateValue">resetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetLongValue">resetLongValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringListValue">resetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDateValue` <a name="resetDateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetDateValue"></a>

```java
public void resetDateValue()
```

##### `resetLongValue` <a name="resetLongValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetLongValue"></a>

```java
public void resetLongValue()
```

##### `resetStringListValue` <a name="resetStringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringListValue"></a>

```java
public void resetStringListValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValueInput">dateValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValueInput">longValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValueInput">stringListValueInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue">dateValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue">longValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue">stringListValue</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateValueInput`<sup>Optional</sup> <a name="dateValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValueInput"></a>

```java
public java.lang.String getDateValueInput();
```

- *Type:* java.lang.String

---

##### `longValueInput`<sup>Optional</sup> <a name="longValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValueInput"></a>

```java
public java.lang.Number getLongValueInput();
```

- *Type:* java.lang.Number

---

##### `stringListValueInput`<sup>Optional</sup> <a name="stringListValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValueInput"></a>

```java
public java.util.List<java.lang.String> getStringListValueInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `dateValue`<sup>Required</sup> <a name="dateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue"></a>

```java
public java.lang.String getDateValue();
```

- *Type:* java.lang.String

---

##### `longValue`<sup>Required</sup> <a name="longValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue"></a>

```java
public java.lang.Number getLongValue();
```

- *Type:* java.lang.Number

---

##### `stringListValue`<sup>Required</sup> <a name="stringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue"></a>

```java
public java.util.List<java.lang.String> getStringListValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference;

new QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition">putInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetInvocationCondition">resetInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetLambdaArn">resetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetS3BucketName">resetS3BucketName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInvocationCondition` <a name="putInvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition"></a>

```java
public void putInvocationCondition(QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

---

##### `resetInvocationCondition` <a name="resetInvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetInvocationCondition"></a>

```java
public void resetInvocationCondition()
```

##### `resetLambdaArn` <a name="resetLambdaArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetLambdaArn"></a>

```java
public void resetLambdaArn()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetS3BucketName` <a name="resetS3BucketName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetS3BucketName"></a>

```java
public void resetS3BucketName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationCondition">invocationCondition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationConditionInput">invocationConditionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `invocationCondition`<sup>Required</sup> <a name="invocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationCondition"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference getInvocationCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference</a>

---

##### `invocationConditionInput`<sup>Optional</sup> <a name="invocationConditionInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationConditionInput"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition getInvocationConditionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArnInput"></a>

```java
public java.lang.String getLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference;

new QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putValue"></a>

```java
public void putValue(QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a>

---

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.valueInput">valueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.value"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.valueInput"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue getValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference;

new QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetDateValue">resetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetLongValue">resetLongValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringListValue">resetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDateValue` <a name="resetDateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetDateValue"></a>

```java
public void resetDateValue()
```

##### `resetLongValue` <a name="resetLongValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetLongValue"></a>

```java
public void resetLongValue()
```

##### `resetStringListValue` <a name="resetStringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringListValue"></a>

```java
public void resetStringListValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValueInput">dateValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValueInput">longValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValueInput">stringListValueInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue">dateValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue">longValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue">stringListValue</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateValueInput`<sup>Optional</sup> <a name="dateValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValueInput"></a>

```java
public java.lang.String getDateValueInput();
```

- *Type:* java.lang.String

---

##### `longValueInput`<sup>Optional</sup> <a name="longValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValueInput"></a>

```java
public java.lang.Number getLongValueInput();
```

- *Type:* java.lang.Number

---

##### `stringListValueInput`<sup>Optional</sup> <a name="stringListValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValueInput"></a>

```java
public java.util.List<java.lang.String> getStringListValueInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `dateValue`<sup>Required</sup> <a name="dateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue"></a>

```java
public java.lang.String getDateValue();
```

- *Type:* java.lang.String

---

##### `longValue`<sup>Required</sup> <a name="longValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue"></a>

```java
public java.lang.Number getLongValue();
```

- *Type:* java.lang.Number

---

##### `stringListValue`<sup>Required</sup> <a name="stringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue"></a>

```java
public java.util.List<java.lang.String> getStringListValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference;

new QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition">putInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetInvocationCondition">resetInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetLambdaArn">resetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetS3BucketName">resetS3BucketName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInvocationCondition` <a name="putInvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition"></a>

```java
public void putInvocationCondition(QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

---

##### `resetInvocationCondition` <a name="resetInvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetInvocationCondition"></a>

```java
public void resetInvocationCondition()
```

##### `resetLambdaArn` <a name="resetLambdaArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetLambdaArn"></a>

```java
public void resetLambdaArn()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetS3BucketName` <a name="resetS3BucketName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetS3BucketName"></a>

```java
public void resetS3BucketName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationCondition">invocationCondition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationConditionInput">invocationConditionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `invocationCondition`<sup>Required</sup> <a name="invocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationCondition"></a>

```java
public QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference getInvocationCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference</a>

---

##### `invocationConditionInput`<sup>Optional</sup> <a name="invocationConditionInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationConditionInput"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition getInvocationConditionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArnInput"></a>

```java
public java.lang.String getLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

---


### QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference <a name="QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference;

new QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resetAudioExtractionStatus">resetAudioExtractionStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudioExtractionStatus` <a name="resetAudioExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resetAudioExtractionStatus"></a>

```java
public void resetAudioExtractionStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatusInput">audioExtractionStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus">audioExtractionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audioExtractionStatusInput`<sup>Optional</sup> <a name="audioExtractionStatusInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatusInput"></a>

```java
public java.lang.String getAudioExtractionStatusInput();
```

- *Type:* java.lang.String

---

##### `audioExtractionStatus`<sup>Required</sup> <a name="audioExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus"></a>

```java
public java.lang.String getAudioExtractionStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a>

---


### QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference <a name="QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference;

new QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resetImageExtractionStatus">resetImageExtractionStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageExtractionStatus` <a name="resetImageExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resetImageExtractionStatus"></a>

```java
public void resetImageExtractionStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatusInput">imageExtractionStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus">imageExtractionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageExtractionStatusInput`<sup>Optional</sup> <a name="imageExtractionStatusInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatusInput"></a>

```java
public java.lang.String getImageExtractionStatusInput();
```

- *Type:* java.lang.String

---

##### `imageExtractionStatus`<sup>Required</sup> <a name="imageExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus"></a>

```java
public java.lang.String getImageExtractionStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a>

---


### QbusinessDataSourceMediaExtractionConfigurationOutputReference <a name="QbusinessDataSourceMediaExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceMediaExtractionConfigurationOutputReference;

new QbusinessDataSourceMediaExtractionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration">putAudioExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration">putImageExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration">putVideoExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetAudioExtractionConfiguration">resetAudioExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetImageExtractionConfiguration">resetImageExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetVideoExtractionConfiguration">resetVideoExtractionConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAudioExtractionConfiguration` <a name="putAudioExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration"></a>

```java
public void putAudioExtractionConfiguration(QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a>

---

##### `putImageExtractionConfiguration` <a name="putImageExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration"></a>

```java
public void putImageExtractionConfiguration(QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a>

---

##### `putVideoExtractionConfiguration` <a name="putVideoExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration"></a>

```java
public void putVideoExtractionConfiguration(QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a>

---

##### `resetAudioExtractionConfiguration` <a name="resetAudioExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetAudioExtractionConfiguration"></a>

```java
public void resetAudioExtractionConfiguration()
```

##### `resetImageExtractionConfiguration` <a name="resetImageExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetImageExtractionConfiguration"></a>

```java
public void resetImageExtractionConfiguration()
```

##### `resetVideoExtractionConfiguration` <a name="resetVideoExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetVideoExtractionConfiguration"></a>

```java
public void resetVideoExtractionConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration">audioExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration">imageExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration">videoExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.audioExtractionConfigurationInput">audioExtractionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.imageExtractionConfigurationInput">imageExtractionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.videoExtractionConfigurationInput">videoExtractionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audioExtractionConfiguration`<sup>Required</sup> <a name="audioExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration"></a>

```java
public QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference getAudioExtractionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a>

---

##### `imageExtractionConfiguration`<sup>Required</sup> <a name="imageExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration"></a>

```java
public QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference getImageExtractionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a>

---

##### `videoExtractionConfiguration`<sup>Required</sup> <a name="videoExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration"></a>

```java
public QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference getVideoExtractionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a>

---

##### `audioExtractionConfigurationInput`<sup>Optional</sup> <a name="audioExtractionConfigurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.audioExtractionConfigurationInput"></a>

```java
public IResolvable|QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration getAudioExtractionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a>

---

##### `imageExtractionConfigurationInput`<sup>Optional</sup> <a name="imageExtractionConfigurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.imageExtractionConfigurationInput"></a>

```java
public IResolvable|QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration getImageExtractionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a>

---

##### `videoExtractionConfigurationInput`<sup>Optional</sup> <a name="videoExtractionConfigurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.videoExtractionConfigurationInput"></a>

```java
public IResolvable|QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration getVideoExtractionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceMediaExtractionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a>

---


### QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference <a name="QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference;

new QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionStatus">resetVideoExtractionStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVideoExtractionStatus` <a name="resetVideoExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionStatus"></a>

```java
public void resetVideoExtractionStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatusInput">videoExtractionStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus">videoExtractionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `videoExtractionStatusInput`<sup>Optional</sup> <a name="videoExtractionStatusInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatusInput"></a>

```java
public java.lang.String getVideoExtractionStatusInput();
```

- *Type:* java.lang.String

---

##### `videoExtractionStatus`<sup>Required</sup> <a name="videoExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus"></a>

```java
public java.lang.String getVideoExtractionStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a>

---


### QbusinessDataSourceTagsList <a name="QbusinessDataSourceTagsList" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceTagsList;

new QbusinessDataSourceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.get"></a>

```java
public QbusinessDataSourceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QbusinessDataSourceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>>

---


### QbusinessDataSourceTagsOutputReference <a name="QbusinessDataSourceTagsOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceTagsOutputReference;

new QbusinessDataSourceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>

---


### QbusinessDataSourceVpcConfigurationOutputReference <a name="QbusinessDataSourceVpcConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_data_source.QbusinessDataSourceVpcConfigurationOutputReference;

new QbusinessDataSourceVpcConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessDataSourceVpcConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a>

---



