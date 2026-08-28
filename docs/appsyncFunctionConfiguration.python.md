# `appsyncFunctionConfiguration` Submodule <a name="`appsyncFunctionConfiguration` Submodule" id="@cdktn/provider-awscc.appsyncFunctionConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncFunctionConfiguration <a name="AppsyncFunctionConfiguration" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration awscc_appsync_function_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_function_configuration

appsyncFunctionConfiguration.AppsyncFunctionConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_id: str,
  data_source_name: str,
  name: str,
  code: str = None,
  code_s3_location: str = None,
  description: str = None,
  function_version: str = None,
  max_batch_size: typing.Union[int, float] = None,
  request_mapping_template: str = None,
  request_mapping_template_s3_location: str = None,
  response_mapping_template: str = None,
  response_mapping_template_s3_location: str = None,
  runtime: AppsyncFunctionConfigurationRuntime = None,
  sync_config: AppsyncFunctionConfigurationSyncConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.apiId">api_id</a></code> | <code>str</code> | The AWS AppSync GraphQL API that you want to attach using this function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.dataSourceName">data_source_name</a></code> | <code>str</code> | The name of data source this function will attach. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.code">code</a></code> | <code>str</code> | The resolver code that contains the request and response functions. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.codeS3Location">code_s3_location</a></code> | <code>str</code> | The Amazon S3 endpoint (where the code is located??). |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.description">description</a></code> | <code>str</code> | The function description. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.functionVersion">function_version</a></code> | <code>str</code> | The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.maxBatchSize">max_batch_size</a></code> | <code>typing.Union[int, float]</code> | The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a BatchInvoke operation. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.requestMappingTemplate">request_mapping_template</a></code> | <code>str</code> | The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.requestMappingTemplateS3Location">request_mapping_template_s3_location</a></code> | <code>str</code> | Describes a Sync configuration for a resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.responseMappingTemplate">response_mapping_template</a></code> | <code>str</code> | The Function response mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.responseMappingTemplateS3Location">response_mapping_template_s3_location</a></code> | <code>str</code> | The location of a response mapping template in an Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.runtime">runtime</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a></code> | Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.syncConfig">sync_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a></code> | Describes a Sync configuration for a resolver. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.apiId"></a>

- *Type:* str

The AWS AppSync GraphQL API that you want to attach using this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#api_id AppsyncFunctionConfiguration#api_id}

---

##### `data_source_name`<sup>Required</sup> <a name="data_source_name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.dataSourceName"></a>

- *Type:* str

The name of data source this function will attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#data_source_name AppsyncFunctionConfiguration#data_source_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.name"></a>

- *Type:* str

The name of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#name AppsyncFunctionConfiguration#name}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.code"></a>

- *Type:* str

The resolver code that contains the request and response functions.

When code is used, the runtime is required. The runtime value must be APPSYNC_JS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#code AppsyncFunctionConfiguration#code}

---

##### `code_s3_location`<sup>Optional</sup> <a name="code_s3_location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.codeS3Location"></a>

- *Type:* str

The Amazon S3 endpoint (where the code is located??).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#code_s3_location AppsyncFunctionConfiguration#code_s3_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.description"></a>

- *Type:* str

The function description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#description AppsyncFunctionConfiguration#description}

---

##### `function_version`<sup>Optional</sup> <a name="function_version" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.functionVersion"></a>

- *Type:* str

The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#function_version AppsyncFunctionConfiguration#function_version}

---

##### `max_batch_size`<sup>Optional</sup> <a name="max_batch_size" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.maxBatchSize"></a>

- *Type:* typing.Union[int, float]

The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a BatchInvoke operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#max_batch_size AppsyncFunctionConfiguration#max_batch_size}

---

##### `request_mapping_template`<sup>Optional</sup> <a name="request_mapping_template" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.requestMappingTemplate"></a>

- *Type:* str

The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#request_mapping_template AppsyncFunctionConfiguration#request_mapping_template}

---

##### `request_mapping_template_s3_location`<sup>Optional</sup> <a name="request_mapping_template_s3_location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.requestMappingTemplateS3Location"></a>

- *Type:* str

Describes a Sync configuration for a resolver.

Contains information on which Conflict Detection, as well as Resolution strategy, should be performed when the resolver is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#request_mapping_template_s3_location AppsyncFunctionConfiguration#request_mapping_template_s3_location}

---

##### `response_mapping_template`<sup>Optional</sup> <a name="response_mapping_template" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.responseMappingTemplate"></a>

- *Type:* str

The Function response mapping template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#response_mapping_template AppsyncFunctionConfiguration#response_mapping_template}

---

##### `response_mapping_template_s3_location`<sup>Optional</sup> <a name="response_mapping_template_s3_location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.responseMappingTemplateS3Location"></a>

- *Type:* str

The location of a response mapping template in an Amazon S3 bucket.

Use this if you want to provision with a template file in Amazon S3 rather than embedding it in your CloudFormation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#response_mapping_template_s3_location AppsyncFunctionConfiguration#response_mapping_template_s3_location}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.runtime"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a>

Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function.

Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#runtime AppsyncFunctionConfiguration#runtime}

---

##### `sync_config`<sup>Optional</sup> <a name="sync_config" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.syncConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a>

Describes a Sync configuration for a resolver.

Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#sync_config AppsyncFunctionConfiguration#sync_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putRuntime">put_runtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putSyncConfig">put_sync_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetCodeS3Location">reset_code_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetFunctionVersion">reset_function_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetMaxBatchSize">reset_max_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRequestMappingTemplate">reset_request_mapping_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRequestMappingTemplateS3Location">reset_request_mapping_template_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetResponseMappingTemplate">reset_response_mapping_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetResponseMappingTemplateS3Location">reset_response_mapping_template_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRuntime">reset_runtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetSyncConfig">reset_sync_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_runtime` <a name="put_runtime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putRuntime"></a>

```python
def put_runtime(
  name: str = None,
  runtime_version: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putRuntime.parameter.name"></a>

- *Type:* str

The name of the runtime to use. Currently, the only allowed value is APPSYNC_JS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#name AppsyncFunctionConfiguration#name}

---

###### `runtime_version`<sup>Optional</sup> <a name="runtime_version" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putRuntime.parameter.runtimeVersion"></a>

- *Type:* str

The version of the runtime to use. Currently, the only allowed version is 1.0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#runtime_version AppsyncFunctionConfiguration#runtime_version}

---

##### `put_sync_config` <a name="put_sync_config" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putSyncConfig"></a>

```python
def put_sync_config(
  conflict_detection: str = None,
  conflict_handler: str = None,
  lambda_conflict_handler_config: AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig = None
) -> None
```

###### `conflict_detection`<sup>Optional</sup> <a name="conflict_detection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putSyncConfig.parameter.conflictDetection"></a>

- *Type:* str

The Conflict Detection strategy to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#conflict_detection AppsyncFunctionConfiguration#conflict_detection}

---

###### `conflict_handler`<sup>Optional</sup> <a name="conflict_handler" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putSyncConfig.parameter.conflictHandler"></a>

- *Type:* str

The Conflict Resolution strategy to perform in the event of a conflict.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#conflict_handler AppsyncFunctionConfiguration#conflict_handler}

---

###### `lambda_conflict_handler_config`<sup>Optional</sup> <a name="lambda_conflict_handler_config" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putSyncConfig.parameter.lambdaConflictHandlerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a>

The LambdaConflictHandlerConfig when configuring LAMBDA as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#lambda_conflict_handler_config AppsyncFunctionConfiguration#lambda_conflict_handler_config}

---

##### `reset_code` <a name="reset_code" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_code_s3_location` <a name="reset_code_s3_location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetCodeS3Location"></a>

```python
def reset_code_s3_location() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_function_version` <a name="reset_function_version" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetFunctionVersion"></a>

```python
def reset_function_version() -> None
```

##### `reset_max_batch_size` <a name="reset_max_batch_size" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetMaxBatchSize"></a>

```python
def reset_max_batch_size() -> None
```

##### `reset_request_mapping_template` <a name="reset_request_mapping_template" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRequestMappingTemplate"></a>

```python
def reset_request_mapping_template() -> None
```

##### `reset_request_mapping_template_s3_location` <a name="reset_request_mapping_template_s3_location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRequestMappingTemplateS3Location"></a>

```python
def reset_request_mapping_template_s3_location() -> None
```

##### `reset_response_mapping_template` <a name="reset_response_mapping_template" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetResponseMappingTemplate"></a>

```python
def reset_response_mapping_template() -> None
```

##### `reset_response_mapping_template_s3_location` <a name="reset_response_mapping_template_s3_location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetResponseMappingTemplateS3Location"></a>

```python
def reset_response_mapping_template_s3_location() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRuntime"></a>

```python
def reset_runtime() -> None
```

##### `reset_sync_config` <a name="reset_sync_config" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetSyncConfig"></a>

```python
def reset_sync_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppsyncFunctionConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import appsync_function_configuration

appsyncFunctionConfiguration.AppsyncFunctionConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appsync_function_configuration

appsyncFunctionConfiguration.AppsyncFunctionConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appsync_function_configuration

appsyncFunctionConfiguration.AppsyncFunctionConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appsync_function_configuration

appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppsyncFunctionConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppsyncFunctionConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppsyncFunctionConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncFunctionConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionArn">function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionId">function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.runtime">runtime</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference">AppsyncFunctionConfigurationRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.syncConfig">sync_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference">AppsyncFunctionConfigurationSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeInput">code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeS3LocationInput">code_s3_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dataSourceNameInput">data_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionVersionInput">function_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.maxBatchSizeInput">max_batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateInput">request_mapping_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateS3LocationInput">request_mapping_template_s3_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateInput">response_mapping_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateS3LocationInput">response_mapping_template_s3_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.runtimeInput">runtime_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.syncConfigInput">sync_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeS3Location">code_s3_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dataSourceName">data_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionVersion">function_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.maxBatchSize">max_batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplate">request_mapping_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateS3Location">request_mapping_template_s3_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplate">response_mapping_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateS3Location">response_mapping_template_s3_location</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.runtime"></a>

```python
runtime: AppsyncFunctionConfigurationRuntimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference">AppsyncFunctionConfigurationRuntimeOutputReference</a>

---

##### `sync_config`<sup>Required</sup> <a name="sync_config" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.syncConfig"></a>

```python
sync_config: AppsyncFunctionConfigurationSyncConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference">AppsyncFunctionConfigurationSyncConfigOutputReference</a>

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeInput"></a>

```python
code_input: str
```

- *Type:* str

---

##### `code_s3_location_input`<sup>Optional</sup> <a name="code_s3_location_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeS3LocationInput"></a>

```python
code_s3_location_input: str
```

- *Type:* str

---

##### `data_source_name_input`<sup>Optional</sup> <a name="data_source_name_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dataSourceNameInput"></a>

```python
data_source_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `function_version_input`<sup>Optional</sup> <a name="function_version_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionVersionInput"></a>

```python
function_version_input: str
```

- *Type:* str

---

##### `max_batch_size_input`<sup>Optional</sup> <a name="max_batch_size_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.maxBatchSizeInput"></a>

```python
max_batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `request_mapping_template_input`<sup>Optional</sup> <a name="request_mapping_template_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateInput"></a>

```python
request_mapping_template_input: str
```

- *Type:* str

---

##### `request_mapping_template_s3_location_input`<sup>Optional</sup> <a name="request_mapping_template_s3_location_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateS3LocationInput"></a>

```python
request_mapping_template_s3_location_input: str
```

- *Type:* str

---

##### `response_mapping_template_input`<sup>Optional</sup> <a name="response_mapping_template_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateInput"></a>

```python
response_mapping_template_input: str
```

- *Type:* str

---

##### `response_mapping_template_s3_location_input`<sup>Optional</sup> <a name="response_mapping_template_s3_location_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateS3LocationInput"></a>

```python
response_mapping_template_s3_location_input: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.runtimeInput"></a>

```python
runtime_input: IResolvable | AppsyncFunctionConfigurationRuntime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a>

---

##### `sync_config_input`<sup>Optional</sup> <a name="sync_config_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.syncConfigInput"></a>

```python
sync_config_input: IResolvable | AppsyncFunctionConfigurationSyncConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a>

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `code_s3_location`<sup>Required</sup> <a name="code_s3_location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeS3Location"></a>

```python
code_s3_location: str
```

- *Type:* str

---

##### `data_source_name`<sup>Required</sup> <a name="data_source_name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dataSourceName"></a>

```python
data_source_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `function_version`<sup>Required</sup> <a name="function_version" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionVersion"></a>

```python
function_version: str
```

- *Type:* str

---

##### `max_batch_size`<sup>Required</sup> <a name="max_batch_size" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.maxBatchSize"></a>

```python
max_batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `request_mapping_template`<sup>Required</sup> <a name="request_mapping_template" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplate"></a>

```python
request_mapping_template: str
```

- *Type:* str

---

##### `request_mapping_template_s3_location`<sup>Required</sup> <a name="request_mapping_template_s3_location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateS3Location"></a>

```python
request_mapping_template_s3_location: str
```

- *Type:* str

---

##### `response_mapping_template`<sup>Required</sup> <a name="response_mapping_template" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplate"></a>

```python
response_mapping_template: str
```

- *Type:* str

---

##### `response_mapping_template_s3_location`<sup>Required</sup> <a name="response_mapping_template_s3_location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateS3Location"></a>

```python
response_mapping_template_s3_location: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncFunctionConfigurationConfig <a name="AppsyncFunctionConfigurationConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_function_configuration

appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_id: str,
  data_source_name: str,
  name: str,
  code: str = None,
  code_s3_location: str = None,
  description: str = None,
  function_version: str = None,
  max_batch_size: typing.Union[int, float] = None,
  request_mapping_template: str = None,
  request_mapping_template_s3_location: str = None,
  response_mapping_template: str = None,
  response_mapping_template_s3_location: str = None,
  runtime: AppsyncFunctionConfigurationRuntime = None,
  sync_config: AppsyncFunctionConfigurationSyncConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.apiId">api_id</a></code> | <code>str</code> | The AWS AppSync GraphQL API that you want to attach using this function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.dataSourceName">data_source_name</a></code> | <code>str</code> | The name of data source this function will attach. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.name">name</a></code> | <code>str</code> | The name of the function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.code">code</a></code> | <code>str</code> | The resolver code that contains the request and response functions. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.codeS3Location">code_s3_location</a></code> | <code>str</code> | The Amazon S3 endpoint (where the code is located??). |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.description">description</a></code> | <code>str</code> | The function description. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.functionVersion">function_version</a></code> | <code>str</code> | The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.maxBatchSize">max_batch_size</a></code> | <code>typing.Union[int, float]</code> | The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a BatchInvoke operation. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.requestMappingTemplate">request_mapping_template</a></code> | <code>str</code> | The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.requestMappingTemplateS3Location">request_mapping_template_s3_location</a></code> | <code>str</code> | Describes a Sync configuration for a resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.responseMappingTemplate">response_mapping_template</a></code> | <code>str</code> | The Function response mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.responseMappingTemplateS3Location">response_mapping_template_s3_location</a></code> | <code>str</code> | The location of a response mapping template in an Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.runtime">runtime</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a></code> | Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.syncConfig">sync_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a></code> | Describes a Sync configuration for a resolver. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

The AWS AppSync GraphQL API that you want to attach using this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#api_id AppsyncFunctionConfiguration#api_id}

---

##### `data_source_name`<sup>Required</sup> <a name="data_source_name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.dataSourceName"></a>

```python
data_source_name: str
```

- *Type:* str

The name of data source this function will attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#data_source_name AppsyncFunctionConfiguration#data_source_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#name AppsyncFunctionConfiguration#name}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.code"></a>

```python
code: str
```

- *Type:* str

The resolver code that contains the request and response functions.

When code is used, the runtime is required. The runtime value must be APPSYNC_JS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#code AppsyncFunctionConfiguration#code}

---

##### `code_s3_location`<sup>Optional</sup> <a name="code_s3_location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.codeS3Location"></a>

```python
code_s3_location: str
```

- *Type:* str

The Amazon S3 endpoint (where the code is located??).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#code_s3_location AppsyncFunctionConfiguration#code_s3_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The function description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#description AppsyncFunctionConfiguration#description}

---

##### `function_version`<sup>Optional</sup> <a name="function_version" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.functionVersion"></a>

```python
function_version: str
```

- *Type:* str

The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#function_version AppsyncFunctionConfiguration#function_version}

---

##### `max_batch_size`<sup>Optional</sup> <a name="max_batch_size" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.maxBatchSize"></a>

```python
max_batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a BatchInvoke operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#max_batch_size AppsyncFunctionConfiguration#max_batch_size}

---

##### `request_mapping_template`<sup>Optional</sup> <a name="request_mapping_template" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.requestMappingTemplate"></a>

```python
request_mapping_template: str
```

- *Type:* str

The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#request_mapping_template AppsyncFunctionConfiguration#request_mapping_template}

---

##### `request_mapping_template_s3_location`<sup>Optional</sup> <a name="request_mapping_template_s3_location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.requestMappingTemplateS3Location"></a>

```python
request_mapping_template_s3_location: str
```

- *Type:* str

Describes a Sync configuration for a resolver.

Contains information on which Conflict Detection, as well as Resolution strategy, should be performed when the resolver is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#request_mapping_template_s3_location AppsyncFunctionConfiguration#request_mapping_template_s3_location}

---

##### `response_mapping_template`<sup>Optional</sup> <a name="response_mapping_template" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.responseMappingTemplate"></a>

```python
response_mapping_template: str
```

- *Type:* str

The Function response mapping template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#response_mapping_template AppsyncFunctionConfiguration#response_mapping_template}

---

##### `response_mapping_template_s3_location`<sup>Optional</sup> <a name="response_mapping_template_s3_location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.responseMappingTemplateS3Location"></a>

```python
response_mapping_template_s3_location: str
```

- *Type:* str

The location of a response mapping template in an Amazon S3 bucket.

Use this if you want to provision with a template file in Amazon S3 rather than embedding it in your CloudFormation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#response_mapping_template_s3_location AppsyncFunctionConfiguration#response_mapping_template_s3_location}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.runtime"></a>

```python
runtime: AppsyncFunctionConfigurationRuntime
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a>

Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function.

Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#runtime AppsyncFunctionConfiguration#runtime}

---

##### `sync_config`<sup>Optional</sup> <a name="sync_config" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.syncConfig"></a>

```python
sync_config: AppsyncFunctionConfigurationSyncConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a>

Describes a Sync configuration for a resolver.

Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#sync_config AppsyncFunctionConfiguration#sync_config}

---

### AppsyncFunctionConfigurationRuntime <a name="AppsyncFunctionConfigurationRuntime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_function_configuration

appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime(
  name: str = None,
  runtime_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.property.name">name</a></code> | <code>str</code> | The name of the runtime to use. Currently, the only allowed value is APPSYNC_JS. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | The version of the runtime to use. Currently, the only allowed version is 1.0.0. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the runtime to use. Currently, the only allowed value is APPSYNC_JS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#name AppsyncFunctionConfiguration#name}

---

##### `runtime_version`<sup>Optional</sup> <a name="runtime_version" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

The version of the runtime to use. Currently, the only allowed version is 1.0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#runtime_version AppsyncFunctionConfiguration#runtime_version}

---

### AppsyncFunctionConfigurationSyncConfig <a name="AppsyncFunctionConfigurationSyncConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_function_configuration

appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig(
  conflict_detection: str = None,
  conflict_handler: str = None,
  lambda_conflict_handler_config: AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.conflictDetection">conflict_detection</a></code> | <code>str</code> | The Conflict Detection strategy to use. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.conflictHandler">conflict_handler</a></code> | <code>str</code> | The Conflict Resolution strategy to perform in the event of a conflict. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.lambdaConflictHandlerConfig">lambda_conflict_handler_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a></code> | The LambdaConflictHandlerConfig when configuring LAMBDA as the Conflict Handler. |

---

##### `conflict_detection`<sup>Optional</sup> <a name="conflict_detection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.conflictDetection"></a>

```python
conflict_detection: str
```

- *Type:* str

The Conflict Detection strategy to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#conflict_detection AppsyncFunctionConfiguration#conflict_detection}

---

##### `conflict_handler`<sup>Optional</sup> <a name="conflict_handler" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.conflictHandler"></a>

```python
conflict_handler: str
```

- *Type:* str

The Conflict Resolution strategy to perform in the event of a conflict.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#conflict_handler AppsyncFunctionConfiguration#conflict_handler}

---

##### `lambda_conflict_handler_config`<sup>Optional</sup> <a name="lambda_conflict_handler_config" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.lambdaConflictHandlerConfig"></a>

```python
lambda_conflict_handler_config: AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a>

The LambdaConflictHandlerConfig when configuring LAMBDA as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#lambda_conflict_handler_config AppsyncFunctionConfiguration#lambda_conflict_handler_config}

---

### AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig <a name="AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_function_configuration

appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig(
  lambda_conflict_handler_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn">lambda_conflict_handler_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler. |

---

##### `lambda_conflict_handler_arn`<sup>Optional</sup> <a name="lambda_conflict_handler_arn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

```python
lambda_conflict_handler_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#lambda_conflict_handler_arn AppsyncFunctionConfiguration#lambda_conflict_handler_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncFunctionConfigurationRuntimeOutputReference <a name="AppsyncFunctionConfigurationRuntimeOutputReference" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_function_configuration

appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resetRuntimeVersion">reset_runtime_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_runtime_version` <a name="reset_runtime_version" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resetRuntimeVersion"></a>

```python
def reset_runtime_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersionInput">runtime_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `runtime_version_input`<sup>Optional</sup> <a name="runtime_version_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersionInput"></a>

```python
runtime_version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncFunctionConfigurationRuntime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a>

---


### AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference <a name="AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_function_configuration

appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn">reset_lambda_conflict_handler_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lambda_conflict_handler_arn` <a name="reset_lambda_conflict_handler_arn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn"></a>

```python
def reset_lambda_conflict_handler_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput">lambda_conflict_handler_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn">lambda_conflict_handler_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_conflict_handler_arn_input`<sup>Optional</sup> <a name="lambda_conflict_handler_arn_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput"></a>

```python
lambda_conflict_handler_arn_input: str
```

- *Type:* str

---

##### `lambda_conflict_handler_arn`<sup>Required</sup> <a name="lambda_conflict_handler_arn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn"></a>

```python
lambda_conflict_handler_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a>

---


### AppsyncFunctionConfigurationSyncConfigOutputReference <a name="AppsyncFunctionConfigurationSyncConfigOutputReference" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_function_configuration

appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.putLambdaConflictHandlerConfig">put_lambda_conflict_handler_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetConflictDetection">reset_conflict_detection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetConflictHandler">reset_conflict_handler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetLambdaConflictHandlerConfig">reset_lambda_conflict_handler_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lambda_conflict_handler_config` <a name="put_lambda_conflict_handler_config" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.putLambdaConflictHandlerConfig"></a>

```python
def put_lambda_conflict_handler_config(
  lambda_conflict_handler_arn: str = None
) -> None
```

###### `lambda_conflict_handler_arn`<sup>Optional</sup> <a name="lambda_conflict_handler_arn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.putLambdaConflictHandlerConfig.parameter.lambdaConflictHandlerArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#lambda_conflict_handler_arn AppsyncFunctionConfiguration#lambda_conflict_handler_arn}

---

##### `reset_conflict_detection` <a name="reset_conflict_detection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetConflictDetection"></a>

```python
def reset_conflict_detection() -> None
```

##### `reset_conflict_handler` <a name="reset_conflict_handler" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetConflictHandler"></a>

```python
def reset_conflict_handler() -> None
```

##### `reset_lambda_conflict_handler_config` <a name="reset_lambda_conflict_handler_config" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetLambdaConflictHandlerConfig"></a>

```python
def reset_lambda_conflict_handler_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfig">lambda_conflict_handler_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetectionInput">conflict_detection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandlerInput">conflict_handler_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput">lambda_conflict_handler_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetection">conflict_detection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandler">conflict_handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_conflict_handler_config`<sup>Required</sup> <a name="lambda_conflict_handler_config" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfig"></a>

```python
lambda_conflict_handler_config: AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference</a>

---

##### `conflict_detection_input`<sup>Optional</sup> <a name="conflict_detection_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetectionInput"></a>

```python
conflict_detection_input: str
```

- *Type:* str

---

##### `conflict_handler_input`<sup>Optional</sup> <a name="conflict_handler_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandlerInput"></a>

```python
conflict_handler_input: str
```

- *Type:* str

---

##### `lambda_conflict_handler_config_input`<sup>Optional</sup> <a name="lambda_conflict_handler_config_input" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput"></a>

```python
lambda_conflict_handler_config_input: IResolvable | AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a>

---

##### `conflict_detection`<sup>Required</sup> <a name="conflict_detection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetection"></a>

```python
conflict_detection: str
```

- *Type:* str

---

##### `conflict_handler`<sup>Required</sup> <a name="conflict_handler" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandler"></a>

```python
conflict_handler: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncFunctionConfigurationSyncConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a>

---



