# `databrewJob` Submodule <a name="`databrewJob` Submodule" id="@cdktn/provider-awscc.databrewJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabrewJob <a name="DatabrewJob" id="@cdktn/provider-awscc.databrewJob.DatabrewJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job awscc_databrew_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJob(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  role_arn: str,
  type: str,
  database_outputs: IResolvable | typing.List[DatabrewJobDatabaseOutputs] = None,
  data_catalog_outputs: IResolvable | typing.List[DatabrewJobDataCatalogOutputs] = None,
  dataset_name: str = None,
  encryption_key_arn: str = None,
  encryption_mode: str = None,
  job_sample: DatabrewJobJobSample = None,
  log_subscription: str = None,
  max_capacity: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None,
  output_location: DatabrewJobOutputLocation = None,
  outputs: IResolvable | typing.List[DatabrewJobOutputs] = None,
  profile_configuration: DatabrewJobProfileConfiguration = None,
  project_name: str = None,
  recipe: DatabrewJobRecipe = None,
  tags: IResolvable | typing.List[DatabrewJobTags] = None,
  timeout: typing.Union[int, float] = None,
  validation_configurations: IResolvable | typing.List[DatabrewJobValidationConfigurations] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.name">name</a></code> | <code>str</code> | Job name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Role arn. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.type">type</a></code> | <code>str</code> | Job type. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.databaseOutputs">database_outputs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#database_outputs DatabrewJob#database_outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.dataCatalogOutputs">data_catalog_outputs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#data_catalog_outputs DatabrewJob#data_catalog_outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.datasetName">dataset_name</a></code> | <code>str</code> | Dataset name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | Encryption Key Arn. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.encryptionMode">encryption_mode</a></code> | <code>str</code> | Encryption mode. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.jobSample">job_sample</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a></code> | Job Sample. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.logSubscription">log_subscription</a></code> | <code>str</code> | Log subscription. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | Max capacity. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Max retries. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.outputLocation">output_location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a></code> | Output location. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.outputs">outputs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#outputs DatabrewJob#outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.profileConfiguration">profile_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a></code> | Profile Job configuration. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.projectName">project_name</a></code> | <code>str</code> | Project name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.recipe">recipe</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#recipe DatabrewJob#recipe}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#tags DatabrewJob#tags}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.validationConfigurations">validation_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>]</code> | Data quality rules configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.name"></a>

- *Type:* str

Job name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#name DatabrewJob#name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.roleArn"></a>

- *Type:* str

Role arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#role_arn DatabrewJob#role_arn}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.type"></a>

- *Type:* str

Job type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#type DatabrewJob#type}

---

##### `database_outputs`<sup>Optional</sup> <a name="database_outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.databaseOutputs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#database_outputs DatabrewJob#database_outputs}.

---

##### `data_catalog_outputs`<sup>Optional</sup> <a name="data_catalog_outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.dataCatalogOutputs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#data_catalog_outputs DatabrewJob#data_catalog_outputs}.

---

##### `dataset_name`<sup>Optional</sup> <a name="dataset_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.datasetName"></a>

- *Type:* str

Dataset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#dataset_name DatabrewJob#dataset_name}

---

##### `encryption_key_arn`<sup>Optional</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.encryptionKeyArn"></a>

- *Type:* str

Encryption Key Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#encryption_key_arn DatabrewJob#encryption_key_arn}

---

##### `encryption_mode`<sup>Optional</sup> <a name="encryption_mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.encryptionMode"></a>

- *Type:* str

Encryption mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#encryption_mode DatabrewJob#encryption_mode}

---

##### `job_sample`<sup>Optional</sup> <a name="job_sample" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.jobSample"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a>

Job Sample.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#job_sample DatabrewJob#job_sample}

---

##### `log_subscription`<sup>Optional</sup> <a name="log_subscription" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.logSubscription"></a>

- *Type:* str

Log subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#log_subscription DatabrewJob#log_subscription}

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.maxCapacity"></a>

- *Type:* typing.Union[int, float]

Max capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#max_capacity DatabrewJob#max_capacity}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

Max retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#max_retries DatabrewJob#max_retries}

---

##### `output_location`<sup>Optional</sup> <a name="output_location" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.outputLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a>

Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#output_location DatabrewJob#output_location}

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.outputs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#outputs DatabrewJob#outputs}.

---

##### `profile_configuration`<sup>Optional</sup> <a name="profile_configuration" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.profileConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a>

Profile Job configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#profile_configuration DatabrewJob#profile_configuration}

---

##### `project_name`<sup>Optional</sup> <a name="project_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.projectName"></a>

- *Type:* str

Project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#project_name DatabrewJob#project_name}

---

##### `recipe`<sup>Optional</sup> <a name="recipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.recipe"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#recipe DatabrewJob#recipe}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#tags DatabrewJob#tags}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#timeout DatabrewJob#timeout}

---

##### `validation_configurations`<sup>Optional</sup> <a name="validation_configurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.validationConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>]

Data quality rules configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#validation_configurations DatabrewJob#validation_configurations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putDatabaseOutputs">put_database_outputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putDataCatalogOutputs">put_data_catalog_outputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putJobSample">put_job_sample</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputLocation">put_output_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputs">put_outputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putProfileConfiguration">put_profile_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putRecipe">put_recipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putValidationConfigurations">put_validation_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDatabaseOutputs">reset_database_outputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDataCatalogOutputs">reset_data_catalog_outputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDatasetName">reset_dataset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetEncryptionKeyArn">reset_encryption_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetEncryptionMode">reset_encryption_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetJobSample">reset_job_sample</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetLogSubscription">reset_log_subscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetMaxCapacity">reset_max_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOutputLocation">reset_output_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOutputs">reset_outputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetProfileConfiguration">reset_profile_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetProjectName">reset_project_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetRecipe">reset_recipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetValidationConfigurations">reset_validation_configurations</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_database_outputs` <a name="put_database_outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putDatabaseOutputs"></a>

```python
def put_database_outputs(
  value: IResolvable | typing.List[DatabrewJobDatabaseOutputs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putDatabaseOutputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>]

---

##### `put_data_catalog_outputs` <a name="put_data_catalog_outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putDataCatalogOutputs"></a>

```python
def put_data_catalog_outputs(
  value: IResolvable | typing.List[DatabrewJobDataCatalogOutputs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putDataCatalogOutputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>]

---

##### `put_job_sample` <a name="put_job_sample" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putJobSample"></a>

```python
def put_job_sample(
  mode: str = None,
  size: typing.Union[int, float] = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putJobSample.parameter.mode"></a>

- *Type:* str

Sample configuration mode for profile jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#mode DatabrewJob#mode}

---

###### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putJobSample.parameter.size"></a>

- *Type:* typing.Union[int, float]

Sample configuration size for profile jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#size DatabrewJob#size}

---

##### `put_output_location` <a name="put_output_location" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputLocation"></a>

```python
def put_output_location(
  bucket: str = None,
  bucket_owner: str = None,
  key: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputLocation.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

###### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputLocation.parameter.bucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputLocation.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

##### `put_outputs` <a name="put_outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputs"></a>

```python
def put_outputs(
  value: IResolvable | typing.List[DatabrewJobOutputs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>]

---

##### `put_profile_configuration` <a name="put_profile_configuration" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putProfileConfiguration"></a>

```python
def put_profile_configuration(
  column_statistics_configurations: IResolvable | typing.List[DatabrewJobProfileConfigurationColumnStatisticsConfigurations] = None,
  dataset_statistics_configuration: DatabrewJobProfileConfigurationDatasetStatisticsConfiguration = None,
  entity_detector_configuration: DatabrewJobProfileConfigurationEntityDetectorConfiguration = None,
  profile_columns: IResolvable | typing.List[DatabrewJobProfileConfigurationProfileColumns] = None
) -> None
```

###### `column_statistics_configurations`<sup>Optional</sup> <a name="column_statistics_configurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putProfileConfiguration.parameter.columnStatisticsConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#column_statistics_configurations DatabrewJob#column_statistics_configurations}.

---

###### `dataset_statistics_configuration`<sup>Optional</sup> <a name="dataset_statistics_configuration" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putProfileConfiguration.parameter.datasetStatisticsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#dataset_statistics_configuration DatabrewJob#dataset_statistics_configuration}.

---

###### `entity_detector_configuration`<sup>Optional</sup> <a name="entity_detector_configuration" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putProfileConfiguration.parameter.entityDetectorConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#entity_detector_configuration DatabrewJob#entity_detector_configuration}.

---

###### `profile_columns`<sup>Optional</sup> <a name="profile_columns" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putProfileConfiguration.parameter.profileColumns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#profile_columns DatabrewJob#profile_columns}.

---

##### `put_recipe` <a name="put_recipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putRecipe"></a>

```python
def put_recipe(
  name: str = None,
  version: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putRecipe.parameter.name"></a>

- *Type:* str

Recipe name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#name DatabrewJob#name}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putRecipe.parameter.version"></a>

- *Type:* str

Recipe version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#version DatabrewJob#version}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DatabrewJobTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>]

---

##### `put_validation_configurations` <a name="put_validation_configurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putValidationConfigurations"></a>

```python
def put_validation_configurations(
  value: IResolvable | typing.List[DatabrewJobValidationConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putValidationConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>]

---

##### `reset_database_outputs` <a name="reset_database_outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDatabaseOutputs"></a>

```python
def reset_database_outputs() -> None
```

##### `reset_data_catalog_outputs` <a name="reset_data_catalog_outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDataCatalogOutputs"></a>

```python
def reset_data_catalog_outputs() -> None
```

##### `reset_dataset_name` <a name="reset_dataset_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDatasetName"></a>

```python
def reset_dataset_name() -> None
```

##### `reset_encryption_key_arn` <a name="reset_encryption_key_arn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetEncryptionKeyArn"></a>

```python
def reset_encryption_key_arn() -> None
```

##### `reset_encryption_mode` <a name="reset_encryption_mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetEncryptionMode"></a>

```python
def reset_encryption_mode() -> None
```

##### `reset_job_sample` <a name="reset_job_sample" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetJobSample"></a>

```python
def reset_job_sample() -> None
```

##### `reset_log_subscription` <a name="reset_log_subscription" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetLogSubscription"></a>

```python
def reset_log_subscription() -> None
```

##### `reset_max_capacity` <a name="reset_max_capacity" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetMaxCapacity"></a>

```python
def reset_max_capacity() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_output_location` <a name="reset_output_location" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOutputLocation"></a>

```python
def reset_output_location() -> None
```

##### `reset_outputs` <a name="reset_outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOutputs"></a>

```python
def reset_outputs() -> None
```

##### `reset_profile_configuration` <a name="reset_profile_configuration" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetProfileConfiguration"></a>

```python
def reset_profile_configuration() -> None
```

##### `reset_project_name` <a name="reset_project_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetProjectName"></a>

```python
def reset_project_name() -> None
```

##### `reset_recipe` <a name="reset_recipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetRecipe"></a>

```python
def reset_recipe() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_validation_configurations` <a name="reset_validation_configurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetValidationConfigurations"></a>

```python
def reset_validation_configurations() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatabrewJob resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isConstruct"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformElement"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformResource"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatabrewJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabrewJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabrewJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatabrewJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.databaseOutputs">database_outputs</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList">DatabrewJobDatabaseOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dataCatalogOutputs">data_catalog_outputs</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList">DatabrewJobDataCatalogOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.jobSample">job_sample</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference">DatabrewJobJobSampleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputLocation">output_location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference">DatabrewJobOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList">DatabrewJobOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.profileConfiguration">profile_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference">DatabrewJobProfileConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.recipe">recipe</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference">DatabrewJobRecipeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList">DatabrewJobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.validationConfigurations">validation_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList">DatabrewJobValidationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.databaseOutputsInput">database_outputs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dataCatalogOutputsInput">data_catalog_outputs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.datasetNameInput">dataset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionKeyArnInput">encryption_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionModeInput">encryption_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.jobSampleInput">job_sample_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.logSubscriptionInput">log_subscription_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxCapacityInput">max_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputLocationInput">output_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputsInput">outputs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.profileConfigurationInput">profile_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.projectNameInput">project_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.recipeInput">recipe_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.validationConfigurationsInput">validation_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.datasetName">dataset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionMode">encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.logSubscription">log_subscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.projectName">project_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database_outputs`<sup>Required</sup> <a name="database_outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.databaseOutputs"></a>

```python
database_outputs: DatabrewJobDatabaseOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList">DatabrewJobDatabaseOutputsList</a>

---

##### `data_catalog_outputs`<sup>Required</sup> <a name="data_catalog_outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dataCatalogOutputs"></a>

```python
data_catalog_outputs: DatabrewJobDataCatalogOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList">DatabrewJobDataCatalogOutputsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_sample`<sup>Required</sup> <a name="job_sample" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.jobSample"></a>

```python
job_sample: DatabrewJobJobSampleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference">DatabrewJobJobSampleOutputReference</a>

---

##### `output_location`<sup>Required</sup> <a name="output_location" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputLocation"></a>

```python
output_location: DatabrewJobOutputLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference">DatabrewJobOutputLocationOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputs"></a>

```python
outputs: DatabrewJobOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList">DatabrewJobOutputsList</a>

---

##### `profile_configuration`<sup>Required</sup> <a name="profile_configuration" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.profileConfiguration"></a>

```python
profile_configuration: DatabrewJobProfileConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference">DatabrewJobProfileConfigurationOutputReference</a>

---

##### `recipe`<sup>Required</sup> <a name="recipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.recipe"></a>

```python
recipe: DatabrewJobRecipeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference">DatabrewJobRecipeOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tags"></a>

```python
tags: DatabrewJobTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList">DatabrewJobTagsList</a>

---

##### `validation_configurations`<sup>Required</sup> <a name="validation_configurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.validationConfigurations"></a>

```python
validation_configurations: DatabrewJobValidationConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList">DatabrewJobValidationConfigurationsList</a>

---

##### `database_outputs_input`<sup>Optional</sup> <a name="database_outputs_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.databaseOutputsInput"></a>

```python
database_outputs_input: IResolvable | typing.List[DatabrewJobDatabaseOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>]

---

##### `data_catalog_outputs_input`<sup>Optional</sup> <a name="data_catalog_outputs_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dataCatalogOutputsInput"></a>

```python
data_catalog_outputs_input: IResolvable | typing.List[DatabrewJobDataCatalogOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>]

---

##### `dataset_name_input`<sup>Optional</sup> <a name="dataset_name_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.datasetNameInput"></a>

```python
dataset_name_input: str
```

- *Type:* str

---

##### `encryption_key_arn_input`<sup>Optional</sup> <a name="encryption_key_arn_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionKeyArnInput"></a>

```python
encryption_key_arn_input: str
```

- *Type:* str

---

##### `encryption_mode_input`<sup>Optional</sup> <a name="encryption_mode_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionModeInput"></a>

```python
encryption_mode_input: str
```

- *Type:* str

---

##### `job_sample_input`<sup>Optional</sup> <a name="job_sample_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.jobSampleInput"></a>

```python
job_sample_input: IResolvable | DatabrewJobJobSample
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a>

---

##### `log_subscription_input`<sup>Optional</sup> <a name="log_subscription_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.logSubscriptionInput"></a>

```python
log_subscription_input: str
```

- *Type:* str

---

##### `max_capacity_input`<sup>Optional</sup> <a name="max_capacity_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxCapacityInput"></a>

```python
max_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_location_input`<sup>Optional</sup> <a name="output_location_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputLocationInput"></a>

```python
output_location_input: IResolvable | DatabrewJobOutputLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a>

---

##### `outputs_input`<sup>Optional</sup> <a name="outputs_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputsInput"></a>

```python
outputs_input: IResolvable | typing.List[DatabrewJobOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>]

---

##### `profile_configuration_input`<sup>Optional</sup> <a name="profile_configuration_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.profileConfigurationInput"></a>

```python
profile_configuration_input: IResolvable | DatabrewJobProfileConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a>

---

##### `project_name_input`<sup>Optional</sup> <a name="project_name_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.projectNameInput"></a>

```python
project_name_input: str
```

- *Type:* str

---

##### `recipe_input`<sup>Optional</sup> <a name="recipe_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.recipeInput"></a>

```python
recipe_input: IResolvable | DatabrewJobRecipe
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DatabrewJobTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `validation_configurations_input`<sup>Optional</sup> <a name="validation_configurations_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.validationConfigurationsInput"></a>

```python
validation_configurations_input: IResolvable | typing.List[DatabrewJobValidationConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>]

---

##### `dataset_name`<sup>Required</sup> <a name="dataset_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.datasetName"></a>

```python
dataset_name: str
```

- *Type:* str

---

##### `encryption_key_arn`<sup>Required</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionKeyArn"></a>

```python
encryption_key_arn: str
```

- *Type:* str

---

##### `encryption_mode`<sup>Required</sup> <a name="encryption_mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionMode"></a>

```python
encryption_mode: str
```

- *Type:* str

---

##### `log_subscription`<sup>Required</sup> <a name="log_subscription" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.logSubscription"></a>

```python
log_subscription: str
```

- *Type:* str

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabrewJobConfig <a name="DatabrewJobConfig" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  role_arn: str,
  type: str,
  database_outputs: IResolvable | typing.List[DatabrewJobDatabaseOutputs] = None,
  data_catalog_outputs: IResolvable | typing.List[DatabrewJobDataCatalogOutputs] = None,
  dataset_name: str = None,
  encryption_key_arn: str = None,
  encryption_mode: str = None,
  job_sample: DatabrewJobJobSample = None,
  log_subscription: str = None,
  max_capacity: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None,
  output_location: DatabrewJobOutputLocation = None,
  outputs: IResolvable | typing.List[DatabrewJobOutputs] = None,
  profile_configuration: DatabrewJobProfileConfiguration = None,
  project_name: str = None,
  recipe: DatabrewJobRecipe = None,
  tags: IResolvable | typing.List[DatabrewJobTags] = None,
  timeout: typing.Union[int, float] = None,
  validation_configurations: IResolvable | typing.List[DatabrewJobValidationConfigurations] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.name">name</a></code> | <code>str</code> | Job name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Role arn. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.type">type</a></code> | <code>str</code> | Job type. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.databaseOutputs">database_outputs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#database_outputs DatabrewJob#database_outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.dataCatalogOutputs">data_catalog_outputs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#data_catalog_outputs DatabrewJob#data_catalog_outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.datasetName">dataset_name</a></code> | <code>str</code> | Dataset name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | Encryption Key Arn. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.encryptionMode">encryption_mode</a></code> | <code>str</code> | Encryption mode. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.jobSample">job_sample</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a></code> | Job Sample. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.logSubscription">log_subscription</a></code> | <code>str</code> | Log subscription. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | Max capacity. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Max retries. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.outputLocation">output_location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a></code> | Output location. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.outputs">outputs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#outputs DatabrewJob#outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.profileConfiguration">profile_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a></code> | Profile Job configuration. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.projectName">project_name</a></code> | <code>str</code> | Project name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.recipe">recipe</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#recipe DatabrewJob#recipe}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#tags DatabrewJob#tags}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.validationConfigurations">validation_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>]</code> | Data quality rules configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Job name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#name DatabrewJob#name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Role arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#role_arn DatabrewJob#role_arn}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Job type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#type DatabrewJob#type}

---

##### `database_outputs`<sup>Optional</sup> <a name="database_outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.databaseOutputs"></a>

```python
database_outputs: IResolvable | typing.List[DatabrewJobDatabaseOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#database_outputs DatabrewJob#database_outputs}.

---

##### `data_catalog_outputs`<sup>Optional</sup> <a name="data_catalog_outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.dataCatalogOutputs"></a>

```python
data_catalog_outputs: IResolvable | typing.List[DatabrewJobDataCatalogOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#data_catalog_outputs DatabrewJob#data_catalog_outputs}.

---

##### `dataset_name`<sup>Optional</sup> <a name="dataset_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.datasetName"></a>

```python
dataset_name: str
```

- *Type:* str

Dataset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#dataset_name DatabrewJob#dataset_name}

---

##### `encryption_key_arn`<sup>Optional</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.encryptionKeyArn"></a>

```python
encryption_key_arn: str
```

- *Type:* str

Encryption Key Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#encryption_key_arn DatabrewJob#encryption_key_arn}

---

##### `encryption_mode`<sup>Optional</sup> <a name="encryption_mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.encryptionMode"></a>

```python
encryption_mode: str
```

- *Type:* str

Encryption mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#encryption_mode DatabrewJob#encryption_mode}

---

##### `job_sample`<sup>Optional</sup> <a name="job_sample" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.jobSample"></a>

```python
job_sample: DatabrewJobJobSample
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a>

Job Sample.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#job_sample DatabrewJob#job_sample}

---

##### `log_subscription`<sup>Optional</sup> <a name="log_subscription" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.logSubscription"></a>

```python
log_subscription: str
```

- *Type:* str

Log subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#log_subscription DatabrewJob#log_subscription}

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#max_capacity DatabrewJob#max_capacity}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#max_retries DatabrewJob#max_retries}

---

##### `output_location`<sup>Optional</sup> <a name="output_location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.outputLocation"></a>

```python
output_location: DatabrewJobOutputLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a>

Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#output_location DatabrewJob#output_location}

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.outputs"></a>

```python
outputs: IResolvable | typing.List[DatabrewJobOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#outputs DatabrewJob#outputs}.

---

##### `profile_configuration`<sup>Optional</sup> <a name="profile_configuration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.profileConfiguration"></a>

```python
profile_configuration: DatabrewJobProfileConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a>

Profile Job configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#profile_configuration DatabrewJob#profile_configuration}

---

##### `project_name`<sup>Optional</sup> <a name="project_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

Project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#project_name DatabrewJob#project_name}

---

##### `recipe`<sup>Optional</sup> <a name="recipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.recipe"></a>

```python
recipe: DatabrewJobRecipe
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#recipe DatabrewJob#recipe}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DatabrewJobTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#tags DatabrewJob#tags}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#timeout DatabrewJob#timeout}

---

##### `validation_configurations`<sup>Optional</sup> <a name="validation_configurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.validationConfigurations"></a>

```python
validation_configurations: IResolvable | typing.List[DatabrewJobValidationConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>]

Data quality rules configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#validation_configurations DatabrewJob#validation_configurations}

---

### DatabrewJobDatabaseOutputs <a name="DatabrewJobDatabaseOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDatabaseOutputs(
  database_options: DatabrewJobDatabaseOutputsDatabaseOptions = None,
  database_output_mode: str = None,
  glue_connection_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.databaseOptions">database_options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.databaseOutputMode">database_output_mode</a></code> | <code>str</code> | Database table name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.glueConnectionName">glue_connection_name</a></code> | <code>str</code> | Glue connection name. |

---

##### `database_options`<sup>Optional</sup> <a name="database_options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.databaseOptions"></a>

```python
database_options: DatabrewJobDatabaseOutputsDatabaseOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}.

---

##### `database_output_mode`<sup>Optional</sup> <a name="database_output_mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.databaseOutputMode"></a>

```python
database_output_mode: str
```

- *Type:* str

Database table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#database_output_mode DatabrewJob#database_output_mode}

---

##### `glue_connection_name`<sup>Optional</sup> <a name="glue_connection_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.glueConnectionName"></a>

```python
glue_connection_name: str
```

- *Type:* str

Glue connection name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#glue_connection_name DatabrewJob#glue_connection_name}

---

### DatabrewJobDatabaseOutputsDatabaseOptions <a name="DatabrewJobDatabaseOutputsDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions(
  table_name: str = None,
  temp_directory: DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.property.tempDirectory">temp_directory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a></code> | S3 Output location. |

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}.

---

##### `temp_directory`<sup>Optional</sup> <a name="temp_directory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.property.tempDirectory"></a>

```python
temp_directory: DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#temp_directory DatabrewJob#temp_directory}

---

### DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory <a name="DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory(
  bucket: str = None,
  bucket_owner: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobDataCatalogOutputs <a name="DatabrewJobDataCatalogOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDataCatalogOutputs(
  catalog_id: str = None,
  database_name: str = None,
  database_options: DatabrewJobDataCatalogOutputsDatabaseOptions = None,
  overwrite: bool | IResolvable = None,
  s3_options: DatabrewJobDataCatalogOutputsS3Options = None,
  table_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#catalog_id DatabrewJob#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#database_name DatabrewJob#database_name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.databaseOptions">database_options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.overwrite">overwrite</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.s3Options">s3_options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#s3_options DatabrewJob#s3_options}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}. |

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#catalog_id DatabrewJob#catalog_id}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#database_name DatabrewJob#database_name}.

---

##### `database_options`<sup>Optional</sup> <a name="database_options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.databaseOptions"></a>

```python
database_options: DatabrewJobDataCatalogOutputsDatabaseOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}.

---

##### `overwrite`<sup>Optional</sup> <a name="overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.overwrite"></a>

```python
overwrite: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}.

---

##### `s3_options`<sup>Optional</sup> <a name="s3_options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.s3Options"></a>

```python
s3_options: DatabrewJobDataCatalogOutputsS3Options
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#s3_options DatabrewJob#s3_options}.

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}.

---

### DatabrewJobDataCatalogOutputsDatabaseOptions <a name="DatabrewJobDataCatalogOutputsDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions(
  table_name: str = None,
  temp_directory: DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.property.tempDirectory">temp_directory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a></code> | S3 Output location. |

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}.

---

##### `temp_directory`<sup>Optional</sup> <a name="temp_directory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.property.tempDirectory"></a>

```python
temp_directory: DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#temp_directory DatabrewJob#temp_directory}

---

### DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory <a name="DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory(
  bucket: str = None,
  bucket_owner: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobDataCatalogOutputsS3Options <a name="DatabrewJobDataCatalogOutputsS3Options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDataCatalogOutputsS3Options(
  location: DatabrewJobDataCatalogOutputsS3OptionsLocation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a></code> | S3 Output location. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options.property.location"></a>

```python
location: DatabrewJobDataCatalogOutputsS3OptionsLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#location DatabrewJob#location}

---

### DatabrewJobDataCatalogOutputsS3OptionsLocation <a name="DatabrewJobDataCatalogOutputsS3OptionsLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation(
  bucket: str = None,
  bucket_owner: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobJobSample <a name="DatabrewJobJobSample" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobJobSample(
  mode: str = None,
  size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.property.mode">mode</a></code> | <code>str</code> | Sample configuration mode for profile jobs. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Sample configuration size for profile jobs. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.property.mode"></a>

```python
mode: str
```

- *Type:* str

Sample configuration mode for profile jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#mode DatabrewJob#mode}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sample configuration size for profile jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#size DatabrewJob#size}

---

### DatabrewJobOutputLocation <a name="DatabrewJobOutputLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobOutputLocation(
  bucket: str = None,
  bucket_owner: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobOutputs <a name="DatabrewJobOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobOutputs(
  compression_format: str = None,
  format: str = None,
  format_options: DatabrewJobOutputsFormatOptions = None,
  location: DatabrewJobOutputsLocation = None,
  max_output_files: typing.Union[int, float] = None,
  overwrite: bool | IResolvable = None,
  partition_columns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.compressionFormat">compression_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#compression_format DatabrewJob#compression_format}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#format DatabrewJob#format}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.formatOptions">format_options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a></code> | Format options for job Output. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a></code> | S3 Output location. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.maxOutputFiles">max_output_files</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#max_output_files DatabrewJob#max_output_files}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.overwrite">overwrite</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.partitionColumns">partition_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#partition_columns DatabrewJob#partition_columns}. |

---

##### `compression_format`<sup>Optional</sup> <a name="compression_format" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.compressionFormat"></a>

```python
compression_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#compression_format DatabrewJob#compression_format}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#format DatabrewJob#format}.

---

##### `format_options`<sup>Optional</sup> <a name="format_options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.formatOptions"></a>

```python
format_options: DatabrewJobOutputsFormatOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a>

Format options for job Output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#format_options DatabrewJob#format_options}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.location"></a>

```python
location: DatabrewJobOutputsLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#location DatabrewJob#location}

---

##### `max_output_files`<sup>Optional</sup> <a name="max_output_files" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.maxOutputFiles"></a>

```python
max_output_files: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#max_output_files DatabrewJob#max_output_files}.

---

##### `overwrite`<sup>Optional</sup> <a name="overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.overwrite"></a>

```python
overwrite: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}.

---

##### `partition_columns`<sup>Optional</sup> <a name="partition_columns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.partitionColumns"></a>

```python
partition_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#partition_columns DatabrewJob#partition_columns}.

---

### DatabrewJobOutputsFormatOptions <a name="DatabrewJobOutputsFormatOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobOutputsFormatOptions(
  csv: DatabrewJobOutputsFormatOptionsCsv = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a></code> | Output Csv options. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions.property.csv"></a>

```python
csv: DatabrewJobOutputsFormatOptionsCsv
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a>

Output Csv options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#csv DatabrewJob#csv}

---

### DatabrewJobOutputsFormatOptionsCsv <a name="DatabrewJobOutputsFormatOptionsCsv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobOutputsFormatOptionsCsv(
  delimiter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv.property.delimiter">delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#delimiter DatabrewJob#delimiter}. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#delimiter DatabrewJob#delimiter}.

---

### DatabrewJobOutputsLocation <a name="DatabrewJobOutputsLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobOutputsLocation(
  bucket: str = None,
  bucket_owner: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobProfileConfiguration <a name="DatabrewJobProfileConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfiguration(
  column_statistics_configurations: IResolvable | typing.List[DatabrewJobProfileConfigurationColumnStatisticsConfigurations] = None,
  dataset_statistics_configuration: DatabrewJobProfileConfigurationDatasetStatisticsConfiguration = None,
  entity_detector_configuration: DatabrewJobProfileConfigurationEntityDetectorConfiguration = None,
  profile_columns: IResolvable | typing.List[DatabrewJobProfileConfigurationProfileColumns] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.columnStatisticsConfigurations">column_statistics_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#column_statistics_configurations DatabrewJob#column_statistics_configurations}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.datasetStatisticsConfiguration">dataset_statistics_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#dataset_statistics_configuration DatabrewJob#dataset_statistics_configuration}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.entityDetectorConfiguration">entity_detector_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#entity_detector_configuration DatabrewJob#entity_detector_configuration}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.profileColumns">profile_columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#profile_columns DatabrewJob#profile_columns}. |

---

##### `column_statistics_configurations`<sup>Optional</sup> <a name="column_statistics_configurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.columnStatisticsConfigurations"></a>

```python
column_statistics_configurations: IResolvable | typing.List[DatabrewJobProfileConfigurationColumnStatisticsConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#column_statistics_configurations DatabrewJob#column_statistics_configurations}.

---

##### `dataset_statistics_configuration`<sup>Optional</sup> <a name="dataset_statistics_configuration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.datasetStatisticsConfiguration"></a>

```python
dataset_statistics_configuration: DatabrewJobProfileConfigurationDatasetStatisticsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#dataset_statistics_configuration DatabrewJob#dataset_statistics_configuration}.

---

##### `entity_detector_configuration`<sup>Optional</sup> <a name="entity_detector_configuration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.entityDetectorConfiguration"></a>

```python
entity_detector_configuration: DatabrewJobProfileConfigurationEntityDetectorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#entity_detector_configuration DatabrewJob#entity_detector_configuration}.

---

##### `profile_columns`<sup>Optional</sup> <a name="profile_columns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.profileColumns"></a>

```python
profile_columns: IResolvable | typing.List[DatabrewJobProfileConfigurationProfileColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#profile_columns DatabrewJob#profile_columns}.

---

### DatabrewJobProfileConfigurationColumnStatisticsConfigurations <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations(
  selectors: IResolvable | typing.List[DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors] = None,
  statistics: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.property.selectors">selectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#selectors DatabrewJob#selectors}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.property.statistics">statistics</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}. |

---

##### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.property.selectors"></a>

```python
selectors: IResolvable | typing.List[DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#selectors DatabrewJob#selectors}.

---

##### `statistics`<sup>Optional</sup> <a name="statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.property.statistics"></a>

```python
statistics: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}.

---

### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors(
  name: str = None,
  regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#name DatabrewJob#name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.property.regex">regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#regex DatabrewJob#regex}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#name DatabrewJob#name}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.property.regex"></a>

```python
regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#regex DatabrewJob#regex}.

---

### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics(
  included_statistics: typing.List[str] = None,
  overrides: IResolvable | typing.List[DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.property.includedStatistics">included_statistics</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.property.overrides">overrides</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}. |

---

##### `included_statistics`<sup>Optional</sup> <a name="included_statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.property.includedStatistics"></a>

```python
included_statistics: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.property.overrides"></a>

```python
overrides: IResolvable | typing.List[DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}.

---

### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides(
  parameters: typing.Mapping[str] = None,
  statistic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}.

---

### DatabrewJobProfileConfigurationDatasetStatisticsConfiguration <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration(
  included_statistics: typing.List[str] = None,
  overrides: IResolvable | typing.List[DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.property.includedStatistics">included_statistics</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.property.overrides">overrides</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}. |

---

##### `included_statistics`<sup>Optional</sup> <a name="included_statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.property.includedStatistics"></a>

```python
included_statistics: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.property.overrides"></a>

```python
overrides: IResolvable | typing.List[DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}.

---

### DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides(
  parameters: typing.Mapping[str] = None,
  statistic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}.

---

### DatabrewJobProfileConfigurationEntityDetectorConfiguration <a name="DatabrewJobProfileConfigurationEntityDetectorConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration(
  allowed_statistics: DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics = None,
  entity_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.property.allowedStatistics">allowed_statistics</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#allowed_statistics DatabrewJob#allowed_statistics}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.property.entityTypes">entity_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#entity_types DatabrewJob#entity_types}. |

---

##### `allowed_statistics`<sup>Optional</sup> <a name="allowed_statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.property.allowedStatistics"></a>

```python
allowed_statistics: DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#allowed_statistics DatabrewJob#allowed_statistics}.

---

##### `entity_types`<sup>Optional</sup> <a name="entity_types" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.property.entityTypes"></a>

```python
entity_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#entity_types DatabrewJob#entity_types}.

---

### DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics <a name="DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics(
  statistics: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics.property.statistics">statistics</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}. |

---

##### `statistics`<sup>Optional</sup> <a name="statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics.property.statistics"></a>

```python
statistics: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}.

---

### DatabrewJobProfileConfigurationProfileColumns <a name="DatabrewJobProfileConfigurationProfileColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationProfileColumns(
  name: str = None,
  regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#name DatabrewJob#name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.property.regex">regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#regex DatabrewJob#regex}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#name DatabrewJob#name}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.property.regex"></a>

```python
regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#regex DatabrewJob#regex}.

---

### DatabrewJobRecipe <a name="DatabrewJobRecipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobRecipe(
  name: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.property.name">name</a></code> | <code>str</code> | Recipe name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.property.version">version</a></code> | <code>str</code> | Recipe version. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.property.name"></a>

```python
name: str
```

- *Type:* str

Recipe name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#name DatabrewJob#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.property.version"></a>

```python
version: str
```

- *Type:* str

Recipe version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#version DatabrewJob#version}

---

### DatabrewJobTags <a name="DatabrewJobTags" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTags.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#key DatabrewJob#key}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#value DatabrewJob#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#value DatabrewJob#value}.

---

### DatabrewJobValidationConfigurations <a name="DatabrewJobValidationConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobValidationConfigurations(
  ruleset_arn: str = None,
  validation_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.property.rulesetArn">ruleset_arn</a></code> | <code>str</code> | Arn of the Ruleset. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.property.validationMode">validation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#validation_mode DatabrewJob#validation_mode}. |

---

##### `ruleset_arn`<sup>Optional</sup> <a name="ruleset_arn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.property.rulesetArn"></a>

```python
ruleset_arn: str
```

- *Type:* str

Arn of the Ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#ruleset_arn DatabrewJob#ruleset_arn}

---

##### `validation_mode`<sup>Optional</sup> <a name="validation_mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.property.validationMode"></a>

```python
validation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#validation_mode DatabrewJob#validation_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference <a name="DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.putTempDirectory">put_temp_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resetTempDirectory">reset_temp_directory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_temp_directory` <a name="put_temp_directory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.putTempDirectory"></a>

```python
def put_temp_directory(
  bucket: str = None,
  bucket_owner: str = None,
  key: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.putTempDirectory.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

###### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.putTempDirectory.parameter.bucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.putTempDirectory.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```

##### `reset_temp_directory` <a name="reset_temp_directory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resetTempDirectory"></a>

```python
def reset_temp_directory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectory">temp_directory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectoryInput">temp_directory_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `temp_directory`<sup>Required</sup> <a name="temp_directory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectory"></a>

```python
temp_directory: DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference</a>

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `temp_directory_input`<sup>Optional</sup> <a name="temp_directory_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectoryInput"></a>

```python
temp_directory_input: IResolvable | DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobDatabaseOutputsDatabaseOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a>

---


### DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference <a name="DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucketOwner">reset_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_bucket_owner` <a name="reset_bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucketOwner"></a>

```python
def reset_bucket_owner() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwnerInput">bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bucket_owner_input`<sup>Optional</sup> <a name="bucket_owner_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwnerInput"></a>

```python
bucket_owner_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_owner`<sup>Required</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

---


### DatabrewJobDatabaseOutputsList <a name="DatabrewJobDatabaseOutputsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDatabaseOutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabrewJobDatabaseOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatabrewJobDatabaseOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>]

---


### DatabrewJobDatabaseOutputsOutputReference <a name="DatabrewJobDatabaseOutputsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDatabaseOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.putDatabaseOptions">put_database_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetDatabaseOptions">reset_database_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetDatabaseOutputMode">reset_database_output_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetGlueConnectionName">reset_glue_connection_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_database_options` <a name="put_database_options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.putDatabaseOptions"></a>

```python
def put_database_options(
  table_name: str = None,
  temp_directory: DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory = None
) -> None
```

###### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.putDatabaseOptions.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}.

---

###### `temp_directory`<sup>Optional</sup> <a name="temp_directory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.putDatabaseOptions.parameter.tempDirectory"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#temp_directory DatabrewJob#temp_directory}

---

##### `reset_database_options` <a name="reset_database_options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetDatabaseOptions"></a>

```python
def reset_database_options() -> None
```

##### `reset_database_output_mode` <a name="reset_database_output_mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetDatabaseOutputMode"></a>

```python
def reset_database_output_mode() -> None
```

##### `reset_glue_connection_name` <a name="reset_glue_connection_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetGlueConnectionName"></a>

```python
def reset_glue_connection_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOptions">database_options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference">DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOptionsInput">database_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOutputModeInput">database_output_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.glueConnectionNameInput">glue_connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOutputMode">database_output_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.glueConnectionName">glue_connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_options`<sup>Required</sup> <a name="database_options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOptions"></a>

```python
database_options: DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference">DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference</a>

---

##### `database_options_input`<sup>Optional</sup> <a name="database_options_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOptionsInput"></a>

```python
database_options_input: IResolvable | DatabrewJobDatabaseOutputsDatabaseOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a>

---

##### `database_output_mode_input`<sup>Optional</sup> <a name="database_output_mode_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOutputModeInput"></a>

```python
database_output_mode_input: str
```

- *Type:* str

---

##### `glue_connection_name_input`<sup>Optional</sup> <a name="glue_connection_name_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.glueConnectionNameInput"></a>

```python
glue_connection_name_input: str
```

- *Type:* str

---

##### `database_output_mode`<sup>Required</sup> <a name="database_output_mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOutputMode"></a>

```python
database_output_mode: str
```

- *Type:* str

---

##### `glue_connection_name`<sup>Required</sup> <a name="glue_connection_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.glueConnectionName"></a>

```python
glue_connection_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobDatabaseOutputs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>

---


### DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference <a name="DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.putTempDirectory">put_temp_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resetTempDirectory">reset_temp_directory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_temp_directory` <a name="put_temp_directory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.putTempDirectory"></a>

```python
def put_temp_directory(
  bucket: str = None,
  bucket_owner: str = None,
  key: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.putTempDirectory.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

###### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.putTempDirectory.parameter.bucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.putTempDirectory.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```

##### `reset_temp_directory` <a name="reset_temp_directory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resetTempDirectory"></a>

```python
def reset_temp_directory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectory">temp_directory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectoryInput">temp_directory_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `temp_directory`<sup>Required</sup> <a name="temp_directory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectory"></a>

```python
temp_directory: DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference</a>

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `temp_directory_input`<sup>Optional</sup> <a name="temp_directory_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectoryInput"></a>

```python
temp_directory_input: IResolvable | DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobDataCatalogOutputsDatabaseOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a>

---


### DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference <a name="DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucketOwner">reset_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_bucket_owner` <a name="reset_bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucketOwner"></a>

```python
def reset_bucket_owner() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwnerInput">bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bucket_owner_input`<sup>Optional</sup> <a name="bucket_owner_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwnerInput"></a>

```python
bucket_owner_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_owner`<sup>Required</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

---


### DatabrewJobDataCatalogOutputsList <a name="DatabrewJobDataCatalogOutputsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDataCatalogOutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabrewJobDataCatalogOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatabrewJobDataCatalogOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>]

---


### DatabrewJobDataCatalogOutputsOutputReference <a name="DatabrewJobDataCatalogOutputsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDataCatalogOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putDatabaseOptions">put_database_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putS3Options">put_s3_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetDatabaseOptions">reset_database_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetOverwrite">reset_overwrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetS3Options">reset_s3_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_database_options` <a name="put_database_options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putDatabaseOptions"></a>

```python
def put_database_options(
  table_name: str = None,
  temp_directory: DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory = None
) -> None
```

###### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putDatabaseOptions.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}.

---

###### `temp_directory`<sup>Optional</sup> <a name="temp_directory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putDatabaseOptions.parameter.tempDirectory"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#temp_directory DatabrewJob#temp_directory}

---

##### `put_s3_options` <a name="put_s3_options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putS3Options"></a>

```python
def put_s3_options(
  location: DatabrewJobDataCatalogOutputsS3OptionsLocation = None
) -> None
```

###### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putS3Options.parameter.location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#location DatabrewJob#location}

---

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_database_options` <a name="reset_database_options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetDatabaseOptions"></a>

```python
def reset_database_options() -> None
```

##### `reset_overwrite` <a name="reset_overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetOverwrite"></a>

```python
def reset_overwrite() -> None
```

##### `reset_s3_options` <a name="reset_s3_options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetS3Options"></a>

```python
def reset_s3_options() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseOptions">database_options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference">DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.s3Options">s3_options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference">DatabrewJobDataCatalogOutputsS3OptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseOptionsInput">database_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.overwriteInput">overwrite_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.s3OptionsInput">s3_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.overwrite">overwrite</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_options`<sup>Required</sup> <a name="database_options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseOptions"></a>

```python
database_options: DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference">DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference</a>

---

##### `s3_options`<sup>Required</sup> <a name="s3_options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.s3Options"></a>

```python
s3_options: DatabrewJobDataCatalogOutputsS3OptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference">DatabrewJobDataCatalogOutputsS3OptionsOutputReference</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `database_options_input`<sup>Optional</sup> <a name="database_options_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseOptionsInput"></a>

```python
database_options_input: IResolvable | DatabrewJobDataCatalogOutputsDatabaseOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a>

---

##### `overwrite_input`<sup>Optional</sup> <a name="overwrite_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.overwriteInput"></a>

```python
overwrite_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `s3_options_input`<sup>Optional</sup> <a name="s3_options_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.s3OptionsInput"></a>

```python
s3_options_input: IResolvable | DatabrewJobDataCatalogOutputsS3Options
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a>

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `overwrite`<sup>Required</sup> <a name="overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.overwrite"></a>

```python
overwrite: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobDataCatalogOutputs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>

---


### DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference <a name="DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetBucketOwner">reset_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_bucket_owner` <a name="reset_bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetBucketOwner"></a>

```python
def reset_bucket_owner() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwnerInput">bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bucket_owner_input`<sup>Optional</sup> <a name="bucket_owner_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwnerInput"></a>

```python
bucket_owner_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_owner`<sup>Required</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobDataCatalogOutputsS3OptionsLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a>

---


### DatabrewJobDataCatalogOutputsS3OptionsOutputReference <a name="DatabrewJobDataCatalogOutputsS3OptionsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.putLocation">put_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resetLocation">reset_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_location` <a name="put_location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.putLocation"></a>

```python
def put_location(
  bucket: str = None,
  bucket_owner: str = None,
  key: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.putLocation.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

###### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.putLocation.parameter.bucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.putLocation.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

##### `reset_location` <a name="reset_location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference">DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.locationInput">location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.location"></a>

```python
location: DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference">DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.locationInput"></a>

```python
location_input: IResolvable | DatabrewJobDataCatalogOutputsS3OptionsLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobDataCatalogOutputsS3Options
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a>

---


### DatabrewJobJobSampleOutputReference <a name="DatabrewJobJobSampleOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobJobSampleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resetSize">reset_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resetSize"></a>

```python
def reset_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobJobSample
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a>

---


### DatabrewJobOutputLocationOutputReference <a name="DatabrewJobOutputLocationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobOutputLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetBucketOwner">reset_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_bucket_owner` <a name="reset_bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetBucketOwner"></a>

```python
def reset_bucket_owner() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketOwnerInput">bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bucket_owner_input`<sup>Optional</sup> <a name="bucket_owner_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketOwnerInput"></a>

```python
bucket_owner_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_owner`<sup>Required</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobOutputLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a>

---


### DatabrewJobOutputsFormatOptionsCsvOutputReference <a name="DatabrewJobOutputsFormatOptionsCsvOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resetDelimiter">reset_delimiter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delimiter` <a name="reset_delimiter" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resetDelimiter"></a>

```python
def reset_delimiter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiterInput">delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delimiter_input`<sup>Optional</sup> <a name="delimiter_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiterInput"></a>

```python
delimiter_input: str
```

- *Type:* str

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobOutputsFormatOptionsCsv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a>

---


### DatabrewJobOutputsFormatOptionsOutputReference <a name="DatabrewJobOutputsFormatOptionsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobOutputsFormatOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.putCsv">put_csv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resetCsv">reset_csv</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_csv` <a name="put_csv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.putCsv"></a>

```python
def put_csv(
  delimiter: str = None
) -> None
```

###### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.putCsv.parameter.delimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#delimiter DatabrewJob#delimiter}.

---

##### `reset_csv` <a name="reset_csv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resetCsv"></a>

```python
def reset_csv() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference">DatabrewJobOutputsFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.csvInput">csv_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.csv"></a>

```python
csv: DatabrewJobOutputsFormatOptionsCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference">DatabrewJobOutputsFormatOptionsCsvOutputReference</a>

---

##### `csv_input`<sup>Optional</sup> <a name="csv_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.csvInput"></a>

```python
csv_input: IResolvable | DatabrewJobOutputsFormatOptionsCsv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobOutputsFormatOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a>

---


### DatabrewJobOutputsList <a name="DatabrewJobOutputsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobOutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabrewJobOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatabrewJobOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>]

---


### DatabrewJobOutputsLocationOutputReference <a name="DatabrewJobOutputsLocationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobOutputsLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetBucketOwner">reset_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_bucket_owner` <a name="reset_bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetBucketOwner"></a>

```python
def reset_bucket_owner() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketOwnerInput">bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bucket_owner_input`<sup>Optional</sup> <a name="bucket_owner_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketOwnerInput"></a>

```python
bucket_owner_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_owner`<sup>Required</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobOutputsLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a>

---


### DatabrewJobOutputsOutputReference <a name="DatabrewJobOutputsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putFormatOptions">put_format_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putLocation">put_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetCompressionFormat">reset_compression_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetFormatOptions">reset_format_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetMaxOutputFiles">reset_max_output_files</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetOverwrite">reset_overwrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetPartitionColumns">reset_partition_columns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_format_options` <a name="put_format_options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putFormatOptions"></a>

```python
def put_format_options(
  csv: DatabrewJobOutputsFormatOptionsCsv = None
) -> None
```

###### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putFormatOptions.parameter.csv"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a>

Output Csv options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#csv DatabrewJob#csv}

---

##### `put_location` <a name="put_location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putLocation"></a>

```python
def put_location(
  bucket: str = None,
  bucket_owner: str = None,
  key: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putLocation.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

###### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putLocation.parameter.bucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putLocation.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

##### `reset_compression_format` <a name="reset_compression_format" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetCompressionFormat"></a>

```python
def reset_compression_format() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_format_options` <a name="reset_format_options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetFormatOptions"></a>

```python
def reset_format_options() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_max_output_files` <a name="reset_max_output_files" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetMaxOutputFiles"></a>

```python
def reset_max_output_files() -> None
```

##### `reset_overwrite` <a name="reset_overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetOverwrite"></a>

```python
def reset_overwrite() -> None
```

##### `reset_partition_columns` <a name="reset_partition_columns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetPartitionColumns"></a>

```python
def reset_partition_columns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatOptions">format_options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference">DatabrewJobOutputsFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference">DatabrewJobOutputsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.compressionFormatInput">compression_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatOptionsInput">format_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.locationInput">location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.maxOutputFilesInput">max_output_files_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.overwriteInput">overwrite_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.partitionColumnsInput">partition_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.compressionFormat">compression_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.maxOutputFiles">max_output_files</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.overwrite">overwrite</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.partitionColumns">partition_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format_options`<sup>Required</sup> <a name="format_options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatOptions"></a>

```python
format_options: DatabrewJobOutputsFormatOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference">DatabrewJobOutputsFormatOptionsOutputReference</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.location"></a>

```python
location: DatabrewJobOutputsLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference">DatabrewJobOutputsLocationOutputReference</a>

---

##### `compression_format_input`<sup>Optional</sup> <a name="compression_format_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.compressionFormatInput"></a>

```python
compression_format_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `format_options_input`<sup>Optional</sup> <a name="format_options_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatOptionsInput"></a>

```python
format_options_input: IResolvable | DatabrewJobOutputsFormatOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.locationInput"></a>

```python
location_input: IResolvable | DatabrewJobOutputsLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a>

---

##### `max_output_files_input`<sup>Optional</sup> <a name="max_output_files_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.maxOutputFilesInput"></a>

```python
max_output_files_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `overwrite_input`<sup>Optional</sup> <a name="overwrite_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.overwriteInput"></a>

```python
overwrite_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `partition_columns_input`<sup>Optional</sup> <a name="partition_columns_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.partitionColumnsInput"></a>

```python
partition_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compression_format`<sup>Required</sup> <a name="compression_format" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.compressionFormat"></a>

```python
compression_format: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `max_output_files`<sup>Required</sup> <a name="max_output_files" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.maxOutputFiles"></a>

```python
max_output_files: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `overwrite`<sup>Required</sup> <a name="overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.overwrite"></a>

```python
overwrite: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `partition_columns`<sup>Required</sup> <a name="partition_columns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.partitionColumns"></a>

```python
partition_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobOutputs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatabrewJobProfileConfigurationColumnStatisticsConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>]

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putSelectors">put_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putStatistics">put_statistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resetSelectors">reset_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resetStatistics">reset_statistics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_selectors` <a name="put_selectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putSelectors"></a>

```python
def put_selectors(
  value: IResolvable | typing.List[DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>]

---

##### `put_statistics` <a name="put_statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putStatistics"></a>

```python
def put_statistics(
  included_statistics: typing.List[str] = None,
  overrides: IResolvable | typing.List[DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides] = None
) -> None
```

###### `included_statistics`<sup>Optional</sup> <a name="included_statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putStatistics.parameter.includedStatistics"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}.

---

###### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putStatistics.parameter.overrides"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}.

---

##### `reset_selectors` <a name="reset_selectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resetSelectors"></a>

```python
def reset_selectors() -> None
```

##### `reset_statistics` <a name="reset_statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resetStatistics"></a>

```python
def reset_statistics() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statistics">statistics</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectorsInput">selectors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statisticsInput">statistics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectors"></a>

```python
selectors: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList</a>

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statistics"></a>

```python
statistics: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference</a>

---

##### `selectors_input`<sup>Optional</sup> <a name="selectors_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectorsInput"></a>

```python
selectors_input: IResolvable | typing.List[DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>]

---

##### `statistics_input`<sup>Optional</sup> <a name="statistics_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statisticsInput"></a>

```python
statistics_input: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>]

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.putOverrides">put_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resetIncludedStatistics">reset_included_statistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resetOverrides">reset_overrides</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_overrides` <a name="put_overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.putOverrides"></a>

```python
def put_overrides(
  value: IResolvable | typing.List[DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.putOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>]

---

##### `reset_included_statistics` <a name="reset_included_statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resetIncludedStatistics"></a>

```python
def reset_included_statistics() -> None
```

##### `reset_overrides` <a name="reset_overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resetOverrides"></a>

```python
def reset_overrides() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatisticsInput">included_statistics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overridesInput">overrides_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatistics">included_statistics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overrides"></a>

```python
overrides: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList</a>

---

##### `included_statistics_input`<sup>Optional</sup> <a name="included_statistics_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatisticsInput"></a>

```python
included_statistics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `overrides_input`<sup>Optional</sup> <a name="overrides_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overridesInput"></a>

```python
overrides_input: IResolvable | typing.List[DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>]

---

##### `included_statistics`<sup>Required</sup> <a name="included_statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatistics"></a>

```python
included_statistics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>]

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resetStatistic">reset_statistic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_statistic` <a name="reset_statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resetStatistic"></a>

```python
def reset_statistic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>

---


### DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.putOverrides">put_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resetIncludedStatistics">reset_included_statistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resetOverrides">reset_overrides</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_overrides` <a name="put_overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.putOverrides"></a>

```python
def put_overrides(
  value: IResolvable | typing.List[DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.putOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>]

---

##### `reset_included_statistics` <a name="reset_included_statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resetIncludedStatistics"></a>

```python
def reset_included_statistics() -> None
```

##### `reset_overrides` <a name="reset_overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resetOverrides"></a>

```python
def reset_overrides() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatisticsInput">included_statistics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overridesInput">overrides_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatistics">included_statistics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overrides"></a>

```python
overrides: DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList</a>

---

##### `included_statistics_input`<sup>Optional</sup> <a name="included_statistics_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatisticsInput"></a>

```python
included_statistics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `overrides_input`<sup>Optional</sup> <a name="overrides_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overridesInput"></a>

```python
overrides_input: IResolvable | typing.List[DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>]

---

##### `included_statistics`<sup>Required</sup> <a name="included_statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatistics"></a>

```python
included_statistics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobProfileConfigurationDatasetStatisticsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

---


### DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>]

---


### DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resetStatistic">reset_statistic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_statistic` <a name="reset_statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resetStatistic"></a>

```python
def reset_statistic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>

---


### DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference <a name="DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resetStatistics">reset_statistics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_statistics` <a name="reset_statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resetStatistics"></a>

```python
def reset_statistics() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statisticsInput">statistics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statistics">statistics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `statistics_input`<sup>Optional</sup> <a name="statistics_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statisticsInput"></a>

```python
statistics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statistics"></a>

```python
statistics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

---


### DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference <a name="DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.putAllowedStatistics">put_allowed_statistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resetAllowedStatistics">reset_allowed_statistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resetEntityTypes">reset_entity_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allowed_statistics` <a name="put_allowed_statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.putAllowedStatistics"></a>

```python
def put_allowed_statistics(
  statistics: typing.List[str] = None
) -> None
```

###### `statistics`<sup>Optional</sup> <a name="statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.putAllowedStatistics.parameter.statistics"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}.

---

##### `reset_allowed_statistics` <a name="reset_allowed_statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resetAllowedStatistics"></a>

```python
def reset_allowed_statistics() -> None
```

##### `reset_entity_types` <a name="reset_entity_types" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resetEntityTypes"></a>

```python
def reset_entity_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatistics">allowed_statistics</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatisticsInput">allowed_statistics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypesInput">entity_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypes">entity_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_statistics`<sup>Required</sup> <a name="allowed_statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatistics"></a>

```python
allowed_statistics: DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference</a>

---

##### `allowed_statistics_input`<sup>Optional</sup> <a name="allowed_statistics_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatisticsInput"></a>

```python
allowed_statistics_input: IResolvable | DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

---

##### `entity_types_input`<sup>Optional</sup> <a name="entity_types_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypesInput"></a>

```python
entity_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entity_types`<sup>Required</sup> <a name="entity_types" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypes"></a>

```python
entity_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobProfileConfigurationEntityDetectorConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

---


### DatabrewJobProfileConfigurationOutputReference <a name="DatabrewJobProfileConfigurationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putColumnStatisticsConfigurations">put_column_statistics_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putDatasetStatisticsConfiguration">put_dataset_statistics_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putEntityDetectorConfiguration">put_entity_detector_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putProfileColumns">put_profile_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetColumnStatisticsConfigurations">reset_column_statistics_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetDatasetStatisticsConfiguration">reset_dataset_statistics_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetEntityDetectorConfiguration">reset_entity_detector_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetProfileColumns">reset_profile_columns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column_statistics_configurations` <a name="put_column_statistics_configurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putColumnStatisticsConfigurations"></a>

```python
def put_column_statistics_configurations(
  value: IResolvable | typing.List[DatabrewJobProfileConfigurationColumnStatisticsConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putColumnStatisticsConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>]

---

##### `put_dataset_statistics_configuration` <a name="put_dataset_statistics_configuration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putDatasetStatisticsConfiguration"></a>

```python
def put_dataset_statistics_configuration(
  included_statistics: typing.List[str] = None,
  overrides: IResolvable | typing.List[DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides] = None
) -> None
```

###### `included_statistics`<sup>Optional</sup> <a name="included_statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putDatasetStatisticsConfiguration.parameter.includedStatistics"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}.

---

###### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putDatasetStatisticsConfiguration.parameter.overrides"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}.

---

##### `put_entity_detector_configuration` <a name="put_entity_detector_configuration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putEntityDetectorConfiguration"></a>

```python
def put_entity_detector_configuration(
  allowed_statistics: DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics = None,
  entity_types: typing.List[str] = None
) -> None
```

###### `allowed_statistics`<sup>Optional</sup> <a name="allowed_statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putEntityDetectorConfiguration.parameter.allowedStatistics"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#allowed_statistics DatabrewJob#allowed_statistics}.

---

###### `entity_types`<sup>Optional</sup> <a name="entity_types" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putEntityDetectorConfiguration.parameter.entityTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_job#entity_types DatabrewJob#entity_types}.

---

##### `put_profile_columns` <a name="put_profile_columns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putProfileColumns"></a>

```python
def put_profile_columns(
  value: IResolvable | typing.List[DatabrewJobProfileConfigurationProfileColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putProfileColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>]

---

##### `reset_column_statistics_configurations` <a name="reset_column_statistics_configurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetColumnStatisticsConfigurations"></a>

```python
def reset_column_statistics_configurations() -> None
```

##### `reset_dataset_statistics_configuration` <a name="reset_dataset_statistics_configuration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetDatasetStatisticsConfiguration"></a>

```python
def reset_dataset_statistics_configuration() -> None
```

##### `reset_entity_detector_configuration` <a name="reset_entity_detector_configuration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetEntityDetectorConfiguration"></a>

```python
def reset_entity_detector_configuration() -> None
```

##### `reset_profile_columns` <a name="reset_profile_columns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetProfileColumns"></a>

```python
def reset_profile_columns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurations">column_statistics_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfiguration">dataset_statistics_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfiguration">entity_detector_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference">DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.profileColumns">profile_columns</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList">DatabrewJobProfileConfigurationProfileColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurationsInput">column_statistics_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfigurationInput">dataset_statistics_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfigurationInput">entity_detector_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.profileColumnsInput">profile_columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_statistics_configurations`<sup>Required</sup> <a name="column_statistics_configurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurations"></a>

```python
column_statistics_configurations: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList</a>

---

##### `dataset_statistics_configuration`<sup>Required</sup> <a name="dataset_statistics_configuration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfiguration"></a>

```python
dataset_statistics_configuration: DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference</a>

---

##### `entity_detector_configuration`<sup>Required</sup> <a name="entity_detector_configuration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfiguration"></a>

```python
entity_detector_configuration: DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference">DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference</a>

---

##### `profile_columns`<sup>Required</sup> <a name="profile_columns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.profileColumns"></a>

```python
profile_columns: DatabrewJobProfileConfigurationProfileColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList">DatabrewJobProfileConfigurationProfileColumnsList</a>

---

##### `column_statistics_configurations_input`<sup>Optional</sup> <a name="column_statistics_configurations_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurationsInput"></a>

```python
column_statistics_configurations_input: IResolvable | typing.List[DatabrewJobProfileConfigurationColumnStatisticsConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>]

---

##### `dataset_statistics_configuration_input`<sup>Optional</sup> <a name="dataset_statistics_configuration_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfigurationInput"></a>

```python
dataset_statistics_configuration_input: IResolvable | DatabrewJobProfileConfigurationDatasetStatisticsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

---

##### `entity_detector_configuration_input`<sup>Optional</sup> <a name="entity_detector_configuration_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfigurationInput"></a>

```python
entity_detector_configuration_input: IResolvable | DatabrewJobProfileConfigurationEntityDetectorConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

---

##### `profile_columns_input`<sup>Optional</sup> <a name="profile_columns_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.profileColumnsInput"></a>

```python
profile_columns_input: IResolvable | typing.List[DatabrewJobProfileConfigurationProfileColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobProfileConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a>

---


### DatabrewJobProfileConfigurationProfileColumnsList <a name="DatabrewJobProfileConfigurationProfileColumnsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationProfileColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabrewJobProfileConfigurationProfileColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatabrewJobProfileConfigurationProfileColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>]

---


### DatabrewJobProfileConfigurationProfileColumnsOutputReference <a name="DatabrewJobProfileConfigurationProfileColumnsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobProfileConfigurationProfileColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>

---


### DatabrewJobRecipeOutputReference <a name="DatabrewJobRecipeOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobRecipeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobRecipe
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a>

---


### DatabrewJobTagsList <a name="DatabrewJobTagsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabrewJobTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatabrewJobTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>]

---


### DatabrewJobTagsOutputReference <a name="DatabrewJobTagsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>

---


### DatabrewJobValidationConfigurationsList <a name="DatabrewJobValidationConfigurationsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobValidationConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabrewJobValidationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatabrewJobValidationConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>]

---


### DatabrewJobValidationConfigurationsOutputReference <a name="DatabrewJobValidationConfigurationsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_job

databrewJob.DatabrewJobValidationConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resetRulesetArn">reset_ruleset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resetValidationMode">reset_validation_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ruleset_arn` <a name="reset_ruleset_arn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resetRulesetArn"></a>

```python
def reset_ruleset_arn() -> None
```

##### `reset_validation_mode` <a name="reset_validation_mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resetValidationMode"></a>

```python
def reset_validation_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.rulesetArnInput">ruleset_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.validationModeInput">validation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.rulesetArn">ruleset_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.validationMode">validation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ruleset_arn_input`<sup>Optional</sup> <a name="ruleset_arn_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.rulesetArnInput"></a>

```python
ruleset_arn_input: str
```

- *Type:* str

---

##### `validation_mode_input`<sup>Optional</sup> <a name="validation_mode_input" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.validationModeInput"></a>

```python
validation_mode_input: str
```

- *Type:* str

---

##### `ruleset_arn`<sup>Required</sup> <a name="ruleset_arn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.rulesetArn"></a>

```python
ruleset_arn: str
```

- *Type:* str

---

##### `validation_mode`<sup>Required</sup> <a name="validation_mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.validationMode"></a>

```python
validation_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewJobValidationConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>

---



