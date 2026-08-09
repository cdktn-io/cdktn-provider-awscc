# `databrewJob` Submodule <a name="`databrewJob` Submodule" id="@cdktn/provider-awscc.databrewJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabrewJob <a name="DatabrewJob" id="@cdktn/provider-awscc.databrewJob.DatabrewJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job awscc_databrew_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJob;

DatabrewJob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .roleArn(java.lang.String)
    .type(java.lang.String)
//  .databaseOutputs(IResolvable|java.util.List<DatabrewJobDatabaseOutputs>)
//  .dataCatalogOutputs(IResolvable|java.util.List<DatabrewJobDataCatalogOutputs>)
//  .datasetName(java.lang.String)
//  .encryptionKeyArn(java.lang.String)
//  .encryptionMode(java.lang.String)
//  .jobSample(DatabrewJobJobSample)
//  .logSubscription(java.lang.String)
//  .maxCapacity(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .outputLocation(DatabrewJobOutputLocation)
//  .outputs(IResolvable|java.util.List<DatabrewJobOutputs>)
//  .profileConfiguration(DatabrewJobProfileConfiguration)
//  .projectName(java.lang.String)
//  .recipe(DatabrewJobRecipe)
//  .tags(IResolvable|java.util.List<DatabrewJobTags>)
//  .timeout(java.lang.Number)
//  .validationConfigurations(IResolvable|java.util.List<DatabrewJobValidationConfigurations>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Job name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Role arn. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Job type. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.databaseOutputs">databaseOutputs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#database_outputs DatabrewJob#database_outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.dataCatalogOutputs">dataCatalogOutputs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#data_catalog_outputs DatabrewJob#data_catalog_outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.datasetName">datasetName</a></code> | <code>java.lang.String</code> | Dataset name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | Encryption Key Arn. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | Encryption mode. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.jobSample">jobSample</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a></code> | Job Sample. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.logSubscription">logSubscription</a></code> | <code>java.lang.String</code> | Log subscription. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | Max capacity. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Max retries. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.outputLocation">outputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a></code> | Output location. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.outputs">outputs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#outputs DatabrewJob#outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.profileConfiguration">profileConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a></code> | Profile Job configuration. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.projectName">projectName</a></code> | <code>java.lang.String</code> | Project name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.recipe">recipe</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#recipe DatabrewJob#recipe}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#tags DatabrewJob#tags}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | Timeout. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.validationConfigurations">validationConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>></code> | Data quality rules configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Job name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#name DatabrewJob#name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Role arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#role_arn DatabrewJob#role_arn}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Job type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#type DatabrewJob#type}

---

##### `databaseOutputs`<sup>Optional</sup> <a name="databaseOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.databaseOutputs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#database_outputs DatabrewJob#database_outputs}.

---

##### `dataCatalogOutputs`<sup>Optional</sup> <a name="dataCatalogOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.dataCatalogOutputs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#data_catalog_outputs DatabrewJob#data_catalog_outputs}.

---

##### `datasetName`<sup>Optional</sup> <a name="datasetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.datasetName"></a>

- *Type:* java.lang.String

Dataset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#dataset_name DatabrewJob#dataset_name}

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.encryptionKeyArn"></a>

- *Type:* java.lang.String

Encryption Key Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#encryption_key_arn DatabrewJob#encryption_key_arn}

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.encryptionMode"></a>

- *Type:* java.lang.String

Encryption mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#encryption_mode DatabrewJob#encryption_mode}

---

##### `jobSample`<sup>Optional</sup> <a name="jobSample" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.jobSample"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a>

Job Sample.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#job_sample DatabrewJob#job_sample}

---

##### `logSubscription`<sup>Optional</sup> <a name="logSubscription" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.logSubscription"></a>

- *Type:* java.lang.String

Log subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#log_subscription DatabrewJob#log_subscription}

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.maxCapacity"></a>

- *Type:* java.lang.Number

Max capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#max_capacity DatabrewJob#max_capacity}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

Max retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#max_retries DatabrewJob#max_retries}

---

##### `outputLocation`<sup>Optional</sup> <a name="outputLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.outputLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a>

Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#output_location DatabrewJob#output_location}

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.outputs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#outputs DatabrewJob#outputs}.

---

##### `profileConfiguration`<sup>Optional</sup> <a name="profileConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.profileConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a>

Profile Job configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#profile_configuration DatabrewJob#profile_configuration}

---

##### `projectName`<sup>Optional</sup> <a name="projectName" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.projectName"></a>

- *Type:* java.lang.String

Project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#project_name DatabrewJob#project_name}

---

##### `recipe`<sup>Optional</sup> <a name="recipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.recipe"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#recipe DatabrewJob#recipe}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#tags DatabrewJob#tags}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

Timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#timeout DatabrewJob#timeout}

---

##### `validationConfigurations`<sup>Optional</sup> <a name="validationConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.validationConfigurations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>>

Data quality rules configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#validation_configurations DatabrewJob#validation_configurations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putDatabaseOutputs">putDatabaseOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putDataCatalogOutputs">putDataCatalogOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putJobSample">putJobSample</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputLocation">putOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputs">putOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putProfileConfiguration">putProfileConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putRecipe">putRecipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putValidationConfigurations">putValidationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDatabaseOutputs">resetDatabaseOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDataCatalogOutputs">resetDataCatalogOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDatasetName">resetDatasetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetEncryptionKeyArn">resetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetEncryptionMode">resetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetJobSample">resetJobSample</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetLogSubscription">resetLogSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOutputLocation">resetOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOutputs">resetOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetProfileConfiguration">resetProfileConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetProjectName">resetProjectName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetRecipe">resetRecipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetValidationConfigurations">resetValidationConfigurations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatabaseOutputs` <a name="putDatabaseOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putDatabaseOutputs"></a>

```java
public void putDatabaseOutputs(IResolvable|java.util.List<DatabrewJobDatabaseOutputs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putDatabaseOutputs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>>

---

##### `putDataCatalogOutputs` <a name="putDataCatalogOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putDataCatalogOutputs"></a>

```java
public void putDataCatalogOutputs(IResolvable|java.util.List<DatabrewJobDataCatalogOutputs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putDataCatalogOutputs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>>

---

##### `putJobSample` <a name="putJobSample" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putJobSample"></a>

```java
public void putJobSample(DatabrewJobJobSample value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putJobSample.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a>

---

##### `putOutputLocation` <a name="putOutputLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputLocation"></a>

```java
public void putOutputLocation(DatabrewJobOutputLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a>

---

##### `putOutputs` <a name="putOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputs"></a>

```java
public void putOutputs(IResolvable|java.util.List<DatabrewJobOutputs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>>

---

##### `putProfileConfiguration` <a name="putProfileConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putProfileConfiguration"></a>

```java
public void putProfileConfiguration(DatabrewJobProfileConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putProfileConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a>

---

##### `putRecipe` <a name="putRecipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putRecipe"></a>

```java
public void putRecipe(DatabrewJobRecipe value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putRecipe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DatabrewJobTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>>

---

##### `putValidationConfigurations` <a name="putValidationConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putValidationConfigurations"></a>

```java
public void putValidationConfigurations(IResolvable|java.util.List<DatabrewJobValidationConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putValidationConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>>

---

##### `resetDatabaseOutputs` <a name="resetDatabaseOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDatabaseOutputs"></a>

```java
public void resetDatabaseOutputs()
```

##### `resetDataCatalogOutputs` <a name="resetDataCatalogOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDataCatalogOutputs"></a>

```java
public void resetDataCatalogOutputs()
```

##### `resetDatasetName` <a name="resetDatasetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDatasetName"></a>

```java
public void resetDatasetName()
```

##### `resetEncryptionKeyArn` <a name="resetEncryptionKeyArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetEncryptionKeyArn"></a>

```java
public void resetEncryptionKeyArn()
```

##### `resetEncryptionMode` <a name="resetEncryptionMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetEncryptionMode"></a>

```java
public void resetEncryptionMode()
```

##### `resetJobSample` <a name="resetJobSample" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetJobSample"></a>

```java
public void resetJobSample()
```

##### `resetLogSubscription` <a name="resetLogSubscription" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetLogSubscription"></a>

```java
public void resetLogSubscription()
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetOutputLocation` <a name="resetOutputLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOutputLocation"></a>

```java
public void resetOutputLocation()
```

##### `resetOutputs` <a name="resetOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOutputs"></a>

```java
public void resetOutputs()
```

##### `resetProfileConfiguration` <a name="resetProfileConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetProfileConfiguration"></a>

```java
public void resetProfileConfiguration()
```

##### `resetProjectName` <a name="resetProjectName" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetProjectName"></a>

```java
public void resetProjectName()
```

##### `resetRecipe` <a name="resetRecipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetRecipe"></a>

```java
public void resetRecipe()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetValidationConfigurations` <a name="resetValidationConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetValidationConfigurations"></a>

```java
public void resetValidationConfigurations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatabrewJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isConstruct"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJob;

DatabrewJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJob;

DatabrewJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJob;

DatabrewJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJob;

DatabrewJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabrewJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DatabrewJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabrewJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabrewJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DatabrewJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.databaseOutputs">databaseOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList">DatabrewJobDatabaseOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dataCatalogOutputs">dataCatalogOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList">DatabrewJobDataCatalogOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.jobSample">jobSample</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference">DatabrewJobJobSampleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputLocation">outputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference">DatabrewJobOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList">DatabrewJobOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.profileConfiguration">profileConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference">DatabrewJobProfileConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.recipe">recipe</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference">DatabrewJobRecipeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList">DatabrewJobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.validationConfigurations">validationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList">DatabrewJobValidationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.databaseOutputsInput">databaseOutputsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dataCatalogOutputsInput">dataCatalogOutputsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.datasetNameInput">datasetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionKeyArnInput">encryptionKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionModeInput">encryptionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.jobSampleInput">jobSampleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.logSubscriptionInput">logSubscriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputLocationInput">outputLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputsInput">outputsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.profileConfigurationInput">profileConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.projectNameInput">projectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.recipeInput">recipeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.validationConfigurationsInput">validationConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.datasetName">datasetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.logSubscription">logSubscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.projectName">projectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `databaseOutputs`<sup>Required</sup> <a name="databaseOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.databaseOutputs"></a>

```java
public DatabrewJobDatabaseOutputsList getDatabaseOutputs();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList">DatabrewJobDatabaseOutputsList</a>

---

##### `dataCatalogOutputs`<sup>Required</sup> <a name="dataCatalogOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dataCatalogOutputs"></a>

```java
public DatabrewJobDataCatalogOutputsList getDataCatalogOutputs();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList">DatabrewJobDataCatalogOutputsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jobSample`<sup>Required</sup> <a name="jobSample" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.jobSample"></a>

```java
public DatabrewJobJobSampleOutputReference getJobSample();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference">DatabrewJobJobSampleOutputReference</a>

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputLocation"></a>

```java
public DatabrewJobOutputLocationOutputReference getOutputLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference">DatabrewJobOutputLocationOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputs"></a>

```java
public DatabrewJobOutputsList getOutputs();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList">DatabrewJobOutputsList</a>

---

##### `profileConfiguration`<sup>Required</sup> <a name="profileConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.profileConfiguration"></a>

```java
public DatabrewJobProfileConfigurationOutputReference getProfileConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference">DatabrewJobProfileConfigurationOutputReference</a>

---

##### `recipe`<sup>Required</sup> <a name="recipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.recipe"></a>

```java
public DatabrewJobRecipeOutputReference getRecipe();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference">DatabrewJobRecipeOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tags"></a>

```java
public DatabrewJobTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList">DatabrewJobTagsList</a>

---

##### `validationConfigurations`<sup>Required</sup> <a name="validationConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.validationConfigurations"></a>

```java
public DatabrewJobValidationConfigurationsList getValidationConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList">DatabrewJobValidationConfigurationsList</a>

---

##### `databaseOutputsInput`<sup>Optional</sup> <a name="databaseOutputsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.databaseOutputsInput"></a>

```java
public IResolvable|java.util.List<DatabrewJobDatabaseOutputs> getDatabaseOutputsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>>

---

##### `dataCatalogOutputsInput`<sup>Optional</sup> <a name="dataCatalogOutputsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dataCatalogOutputsInput"></a>

```java
public IResolvable|java.util.List<DatabrewJobDataCatalogOutputs> getDataCatalogOutputsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>>

---

##### `datasetNameInput`<sup>Optional</sup> <a name="datasetNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.datasetNameInput"></a>

```java
public java.lang.String getDatasetNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyArnInput`<sup>Optional</sup> <a name="encryptionKeyArnInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionKeyArnInput"></a>

```java
public java.lang.String getEncryptionKeyArnInput();
```

- *Type:* java.lang.String

---

##### `encryptionModeInput`<sup>Optional</sup> <a name="encryptionModeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionModeInput"></a>

```java
public java.lang.String getEncryptionModeInput();
```

- *Type:* java.lang.String

---

##### `jobSampleInput`<sup>Optional</sup> <a name="jobSampleInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.jobSampleInput"></a>

```java
public IResolvable|DatabrewJobJobSample getJobSampleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a>

---

##### `logSubscriptionInput`<sup>Optional</sup> <a name="logSubscriptionInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.logSubscriptionInput"></a>

```java
public java.lang.String getLogSubscriptionInput();
```

- *Type:* java.lang.String

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputLocationInput`<sup>Optional</sup> <a name="outputLocationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputLocationInput"></a>

```java
public IResolvable|DatabrewJobOutputLocation getOutputLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a>

---

##### `outputsInput`<sup>Optional</sup> <a name="outputsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputsInput"></a>

```java
public IResolvable|java.util.List<DatabrewJobOutputs> getOutputsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>>

---

##### `profileConfigurationInput`<sup>Optional</sup> <a name="profileConfigurationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.profileConfigurationInput"></a>

```java
public IResolvable|DatabrewJobProfileConfiguration getProfileConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a>

---

##### `projectNameInput`<sup>Optional</sup> <a name="projectNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.projectNameInput"></a>

```java
public java.lang.String getProjectNameInput();
```

- *Type:* java.lang.String

---

##### `recipeInput`<sup>Optional</sup> <a name="recipeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.recipeInput"></a>

```java
public IResolvable|DatabrewJobRecipe getRecipeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DatabrewJobTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `validationConfigurationsInput`<sup>Optional</sup> <a name="validationConfigurationsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.validationConfigurationsInput"></a>

```java
public IResolvable|java.util.List<DatabrewJobValidationConfigurations> getValidationConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>>

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.datasetName"></a>

```java
public java.lang.String getDatasetName();
```

- *Type:* java.lang.String

---

##### `encryptionKeyArn`<sup>Required</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionKeyArn"></a>

```java
public java.lang.String getEncryptionKeyArn();
```

- *Type:* java.lang.String

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

---

##### `logSubscription`<sup>Required</sup> <a name="logSubscription" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.logSubscription"></a>

```java
public java.lang.String getLogSubscription();
```

- *Type:* java.lang.String

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabrewJobConfig <a name="DatabrewJobConfig" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobConfig;

DatabrewJobConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .roleArn(java.lang.String)
    .type(java.lang.String)
//  .databaseOutputs(IResolvable|java.util.List<DatabrewJobDatabaseOutputs>)
//  .dataCatalogOutputs(IResolvable|java.util.List<DatabrewJobDataCatalogOutputs>)
//  .datasetName(java.lang.String)
//  .encryptionKeyArn(java.lang.String)
//  .encryptionMode(java.lang.String)
//  .jobSample(DatabrewJobJobSample)
//  .logSubscription(java.lang.String)
//  .maxCapacity(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .outputLocation(DatabrewJobOutputLocation)
//  .outputs(IResolvable|java.util.List<DatabrewJobOutputs>)
//  .profileConfiguration(DatabrewJobProfileConfiguration)
//  .projectName(java.lang.String)
//  .recipe(DatabrewJobRecipe)
//  .tags(IResolvable|java.util.List<DatabrewJobTags>)
//  .timeout(java.lang.Number)
//  .validationConfigurations(IResolvable|java.util.List<DatabrewJobValidationConfigurations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.name">name</a></code> | <code>java.lang.String</code> | Job name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Role arn. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.type">type</a></code> | <code>java.lang.String</code> | Job type. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.databaseOutputs">databaseOutputs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#database_outputs DatabrewJob#database_outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.dataCatalogOutputs">dataCatalogOutputs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#data_catalog_outputs DatabrewJob#data_catalog_outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.datasetName">datasetName</a></code> | <code>java.lang.String</code> | Dataset name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | Encryption Key Arn. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | Encryption mode. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.jobSample">jobSample</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a></code> | Job Sample. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.logSubscription">logSubscription</a></code> | <code>java.lang.String</code> | Log subscription. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | Max capacity. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Max retries. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.outputLocation">outputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a></code> | Output location. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.outputs">outputs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#outputs DatabrewJob#outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.profileConfiguration">profileConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a></code> | Profile Job configuration. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.projectName">projectName</a></code> | <code>java.lang.String</code> | Project name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.recipe">recipe</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#recipe DatabrewJob#recipe}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#tags DatabrewJob#tags}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Timeout. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.validationConfigurations">validationConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>></code> | Data quality rules configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Job name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#name DatabrewJob#name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Role arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#role_arn DatabrewJob#role_arn}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Job type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#type DatabrewJob#type}

---

##### `databaseOutputs`<sup>Optional</sup> <a name="databaseOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.databaseOutputs"></a>

```java
public IResolvable|java.util.List<DatabrewJobDatabaseOutputs> getDatabaseOutputs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#database_outputs DatabrewJob#database_outputs}.

---

##### `dataCatalogOutputs`<sup>Optional</sup> <a name="dataCatalogOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.dataCatalogOutputs"></a>

```java
public IResolvable|java.util.List<DatabrewJobDataCatalogOutputs> getDataCatalogOutputs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#data_catalog_outputs DatabrewJob#data_catalog_outputs}.

---

##### `datasetName`<sup>Optional</sup> <a name="datasetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.datasetName"></a>

```java
public java.lang.String getDatasetName();
```

- *Type:* java.lang.String

Dataset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#dataset_name DatabrewJob#dataset_name}

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.encryptionKeyArn"></a>

```java
public java.lang.String getEncryptionKeyArn();
```

- *Type:* java.lang.String

Encryption Key Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#encryption_key_arn DatabrewJob#encryption_key_arn}

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

Encryption mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#encryption_mode DatabrewJob#encryption_mode}

---

##### `jobSample`<sup>Optional</sup> <a name="jobSample" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.jobSample"></a>

```java
public DatabrewJobJobSample getJobSample();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a>

Job Sample.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#job_sample DatabrewJob#job_sample}

---

##### `logSubscription`<sup>Optional</sup> <a name="logSubscription" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.logSubscription"></a>

```java
public java.lang.String getLogSubscription();
```

- *Type:* java.lang.String

Log subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#log_subscription DatabrewJob#log_subscription}

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

Max capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#max_capacity DatabrewJob#max_capacity}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

Max retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#max_retries DatabrewJob#max_retries}

---

##### `outputLocation`<sup>Optional</sup> <a name="outputLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.outputLocation"></a>

```java
public DatabrewJobOutputLocation getOutputLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a>

Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#output_location DatabrewJob#output_location}

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.outputs"></a>

```java
public IResolvable|java.util.List<DatabrewJobOutputs> getOutputs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#outputs DatabrewJob#outputs}.

---

##### `profileConfiguration`<sup>Optional</sup> <a name="profileConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.profileConfiguration"></a>

```java
public DatabrewJobProfileConfiguration getProfileConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a>

Profile Job configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#profile_configuration DatabrewJob#profile_configuration}

---

##### `projectName`<sup>Optional</sup> <a name="projectName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

Project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#project_name DatabrewJob#project_name}

---

##### `recipe`<sup>Optional</sup> <a name="recipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.recipe"></a>

```java
public DatabrewJobRecipe getRecipe();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#recipe DatabrewJob#recipe}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DatabrewJobTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#tags DatabrewJob#tags}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#timeout DatabrewJob#timeout}

---

##### `validationConfigurations`<sup>Optional</sup> <a name="validationConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.validationConfigurations"></a>

```java
public IResolvable|java.util.List<DatabrewJobValidationConfigurations> getValidationConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>>

Data quality rules configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#validation_configurations DatabrewJob#validation_configurations}

---

### DatabrewJobDatabaseOutputs <a name="DatabrewJobDatabaseOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDatabaseOutputs;

DatabrewJobDatabaseOutputs.builder()
//  .databaseOptions(DatabrewJobDatabaseOutputsDatabaseOptions)
//  .databaseOutputMode(java.lang.String)
//  .glueConnectionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.databaseOptions">databaseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.databaseOutputMode">databaseOutputMode</a></code> | <code>java.lang.String</code> | Database table name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.glueConnectionName">glueConnectionName</a></code> | <code>java.lang.String</code> | Glue connection name. |

---

##### `databaseOptions`<sup>Optional</sup> <a name="databaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.databaseOptions"></a>

```java
public DatabrewJobDatabaseOutputsDatabaseOptions getDatabaseOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}.

---

##### `databaseOutputMode`<sup>Optional</sup> <a name="databaseOutputMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.databaseOutputMode"></a>

```java
public java.lang.String getDatabaseOutputMode();
```

- *Type:* java.lang.String

Database table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#database_output_mode DatabrewJob#database_output_mode}

---

##### `glueConnectionName`<sup>Optional</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.glueConnectionName"></a>

```java
public java.lang.String getGlueConnectionName();
```

- *Type:* java.lang.String

Glue connection name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#glue_connection_name DatabrewJob#glue_connection_name}

---

### DatabrewJobDatabaseOutputsDatabaseOptions <a name="DatabrewJobDatabaseOutputsDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDatabaseOutputsDatabaseOptions;

DatabrewJobDatabaseOutputsDatabaseOptions.builder()
//  .tableName(java.lang.String)
//  .tempDirectory(DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a></code> | S3 Output location. |

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}.

---

##### `tempDirectory`<sup>Optional</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.property.tempDirectory"></a>

```java
public DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory getTempDirectory();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#temp_directory DatabrewJob#temp_directory}

---

### DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory <a name="DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory;

DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.builder()
//  .bucket(java.lang.String)
//  .bucketOwner(java.lang.String)
//  .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobDataCatalogOutputs <a name="DatabrewJobDataCatalogOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDataCatalogOutputs;

DatabrewJobDataCatalogOutputs.builder()
//  .catalogId(java.lang.String)
//  .databaseName(java.lang.String)
//  .databaseOptions(DatabrewJobDataCatalogOutputsDatabaseOptions)
//  .overwrite(java.lang.Boolean|IResolvable)
//  .s3Options(DatabrewJobDataCatalogOutputsS3Options)
//  .tableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#catalog_id DatabrewJob#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#database_name DatabrewJob#database_name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.databaseOptions">databaseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.overwrite">overwrite</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.s3Options">s3Options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#s3_options DatabrewJob#s3_options}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#catalog_id DatabrewJob#catalog_id}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#database_name DatabrewJob#database_name}.

---

##### `databaseOptions`<sup>Optional</sup> <a name="databaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.databaseOptions"></a>

```java
public DatabrewJobDataCatalogOutputsDatabaseOptions getDatabaseOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}.

---

##### `overwrite`<sup>Optional</sup> <a name="overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.overwrite"></a>

```java
public java.lang.Boolean|IResolvable getOverwrite();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}.

---

##### `s3Options`<sup>Optional</sup> <a name="s3Options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.s3Options"></a>

```java
public DatabrewJobDataCatalogOutputsS3Options getS3Options();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#s3_options DatabrewJob#s3_options}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}.

---

### DatabrewJobDataCatalogOutputsDatabaseOptions <a name="DatabrewJobDataCatalogOutputsDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDataCatalogOutputsDatabaseOptions;

DatabrewJobDataCatalogOutputsDatabaseOptions.builder()
//  .tableName(java.lang.String)
//  .tempDirectory(DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a></code> | S3 Output location. |

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}.

---

##### `tempDirectory`<sup>Optional</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.property.tempDirectory"></a>

```java
public DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory getTempDirectory();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#temp_directory DatabrewJob#temp_directory}

---

### DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory <a name="DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory;

DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.builder()
//  .bucket(java.lang.String)
//  .bucketOwner(java.lang.String)
//  .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobDataCatalogOutputsS3Options <a name="DatabrewJobDataCatalogOutputsS3Options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDataCatalogOutputsS3Options;

DatabrewJobDataCatalogOutputsS3Options.builder()
//  .location(DatabrewJobDataCatalogOutputsS3OptionsLocation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a></code> | S3 Output location. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options.property.location"></a>

```java
public DatabrewJobDataCatalogOutputsS3OptionsLocation getLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#location DatabrewJob#location}

---

### DatabrewJobDataCatalogOutputsS3OptionsLocation <a name="DatabrewJobDataCatalogOutputsS3OptionsLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDataCatalogOutputsS3OptionsLocation;

DatabrewJobDataCatalogOutputsS3OptionsLocation.builder()
//  .bucket(java.lang.String)
//  .bucketOwner(java.lang.String)
//  .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobJobSample <a name="DatabrewJobJobSample" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobJobSample;

DatabrewJobJobSample.builder()
//  .mode(java.lang.String)
//  .size(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.property.mode">mode</a></code> | <code>java.lang.String</code> | Sample configuration mode for profile jobs. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.property.size">size</a></code> | <code>java.lang.Number</code> | Sample configuration size for profile jobs. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Sample configuration mode for profile jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#mode DatabrewJob#mode}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Sample configuration size for profile jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#size DatabrewJob#size}

---

### DatabrewJobOutputLocation <a name="DatabrewJobOutputLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobOutputLocation;

DatabrewJobOutputLocation.builder()
//  .bucket(java.lang.String)
//  .bucketOwner(java.lang.String)
//  .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobOutputs <a name="DatabrewJobOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobOutputs;

DatabrewJobOutputs.builder()
//  .compressionFormat(java.lang.String)
//  .format(java.lang.String)
//  .formatOptions(DatabrewJobOutputsFormatOptions)
//  .location(DatabrewJobOutputsLocation)
//  .maxOutputFiles(java.lang.Number)
//  .overwrite(java.lang.Boolean|IResolvable)
//  .partitionColumns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.compressionFormat">compressionFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#compression_format DatabrewJob#compression_format}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#format DatabrewJob#format}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.formatOptions">formatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a></code> | Format options for job Output. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a></code> | S3 Output location. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.maxOutputFiles">maxOutputFiles</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#max_output_files DatabrewJob#max_output_files}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.overwrite">overwrite</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.partitionColumns">partitionColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#partition_columns DatabrewJob#partition_columns}. |

---

##### `compressionFormat`<sup>Optional</sup> <a name="compressionFormat" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.compressionFormat"></a>

```java
public java.lang.String getCompressionFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#compression_format DatabrewJob#compression_format}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#format DatabrewJob#format}.

---

##### `formatOptions`<sup>Optional</sup> <a name="formatOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.formatOptions"></a>

```java
public DatabrewJobOutputsFormatOptions getFormatOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a>

Format options for job Output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#format_options DatabrewJob#format_options}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.location"></a>

```java
public DatabrewJobOutputsLocation getLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#location DatabrewJob#location}

---

##### `maxOutputFiles`<sup>Optional</sup> <a name="maxOutputFiles" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.maxOutputFiles"></a>

```java
public java.lang.Number getMaxOutputFiles();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#max_output_files DatabrewJob#max_output_files}.

---

##### `overwrite`<sup>Optional</sup> <a name="overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.overwrite"></a>

```java
public java.lang.Boolean|IResolvable getOverwrite();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}.

---

##### `partitionColumns`<sup>Optional</sup> <a name="partitionColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.partitionColumns"></a>

```java
public java.util.List<java.lang.String> getPartitionColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#partition_columns DatabrewJob#partition_columns}.

---

### DatabrewJobOutputsFormatOptions <a name="DatabrewJobOutputsFormatOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobOutputsFormatOptions;

DatabrewJobOutputsFormatOptions.builder()
//  .csv(DatabrewJobOutputsFormatOptionsCsv)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a></code> | Output Csv options. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions.property.csv"></a>

```java
public DatabrewJobOutputsFormatOptionsCsv getCsv();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a>

Output Csv options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#csv DatabrewJob#csv}

---

### DatabrewJobOutputsFormatOptionsCsv <a name="DatabrewJobOutputsFormatOptionsCsv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobOutputsFormatOptionsCsv;

DatabrewJobOutputsFormatOptionsCsv.builder()
//  .delimiter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#delimiter DatabrewJob#delimiter}. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#delimiter DatabrewJob#delimiter}.

---

### DatabrewJobOutputsLocation <a name="DatabrewJobOutputsLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobOutputsLocation;

DatabrewJobOutputsLocation.builder()
//  .bucket(java.lang.String)
//  .bucketOwner(java.lang.String)
//  .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobProfileConfiguration <a name="DatabrewJobProfileConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfiguration;

DatabrewJobProfileConfiguration.builder()
//  .columnStatisticsConfigurations(IResolvable|java.util.List<DatabrewJobProfileConfigurationColumnStatisticsConfigurations>)
//  .datasetStatisticsConfiguration(DatabrewJobProfileConfigurationDatasetStatisticsConfiguration)
//  .entityDetectorConfiguration(DatabrewJobProfileConfigurationEntityDetectorConfiguration)
//  .profileColumns(IResolvable|java.util.List<DatabrewJobProfileConfigurationProfileColumns>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.columnStatisticsConfigurations">columnStatisticsConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#column_statistics_configurations DatabrewJob#column_statistics_configurations}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.datasetStatisticsConfiguration">datasetStatisticsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#dataset_statistics_configuration DatabrewJob#dataset_statistics_configuration}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.entityDetectorConfiguration">entityDetectorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#entity_detector_configuration DatabrewJob#entity_detector_configuration}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.profileColumns">profileColumns</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#profile_columns DatabrewJob#profile_columns}. |

---

##### `columnStatisticsConfigurations`<sup>Optional</sup> <a name="columnStatisticsConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.columnStatisticsConfigurations"></a>

```java
public IResolvable|java.util.List<DatabrewJobProfileConfigurationColumnStatisticsConfigurations> getColumnStatisticsConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#column_statistics_configurations DatabrewJob#column_statistics_configurations}.

---

##### `datasetStatisticsConfiguration`<sup>Optional</sup> <a name="datasetStatisticsConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.datasetStatisticsConfiguration"></a>

```java
public DatabrewJobProfileConfigurationDatasetStatisticsConfiguration getDatasetStatisticsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#dataset_statistics_configuration DatabrewJob#dataset_statistics_configuration}.

---

##### `entityDetectorConfiguration`<sup>Optional</sup> <a name="entityDetectorConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.entityDetectorConfiguration"></a>

```java
public DatabrewJobProfileConfigurationEntityDetectorConfiguration getEntityDetectorConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#entity_detector_configuration DatabrewJob#entity_detector_configuration}.

---

##### `profileColumns`<sup>Optional</sup> <a name="profileColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.profileColumns"></a>

```java
public IResolvable|java.util.List<DatabrewJobProfileConfigurationProfileColumns> getProfileColumns();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#profile_columns DatabrewJob#profile_columns}.

---

### DatabrewJobProfileConfigurationColumnStatisticsConfigurations <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationColumnStatisticsConfigurations;

DatabrewJobProfileConfigurationColumnStatisticsConfigurations.builder()
//  .selectors(IResolvable|java.util.List<DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors>)
//  .statistics(DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.property.selectors">selectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#selectors DatabrewJob#selectors}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.property.statistics">statistics</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}. |

---

##### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.property.selectors"></a>

```java
public IResolvable|java.util.List<DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors> getSelectors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#selectors DatabrewJob#selectors}.

---

##### `statistics`<sup>Optional</sup> <a name="statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.property.statistics"></a>

```java
public DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics getStatistics();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}.

---

### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors;

DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.builder()
//  .name(java.lang.String)
//  .regex(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#name DatabrewJob#name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.property.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#regex DatabrewJob#regex}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#name DatabrewJob#name}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#regex DatabrewJob#regex}.

---

### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics;

DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.builder()
//  .includedStatistics(java.util.List<java.lang.String>)
//  .overrides(IResolvable|java.util.List<DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.property.includedStatistics">includedStatistics</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.property.overrides">overrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}. |

---

##### `includedStatistics`<sup>Optional</sup> <a name="includedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.property.includedStatistics"></a>

```java
public java.util.List<java.lang.String> getIncludedStatistics();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.property.overrides"></a>

```java
public IResolvable|java.util.List<DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides> getOverrides();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}.

---

### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides;

DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.builder()
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .statistic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.property.statistic">statistic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}.

---

### DatabrewJobProfileConfigurationDatasetStatisticsConfiguration <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration;

DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.builder()
//  .includedStatistics(java.util.List<java.lang.String>)
//  .overrides(IResolvable|java.util.List<DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.property.includedStatistics">includedStatistics</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.property.overrides">overrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}. |

---

##### `includedStatistics`<sup>Optional</sup> <a name="includedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.property.includedStatistics"></a>

```java
public java.util.List<java.lang.String> getIncludedStatistics();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.property.overrides"></a>

```java
public IResolvable|java.util.List<DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides> getOverrides();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}.

---

### DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides;

DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.builder()
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .statistic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.property.statistic">statistic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}.

---

### DatabrewJobProfileConfigurationEntityDetectorConfiguration <a name="DatabrewJobProfileConfigurationEntityDetectorConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationEntityDetectorConfiguration;

DatabrewJobProfileConfigurationEntityDetectorConfiguration.builder()
//  .allowedStatistics(DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics)
//  .entityTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.property.allowedStatistics">allowedStatistics</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#allowed_statistics DatabrewJob#allowed_statistics}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.property.entityTypes">entityTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#entity_types DatabrewJob#entity_types}. |

---

##### `allowedStatistics`<sup>Optional</sup> <a name="allowedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.property.allowedStatistics"></a>

```java
public DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics getAllowedStatistics();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#allowed_statistics DatabrewJob#allowed_statistics}.

---

##### `entityTypes`<sup>Optional</sup> <a name="entityTypes" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.property.entityTypes"></a>

```java
public java.util.List<java.lang.String> getEntityTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#entity_types DatabrewJob#entity_types}.

---

### DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics <a name="DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics;

DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics.builder()
//  .statistics(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics.property.statistics">statistics</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}. |

---

##### `statistics`<sup>Optional</sup> <a name="statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics.property.statistics"></a>

```java
public java.util.List<java.lang.String> getStatistics();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}.

---

### DatabrewJobProfileConfigurationProfileColumns <a name="DatabrewJobProfileConfigurationProfileColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationProfileColumns;

DatabrewJobProfileConfigurationProfileColumns.builder()
//  .name(java.lang.String)
//  .regex(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#name DatabrewJob#name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.property.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#regex DatabrewJob#regex}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#name DatabrewJob#name}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#regex DatabrewJob#regex}.

---

### DatabrewJobRecipe <a name="DatabrewJobRecipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobRecipe;

DatabrewJobRecipe.builder()
//  .name(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.property.name">name</a></code> | <code>java.lang.String</code> | Recipe name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.property.version">version</a></code> | <code>java.lang.String</code> | Recipe version. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Recipe name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#name DatabrewJob#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Recipe version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#version DatabrewJob#version}

---

### DatabrewJobTags <a name="DatabrewJobTags" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobTags;

DatabrewJobTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#key DatabrewJob#key}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#value DatabrewJob#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#value DatabrewJob#value}.

---

### DatabrewJobValidationConfigurations <a name="DatabrewJobValidationConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobValidationConfigurations;

DatabrewJobValidationConfigurations.builder()
//  .rulesetArn(java.lang.String)
//  .validationMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.property.rulesetArn">rulesetArn</a></code> | <code>java.lang.String</code> | Arn of the Ruleset. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.property.validationMode">validationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#validation_mode DatabrewJob#validation_mode}. |

---

##### `rulesetArn`<sup>Optional</sup> <a name="rulesetArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.property.rulesetArn"></a>

```java
public java.lang.String getRulesetArn();
```

- *Type:* java.lang.String

Arn of the Ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#ruleset_arn DatabrewJob#ruleset_arn}

---

##### `validationMode`<sup>Optional</sup> <a name="validationMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.property.validationMode"></a>

```java
public java.lang.String getValidationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/databrew_job#validation_mode DatabrewJob#validation_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference <a name="DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference;

new DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.putTempDirectory">putTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resetTempDirectory">resetTempDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTempDirectory` <a name="putTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.putTempDirectory"></a>

```java
public void putTempDirectory(DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.putTempDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

---

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resetTableName"></a>

```java
public void resetTableName()
```

##### `resetTempDirectory` <a name="resetTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resetTempDirectory"></a>

```java
public void resetTempDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectoryInput">tempDirectoryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tempDirectory`<sup>Required</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectory"></a>

```java
public DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference getTempDirectory();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `tempDirectoryInput`<sup>Optional</sup> <a name="tempDirectoryInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectoryInput"></a>

```java
public IResolvable|DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory getTempDirectoryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobDatabaseOutputsDatabaseOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a>

---


### DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference <a name="DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference;

new DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucketOwner"></a>

```java
public void resetBucketOwner()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetKey"></a>

```java
public void resetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwnerInput"></a>

```java
public java.lang.String getBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

---


### DatabrewJobDatabaseOutputsList <a name="DatabrewJobDatabaseOutputsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDatabaseOutputsList;

new DatabrewJobDatabaseOutputsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.get"></a>

```java
public DatabrewJobDatabaseOutputsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatabrewJobDatabaseOutputs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>>

---


### DatabrewJobDatabaseOutputsOutputReference <a name="DatabrewJobDatabaseOutputsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDatabaseOutputsOutputReference;

new DatabrewJobDatabaseOutputsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.putDatabaseOptions">putDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetDatabaseOptions">resetDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetDatabaseOutputMode">resetDatabaseOutputMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetGlueConnectionName">resetGlueConnectionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabaseOptions` <a name="putDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.putDatabaseOptions"></a>

```java
public void putDatabaseOptions(DatabrewJobDatabaseOutputsDatabaseOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.putDatabaseOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a>

---

##### `resetDatabaseOptions` <a name="resetDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetDatabaseOptions"></a>

```java
public void resetDatabaseOptions()
```

##### `resetDatabaseOutputMode` <a name="resetDatabaseOutputMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetDatabaseOutputMode"></a>

```java
public void resetDatabaseOutputMode()
```

##### `resetGlueConnectionName` <a name="resetGlueConnectionName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetGlueConnectionName"></a>

```java
public void resetGlueConnectionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOptions">databaseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference">DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOptionsInput">databaseOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOutputModeInput">databaseOutputModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.glueConnectionNameInput">glueConnectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOutputMode">databaseOutputMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.glueConnectionName">glueConnectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseOptions`<sup>Required</sup> <a name="databaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOptions"></a>

```java
public DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference getDatabaseOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference">DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference</a>

---

##### `databaseOptionsInput`<sup>Optional</sup> <a name="databaseOptionsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOptionsInput"></a>

```java
public IResolvable|DatabrewJobDatabaseOutputsDatabaseOptions getDatabaseOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a>

---

##### `databaseOutputModeInput`<sup>Optional</sup> <a name="databaseOutputModeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOutputModeInput"></a>

```java
public java.lang.String getDatabaseOutputModeInput();
```

- *Type:* java.lang.String

---

##### `glueConnectionNameInput`<sup>Optional</sup> <a name="glueConnectionNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.glueConnectionNameInput"></a>

```java
public java.lang.String getGlueConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `databaseOutputMode`<sup>Required</sup> <a name="databaseOutputMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOutputMode"></a>

```java
public java.lang.String getDatabaseOutputMode();
```

- *Type:* java.lang.String

---

##### `glueConnectionName`<sup>Required</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.glueConnectionName"></a>

```java
public java.lang.String getGlueConnectionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobDatabaseOutputs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>

---


### DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference <a name="DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference;

new DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.putTempDirectory">putTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resetTempDirectory">resetTempDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTempDirectory` <a name="putTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.putTempDirectory"></a>

```java
public void putTempDirectory(DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.putTempDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

---

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resetTableName"></a>

```java
public void resetTableName()
```

##### `resetTempDirectory` <a name="resetTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resetTempDirectory"></a>

```java
public void resetTempDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectoryInput">tempDirectoryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tempDirectory`<sup>Required</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectory"></a>

```java
public DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference getTempDirectory();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `tempDirectoryInput`<sup>Optional</sup> <a name="tempDirectoryInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectoryInput"></a>

```java
public IResolvable|DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory getTempDirectoryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobDataCatalogOutputsDatabaseOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a>

---


### DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference <a name="DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference;

new DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucketOwner"></a>

```java
public void resetBucketOwner()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetKey"></a>

```java
public void resetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwnerInput"></a>

```java
public java.lang.String getBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

---


### DatabrewJobDataCatalogOutputsList <a name="DatabrewJobDataCatalogOutputsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDataCatalogOutputsList;

new DatabrewJobDataCatalogOutputsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.get"></a>

```java
public DatabrewJobDataCatalogOutputsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatabrewJobDataCatalogOutputs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>>

---


### DatabrewJobDataCatalogOutputsOutputReference <a name="DatabrewJobDataCatalogOutputsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDataCatalogOutputsOutputReference;

new DatabrewJobDataCatalogOutputsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putDatabaseOptions">putDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putS3Options">putS3Options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetDatabaseOptions">resetDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetOverwrite">resetOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetS3Options">resetS3Options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabaseOptions` <a name="putDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putDatabaseOptions"></a>

```java
public void putDatabaseOptions(DatabrewJobDataCatalogOutputsDatabaseOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putDatabaseOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a>

---

##### `putS3Options` <a name="putS3Options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putS3Options"></a>

```java
public void putS3Options(DatabrewJobDataCatalogOutputsS3Options value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putS3Options.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetDatabaseOptions` <a name="resetDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetDatabaseOptions"></a>

```java
public void resetDatabaseOptions()
```

##### `resetOverwrite` <a name="resetOverwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetOverwrite"></a>

```java
public void resetOverwrite()
```

##### `resetS3Options` <a name="resetS3Options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetS3Options"></a>

```java
public void resetS3Options()
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetTableName"></a>

```java
public void resetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseOptions">databaseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference">DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.s3Options">s3Options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference">DatabrewJobDataCatalogOutputsS3OptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseOptionsInput">databaseOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.overwriteInput">overwriteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.s3OptionsInput">s3OptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.overwrite">overwrite</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseOptions`<sup>Required</sup> <a name="databaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseOptions"></a>

```java
public DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference getDatabaseOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference">DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference</a>

---

##### `s3Options`<sup>Required</sup> <a name="s3Options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.s3Options"></a>

```java
public DatabrewJobDataCatalogOutputsS3OptionsOutputReference getS3Options();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference">DatabrewJobDataCatalogOutputsS3OptionsOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `databaseOptionsInput`<sup>Optional</sup> <a name="databaseOptionsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseOptionsInput"></a>

```java
public IResolvable|DatabrewJobDataCatalogOutputsDatabaseOptions getDatabaseOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a>

---

##### `overwriteInput`<sup>Optional</sup> <a name="overwriteInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.overwriteInput"></a>

```java
public java.lang.Boolean|IResolvable getOverwriteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `s3OptionsInput`<sup>Optional</sup> <a name="s3OptionsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.s3OptionsInput"></a>

```java
public IResolvable|DatabrewJobDataCatalogOutputsS3Options getS3OptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `overwrite`<sup>Required</sup> <a name="overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.overwrite"></a>

```java
public java.lang.Boolean|IResolvable getOverwrite();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobDataCatalogOutputs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>

---


### DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference <a name="DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference;

new DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetBucketOwner"></a>

```java
public void resetBucketOwner()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetKey"></a>

```java
public void resetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwnerInput"></a>

```java
public java.lang.String getBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobDataCatalogOutputsS3OptionsLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a>

---


### DatabrewJobDataCatalogOutputsS3OptionsOutputReference <a name="DatabrewJobDataCatalogOutputsS3OptionsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobDataCatalogOutputsS3OptionsOutputReference;

new DatabrewJobDataCatalogOutputsS3OptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocation` <a name="putLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.putLocation"></a>

```java
public void putLocation(DatabrewJobDataCatalogOutputsS3OptionsLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a>

---

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resetLocation"></a>

```java
public void resetLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference">DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.locationInput">locationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.location"></a>

```java
public DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference getLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference">DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.locationInput"></a>

```java
public IResolvable|DatabrewJobDataCatalogOutputsS3OptionsLocation getLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobDataCatalogOutputsS3Options getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a>

---


### DatabrewJobJobSampleOutputReference <a name="DatabrewJobJobSampleOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobJobSampleOutputReference;

new DatabrewJobJobSampleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resetSize">resetSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetSize` <a name="resetSize" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resetSize"></a>

```java
public void resetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobJobSample getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a>

---


### DatabrewJobOutputLocationOutputReference <a name="DatabrewJobOutputLocationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobOutputLocationOutputReference;

new DatabrewJobOutputLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetBucketOwner"></a>

```java
public void resetBucketOwner()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetKey"></a>

```java
public void resetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketOwnerInput"></a>

```java
public java.lang.String getBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobOutputLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a>

---


### DatabrewJobOutputsFormatOptionsCsvOutputReference <a name="DatabrewJobOutputsFormatOptionsCsvOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobOutputsFormatOptionsCsvOutputReference;

new DatabrewJobOutputsFormatOptionsCsvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resetDelimiter"></a>

```java
public void resetDelimiter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiterInput"></a>

```java
public java.lang.String getDelimiterInput();
```

- *Type:* java.lang.String

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobOutputsFormatOptionsCsv getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a>

---


### DatabrewJobOutputsFormatOptionsOutputReference <a name="DatabrewJobOutputsFormatOptionsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobOutputsFormatOptionsOutputReference;

new DatabrewJobOutputsFormatOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.putCsv">putCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resetCsv">resetCsv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCsv` <a name="putCsv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.putCsv"></a>

```java
public void putCsv(DatabrewJobOutputsFormatOptionsCsv value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a>

---

##### `resetCsv` <a name="resetCsv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resetCsv"></a>

```java
public void resetCsv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference">DatabrewJobOutputsFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.csvInput">csvInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.csv"></a>

```java
public DatabrewJobOutputsFormatOptionsCsvOutputReference getCsv();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference">DatabrewJobOutputsFormatOptionsCsvOutputReference</a>

---

##### `csvInput`<sup>Optional</sup> <a name="csvInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.csvInput"></a>

```java
public IResolvable|DatabrewJobOutputsFormatOptionsCsv getCsvInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobOutputsFormatOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a>

---


### DatabrewJobOutputsList <a name="DatabrewJobOutputsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobOutputsList;

new DatabrewJobOutputsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.get"></a>

```java
public DatabrewJobOutputsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatabrewJobOutputs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>>

---


### DatabrewJobOutputsLocationOutputReference <a name="DatabrewJobOutputsLocationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobOutputsLocationOutputReference;

new DatabrewJobOutputsLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetBucketOwner"></a>

```java
public void resetBucketOwner()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetKey"></a>

```java
public void resetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketOwnerInput"></a>

```java
public java.lang.String getBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobOutputsLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a>

---


### DatabrewJobOutputsOutputReference <a name="DatabrewJobOutputsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobOutputsOutputReference;

new DatabrewJobOutputsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putFormatOptions">putFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetCompressionFormat">resetCompressionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetFormatOptions">resetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetMaxOutputFiles">resetMaxOutputFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetOverwrite">resetOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetPartitionColumns">resetPartitionColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFormatOptions` <a name="putFormatOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putFormatOptions"></a>

```java
public void putFormatOptions(DatabrewJobOutputsFormatOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putFormatOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a>

---

##### `putLocation` <a name="putLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putLocation"></a>

```java
public void putLocation(DatabrewJobOutputsLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a>

---

##### `resetCompressionFormat` <a name="resetCompressionFormat" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetCompressionFormat"></a>

```java
public void resetCompressionFormat()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetFormatOptions` <a name="resetFormatOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetFormatOptions"></a>

```java
public void resetFormatOptions()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMaxOutputFiles` <a name="resetMaxOutputFiles" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetMaxOutputFiles"></a>

```java
public void resetMaxOutputFiles()
```

##### `resetOverwrite` <a name="resetOverwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetOverwrite"></a>

```java
public void resetOverwrite()
```

##### `resetPartitionColumns` <a name="resetPartitionColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetPartitionColumns"></a>

```java
public void resetPartitionColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatOptions">formatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference">DatabrewJobOutputsFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference">DatabrewJobOutputsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.compressionFormatInput">compressionFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatOptionsInput">formatOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.locationInput">locationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.maxOutputFilesInput">maxOutputFilesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.overwriteInput">overwriteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.partitionColumnsInput">partitionColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.compressionFormat">compressionFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.maxOutputFiles">maxOutputFiles</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.overwrite">overwrite</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.partitionColumns">partitionColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatOptions"></a>

```java
public DatabrewJobOutputsFormatOptionsOutputReference getFormatOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference">DatabrewJobOutputsFormatOptionsOutputReference</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.location"></a>

```java
public DatabrewJobOutputsLocationOutputReference getLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference">DatabrewJobOutputsLocationOutputReference</a>

---

##### `compressionFormatInput`<sup>Optional</sup> <a name="compressionFormatInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.compressionFormatInput"></a>

```java
public java.lang.String getCompressionFormatInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `formatOptionsInput`<sup>Optional</sup> <a name="formatOptionsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatOptionsInput"></a>

```java
public IResolvable|DatabrewJobOutputsFormatOptions getFormatOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.locationInput"></a>

```java
public IResolvable|DatabrewJobOutputsLocation getLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a>

---

##### `maxOutputFilesInput`<sup>Optional</sup> <a name="maxOutputFilesInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.maxOutputFilesInput"></a>

```java
public java.lang.Number getMaxOutputFilesInput();
```

- *Type:* java.lang.Number

---

##### `overwriteInput`<sup>Optional</sup> <a name="overwriteInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.overwriteInput"></a>

```java
public java.lang.Boolean|IResolvable getOverwriteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `partitionColumnsInput`<sup>Optional</sup> <a name="partitionColumnsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.partitionColumnsInput"></a>

```java
public java.util.List<java.lang.String> getPartitionColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compressionFormat`<sup>Required</sup> <a name="compressionFormat" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.compressionFormat"></a>

```java
public java.lang.String getCompressionFormat();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `maxOutputFiles`<sup>Required</sup> <a name="maxOutputFiles" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.maxOutputFiles"></a>

```java
public java.lang.Number getMaxOutputFiles();
```

- *Type:* java.lang.Number

---

##### `overwrite`<sup>Required</sup> <a name="overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.overwrite"></a>

```java
public java.lang.Boolean|IResolvable getOverwrite();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `partitionColumns`<sup>Required</sup> <a name="partitionColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.partitionColumns"></a>

```java
public java.util.List<java.lang.String> getPartitionColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobOutputs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get"></a>

```java
public DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatabrewJobProfileConfigurationColumnStatisticsConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putSelectors">putSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putStatistics">putStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resetSelectors">resetSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resetStatistics">resetStatistics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelectors` <a name="putSelectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putSelectors"></a>

```java
public void putSelectors(IResolvable|java.util.List<DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putSelectors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>>

---

##### `putStatistics` <a name="putStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putStatistics"></a>

```java
public void putStatistics(DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putStatistics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a>

---

##### `resetSelectors` <a name="resetSelectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resetSelectors"></a>

```java
public void resetSelectors()
```

##### `resetStatistics` <a name="resetStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resetStatistics"></a>

```java
public void resetStatistics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statistics">statistics</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectorsInput">selectorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statisticsInput">statisticsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectors"></a>

```java
public DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList getSelectors();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList</a>

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statistics"></a>

```java
public DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference getStatistics();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference</a>

---

##### `selectorsInput`<sup>Optional</sup> <a name="selectorsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectorsInput"></a>

```java
public IResolvable|java.util.List<DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors> getSelectorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>>

---

##### `statisticsInput`<sup>Optional</sup> <a name="statisticsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statisticsInput"></a>

```java
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics getStatisticsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get"></a>

```java
public DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRegex` <a name="resetRegex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resetIncludedStatistics">resetIncludedStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resetOverrides">resetOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOverrides` <a name="putOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.putOverrides"></a>

```java
public void putOverrides(IResolvable|java.util.List<DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.putOverrides.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>>

---

##### `resetIncludedStatistics` <a name="resetIncludedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resetIncludedStatistics"></a>

```java
public void resetIncludedStatistics()
```

##### `resetOverrides` <a name="resetOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resetOverrides"></a>

```java
public void resetOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatisticsInput">includedStatisticsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overridesInput">overridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatistics">includedStatistics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overrides"></a>

```java
public DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList getOverrides();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList</a>

---

##### `includedStatisticsInput`<sup>Optional</sup> <a name="includedStatisticsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatisticsInput"></a>

```java
public java.util.List<java.lang.String> getIncludedStatisticsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overridesInput"></a>

```java
public IResolvable|java.util.List<DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides> getOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>>

---

##### `includedStatistics`<sup>Required</sup> <a name="includedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatistics"></a>

```java
public java.util.List<java.lang.String> getIncludedStatistics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get"></a>

```java
public DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resetStatistic"></a>

```java
public void resetStatistic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>

---


### DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference;

new DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resetIncludedStatistics">resetIncludedStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resetOverrides">resetOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOverrides` <a name="putOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.putOverrides"></a>

```java
public void putOverrides(IResolvable|java.util.List<DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.putOverrides.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>>

---

##### `resetIncludedStatistics` <a name="resetIncludedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resetIncludedStatistics"></a>

```java
public void resetIncludedStatistics()
```

##### `resetOverrides` <a name="resetOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resetOverrides"></a>

```java
public void resetOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatisticsInput">includedStatisticsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overridesInput">overridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatistics">includedStatistics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overrides"></a>

```java
public DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList getOverrides();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList</a>

---

##### `includedStatisticsInput`<sup>Optional</sup> <a name="includedStatisticsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatisticsInput"></a>

```java
public java.util.List<java.lang.String> getIncludedStatisticsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overridesInput"></a>

```java
public IResolvable|java.util.List<DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides> getOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>>

---

##### `includedStatistics`<sup>Required</sup> <a name="includedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatistics"></a>

```java
public java.util.List<java.lang.String> getIncludedStatistics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobProfileConfigurationDatasetStatisticsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

---


### DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList;

new DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get"></a>

```java
public DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>>

---


### DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference;

new DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resetStatistic"></a>

```java
public void resetStatistic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>

---


### DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference <a name="DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference;

new DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resetStatistics">resetStatistics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatistics` <a name="resetStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resetStatistics"></a>

```java
public void resetStatistics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statisticsInput">statisticsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statistics">statistics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statisticsInput`<sup>Optional</sup> <a name="statisticsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statisticsInput"></a>

```java
public java.util.List<java.lang.String> getStatisticsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statistics"></a>

```java
public java.util.List<java.lang.String> getStatistics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

---


### DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference <a name="DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference;

new DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.putAllowedStatistics">putAllowedStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resetAllowedStatistics">resetAllowedStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resetEntityTypes">resetEntityTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedStatistics` <a name="putAllowedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.putAllowedStatistics"></a>

```java
public void putAllowedStatistics(DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.putAllowedStatistics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

---

##### `resetAllowedStatistics` <a name="resetAllowedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resetAllowedStatistics"></a>

```java
public void resetAllowedStatistics()
```

##### `resetEntityTypes` <a name="resetEntityTypes" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resetEntityTypes"></a>

```java
public void resetEntityTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatistics">allowedStatistics</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatisticsInput">allowedStatisticsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypesInput">entityTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypes">entityTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedStatistics`<sup>Required</sup> <a name="allowedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatistics"></a>

```java
public DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference getAllowedStatistics();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference</a>

---

##### `allowedStatisticsInput`<sup>Optional</sup> <a name="allowedStatisticsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatisticsInput"></a>

```java
public IResolvable|DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics getAllowedStatisticsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

---

##### `entityTypesInput`<sup>Optional</sup> <a name="entityTypesInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypesInput"></a>

```java
public java.util.List<java.lang.String> getEntityTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypes"></a>

```java
public java.util.List<java.lang.String> getEntityTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobProfileConfigurationEntityDetectorConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

---


### DatabrewJobProfileConfigurationOutputReference <a name="DatabrewJobProfileConfigurationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationOutputReference;

new DatabrewJobProfileConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putColumnStatisticsConfigurations">putColumnStatisticsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putDatasetStatisticsConfiguration">putDatasetStatisticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putEntityDetectorConfiguration">putEntityDetectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putProfileColumns">putProfileColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetColumnStatisticsConfigurations">resetColumnStatisticsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetDatasetStatisticsConfiguration">resetDatasetStatisticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetEntityDetectorConfiguration">resetEntityDetectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetProfileColumns">resetProfileColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnStatisticsConfigurations` <a name="putColumnStatisticsConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putColumnStatisticsConfigurations"></a>

```java
public void putColumnStatisticsConfigurations(IResolvable|java.util.List<DatabrewJobProfileConfigurationColumnStatisticsConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putColumnStatisticsConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>>

---

##### `putDatasetStatisticsConfiguration` <a name="putDatasetStatisticsConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putDatasetStatisticsConfiguration"></a>

```java
public void putDatasetStatisticsConfiguration(DatabrewJobProfileConfigurationDatasetStatisticsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putDatasetStatisticsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

---

##### `putEntityDetectorConfiguration` <a name="putEntityDetectorConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putEntityDetectorConfiguration"></a>

```java
public void putEntityDetectorConfiguration(DatabrewJobProfileConfigurationEntityDetectorConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putEntityDetectorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

---

##### `putProfileColumns` <a name="putProfileColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putProfileColumns"></a>

```java
public void putProfileColumns(IResolvable|java.util.List<DatabrewJobProfileConfigurationProfileColumns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putProfileColumns.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>>

---

##### `resetColumnStatisticsConfigurations` <a name="resetColumnStatisticsConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetColumnStatisticsConfigurations"></a>

```java
public void resetColumnStatisticsConfigurations()
```

##### `resetDatasetStatisticsConfiguration` <a name="resetDatasetStatisticsConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetDatasetStatisticsConfiguration"></a>

```java
public void resetDatasetStatisticsConfiguration()
```

##### `resetEntityDetectorConfiguration` <a name="resetEntityDetectorConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetEntityDetectorConfiguration"></a>

```java
public void resetEntityDetectorConfiguration()
```

##### `resetProfileColumns` <a name="resetProfileColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetProfileColumns"></a>

```java
public void resetProfileColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurations">columnStatisticsConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfiguration">datasetStatisticsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfiguration">entityDetectorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference">DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.profileColumns">profileColumns</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList">DatabrewJobProfileConfigurationProfileColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurationsInput">columnStatisticsConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfigurationInput">datasetStatisticsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfigurationInput">entityDetectorConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.profileColumnsInput">profileColumnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnStatisticsConfigurations`<sup>Required</sup> <a name="columnStatisticsConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurations"></a>

```java
public DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList getColumnStatisticsConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList</a>

---

##### `datasetStatisticsConfiguration`<sup>Required</sup> <a name="datasetStatisticsConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfiguration"></a>

```java
public DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference getDatasetStatisticsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference</a>

---

##### `entityDetectorConfiguration`<sup>Required</sup> <a name="entityDetectorConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfiguration"></a>

```java
public DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference getEntityDetectorConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference">DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference</a>

---

##### `profileColumns`<sup>Required</sup> <a name="profileColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.profileColumns"></a>

```java
public DatabrewJobProfileConfigurationProfileColumnsList getProfileColumns();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList">DatabrewJobProfileConfigurationProfileColumnsList</a>

---

##### `columnStatisticsConfigurationsInput`<sup>Optional</sup> <a name="columnStatisticsConfigurationsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurationsInput"></a>

```java
public IResolvable|java.util.List<DatabrewJobProfileConfigurationColumnStatisticsConfigurations> getColumnStatisticsConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>>

---

##### `datasetStatisticsConfigurationInput`<sup>Optional</sup> <a name="datasetStatisticsConfigurationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfigurationInput"></a>

```java
public IResolvable|DatabrewJobProfileConfigurationDatasetStatisticsConfiguration getDatasetStatisticsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

---

##### `entityDetectorConfigurationInput`<sup>Optional</sup> <a name="entityDetectorConfigurationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfigurationInput"></a>

```java
public IResolvable|DatabrewJobProfileConfigurationEntityDetectorConfiguration getEntityDetectorConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

---

##### `profileColumnsInput`<sup>Optional</sup> <a name="profileColumnsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.profileColumnsInput"></a>

```java
public IResolvable|java.util.List<DatabrewJobProfileConfigurationProfileColumns> getProfileColumnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobProfileConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a>

---


### DatabrewJobProfileConfigurationProfileColumnsList <a name="DatabrewJobProfileConfigurationProfileColumnsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationProfileColumnsList;

new DatabrewJobProfileConfigurationProfileColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.get"></a>

```java
public DatabrewJobProfileConfigurationProfileColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatabrewJobProfileConfigurationProfileColumns> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>>

---


### DatabrewJobProfileConfigurationProfileColumnsOutputReference <a name="DatabrewJobProfileConfigurationProfileColumnsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobProfileConfigurationProfileColumnsOutputReference;

new DatabrewJobProfileConfigurationProfileColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRegex` <a name="resetRegex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobProfileConfigurationProfileColumns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>

---


### DatabrewJobRecipeOutputReference <a name="DatabrewJobRecipeOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobRecipeOutputReference;

new DatabrewJobRecipeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobRecipe getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a>

---


### DatabrewJobTagsList <a name="DatabrewJobTagsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobTagsList;

new DatabrewJobTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.get"></a>

```java
public DatabrewJobTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatabrewJobTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>>

---


### DatabrewJobTagsOutputReference <a name="DatabrewJobTagsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobTagsOutputReference;

new DatabrewJobTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>

---


### DatabrewJobValidationConfigurationsList <a name="DatabrewJobValidationConfigurationsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobValidationConfigurationsList;

new DatabrewJobValidationConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.get"></a>

```java
public DatabrewJobValidationConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatabrewJobValidationConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>>

---


### DatabrewJobValidationConfigurationsOutputReference <a name="DatabrewJobValidationConfigurationsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_job.DatabrewJobValidationConfigurationsOutputReference;

new DatabrewJobValidationConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resetRulesetArn">resetRulesetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resetValidationMode">resetValidationMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRulesetArn` <a name="resetRulesetArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resetRulesetArn"></a>

```java
public void resetRulesetArn()
```

##### `resetValidationMode` <a name="resetValidationMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resetValidationMode"></a>

```java
public void resetValidationMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.rulesetArnInput">rulesetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.validationModeInput">validationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.rulesetArn">rulesetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.validationMode">validationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rulesetArnInput`<sup>Optional</sup> <a name="rulesetArnInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.rulesetArnInput"></a>

```java
public java.lang.String getRulesetArnInput();
```

- *Type:* java.lang.String

---

##### `validationModeInput`<sup>Optional</sup> <a name="validationModeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.validationModeInput"></a>

```java
public java.lang.String getValidationModeInput();
```

- *Type:* java.lang.String

---

##### `rulesetArn`<sup>Required</sup> <a name="rulesetArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.rulesetArn"></a>

```java
public java.lang.String getRulesetArn();
```

- *Type:* java.lang.String

---

##### `validationMode`<sup>Required</sup> <a name="validationMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.validationMode"></a>

```java
public java.lang.String getValidationMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewJobValidationConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>

---



