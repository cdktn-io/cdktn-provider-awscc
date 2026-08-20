# `appsyncResolver` Submodule <a name="`appsyncResolver` Submodule" id="@cdktn/provider-awscc.appsyncResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncResolver <a name="AppsyncResolver" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver awscc_appsync_resolver}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_resolver

appsyncResolver.AppsyncResolver(
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
  field_name: str,
  type_name: str,
  caching_config: AppsyncResolverCachingConfig = None,
  code: str = None,
  code_s3_location: str = None,
  data_source_name: str = None,
  kind: str = None,
  max_batch_size: typing.Union[int, float] = None,
  metrics_config: str = None,
  pipeline_config: AppsyncResolverPipelineConfig = None,
  request_mapping_template: str = None,
  request_mapping_template_s3_location: str = None,
  response_mapping_template: str = None,
  response_mapping_template_s3_location: str = None,
  runtime: AppsyncResolverRuntime = None,
  sync_config: AppsyncResolverSyncConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.apiId">api_id</a></code> | <code>str</code> | The APSYlong GraphQL API to which you want to attach this resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.fieldName">field_name</a></code> | <code>str</code> | The GraphQL field on a type that invokes the resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.typeName">type_name</a></code> | <code>str</code> | The GraphQL type that invokes this resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.cachingConfig">caching_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | The caching configuration for the resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.code">code</a></code> | <code>str</code> | The ``resolver`` code that contains the request and response functions. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.codeS3Location">code_s3_location</a></code> | <code>str</code> | The Amazon S3 endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.dataSourceName">data_source_name</a></code> | <code>str</code> | The resolver data source name. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.kind">kind</a></code> | <code>str</code> | The resolver type. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.maxBatchSize">max_batch_size</a></code> | <code>typing.Union[int, float]</code> | The maximum number of resolver request inputs that will be sent to a single LAMlong function in a ``BatchInvoke`` operation. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.metricsConfig">metrics_config</a></code> | <code>str</code> | Enables or disables enhanced resolver metrics for specified resolvers. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.pipelineConfig">pipeline_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | Functions linked with the pipeline resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.requestMappingTemplate">request_mapping_template</a></code> | <code>str</code> | The request mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.requestMappingTemplateS3Location">request_mapping_template_s3_location</a></code> | <code>str</code> | The location of a request mapping template in an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.responseMappingTemplate">response_mapping_template</a></code> | <code>str</code> | The response mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.responseMappingTemplateS3Location">response_mapping_template_s3_location</a></code> | <code>str</code> | The location of a response mapping template in an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.runtime">runtime</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | Describes a runtime used by an APSYlong resolver or APSYlong function. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.syncConfig">sync_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | The ``SyncConfig`` for a resolver attached to a versioned data source. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.apiId"></a>

- *Type:* str

The APSYlong GraphQL API to which you want to attach this resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#api_id AppsyncResolver#api_id}

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.fieldName"></a>

- *Type:* str

The GraphQL field on a type that invokes the resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#field_name AppsyncResolver#field_name}

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.typeName"></a>

- *Type:* str

The GraphQL type that invokes this resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#type_name AppsyncResolver#type_name}

---

##### `caching_config`<sup>Optional</sup> <a name="caching_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.cachingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

The caching configuration for the resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#caching_config AppsyncResolver#caching_config}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.code"></a>

- *Type:* str

The ``resolver`` code that contains the request and response functions.

When code is used, the `runtime` is required. The runtime value must be `APPSYNC_JS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#code AppsyncResolver#code}

---

##### `code_s3_location`<sup>Optional</sup> <a name="code_s3_location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.codeS3Location"></a>

- *Type:* str

The Amazon S3 endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#code_s3_location AppsyncResolver#code_s3_location}

---

##### `data_source_name`<sup>Optional</sup> <a name="data_source_name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.dataSourceName"></a>

- *Type:* str

The resolver data source name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#data_source_name AppsyncResolver#data_source_name}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.kind"></a>

- *Type:* str

The resolver type.

* *UNIT*: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.
* *PIPELINE*: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of `Function` objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#kind AppsyncResolver#kind}

---

##### `max_batch_size`<sup>Optional</sup> <a name="max_batch_size" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.maxBatchSize"></a>

- *Type:* typing.Union[int, float]

The maximum number of resolver request inputs that will be sent to a single LAMlong function in a ``BatchInvoke`` operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#max_batch_size AppsyncResolver#max_batch_size}

---

##### `metrics_config`<sup>Optional</sup> <a name="metrics_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.metricsConfig"></a>

- *Type:* str

Enables or disables enhanced resolver metrics for specified resolvers.

Note that `MetricsConfig` won't be used unless the `resolverLevelMetricsBehavior` value is set to `PER_RESOLVER_METRICS`. If the `resolverLevelMetricsBehavior` is set to `FULL_REQUEST_RESOLVER_METRICS` instead, `MetricsConfig` will be ignored. However, you can still set its value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#metrics_config AppsyncResolver#metrics_config}

---

##### `pipeline_config`<sup>Optional</sup> <a name="pipeline_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.pipelineConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

Functions linked with the pipeline resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#pipeline_config AppsyncResolver#pipeline_config}

---

##### `request_mapping_template`<sup>Optional</sup> <a name="request_mapping_template" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.requestMappingTemplate"></a>

- *Type:* str

The request mapping template.

Request mapping templates are optional when using a Lambda data source. For all other data sources, a request mapping template is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#request_mapping_template AppsyncResolver#request_mapping_template}

---

##### `request_mapping_template_s3_location`<sup>Optional</sup> <a name="request_mapping_template_s3_location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.requestMappingTemplateS3Location"></a>

- *Type:* str

The location of a request mapping template in an S3 bucket.

Use this if you want to provision with a template file in S3 rather than embedding it in your CFNshort template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#request_mapping_template_s3_location AppsyncResolver#request_mapping_template_s3_location}

---

##### `response_mapping_template`<sup>Optional</sup> <a name="response_mapping_template" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.responseMappingTemplate"></a>

- *Type:* str

The response mapping template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#response_mapping_template AppsyncResolver#response_mapping_template}

---

##### `response_mapping_template_s3_location`<sup>Optional</sup> <a name="response_mapping_template_s3_location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.responseMappingTemplateS3Location"></a>

- *Type:* str

The location of a response mapping template in an S3 bucket.

Use this if you want to provision with a template file in S3 rather than embedding it in your CFNshort template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#response_mapping_template_s3_location AppsyncResolver#response_mapping_template_s3_location}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.runtime"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

Describes a runtime used by an APSYlong resolver or APSYlong function.

Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#runtime AppsyncResolver#runtime}

---

##### `sync_config`<sup>Optional</sup> <a name="sync_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.syncConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

The ``SyncConfig`` for a resolver attached to a versioned data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#sync_config AppsyncResolver#sync_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putCachingConfig">put_caching_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putPipelineConfig">put_pipeline_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putRuntime">put_runtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putSyncConfig">put_sync_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCachingConfig">reset_caching_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCodeS3Location">reset_code_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetDataSourceName">reset_data_source_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetKind">reset_kind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetMaxBatchSize">reset_max_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetMetricsConfig">reset_metrics_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetPipelineConfig">reset_pipeline_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRequestMappingTemplate">reset_request_mapping_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRequestMappingTemplateS3Location">reset_request_mapping_template_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetResponseMappingTemplate">reset_response_mapping_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetResponseMappingTemplateS3Location">reset_response_mapping_template_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRuntime">reset_runtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetSyncConfig">reset_sync_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_caching_config` <a name="put_caching_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putCachingConfig"></a>

```python
def put_caching_config(
  caching_keys: typing.List[str] = None,
  ttl: typing.Union[int, float] = None
) -> None
```

###### `caching_keys`<sup>Optional</sup> <a name="caching_keys" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putCachingConfig.parameter.cachingKeys"></a>

- *Type:* typing.List[str]

The caching keys for a resolver that has caching activated.

Valid values are entries from the `$context.arguments`, `$context.source`, and `$context.identity` maps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#caching_keys AppsyncResolver#caching_keys}

---

###### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putCachingConfig.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

The TTL in seconds for a resolver that has caching activated.  Valid values are 1?3,600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#ttl AppsyncResolver#ttl}

---

##### `put_pipeline_config` <a name="put_pipeline_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putPipelineConfig"></a>

```python
def put_pipeline_config(
  functions: typing.List[str] = None
) -> None
```

###### `functions`<sup>Optional</sup> <a name="functions" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putPipelineConfig.parameter.functions"></a>

- *Type:* typing.List[str]

A list of ``Function`` objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#functions AppsyncResolver#functions}

---

##### `put_runtime` <a name="put_runtime" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putRuntime"></a>

```python
def put_runtime(
  name: str = None,
  runtime_version: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putRuntime.parameter.name"></a>

- *Type:* str

The ``name`` of the runtime to use. Currently, the only allowed value is ``APPSYNC_JS``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#name AppsyncResolver#name}

---

###### `runtime_version`<sup>Optional</sup> <a name="runtime_version" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putRuntime.parameter.runtimeVersion"></a>

- *Type:* str

The ``version`` of the runtime to use. Currently, the only allowed version is ``1.0.0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#runtime_version AppsyncResolver#runtime_version}

---

##### `put_sync_config` <a name="put_sync_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putSyncConfig"></a>

```python
def put_sync_config(
  conflict_detection: str = None,
  conflict_handler: str = None,
  lambda_conflict_handler_config: AppsyncResolverSyncConfigLambdaConflictHandlerConfig = None
) -> None
```

###### `conflict_detection`<sup>Optional</sup> <a name="conflict_detection" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putSyncConfig.parameter.conflictDetection"></a>

- *Type:* str

The Conflict Detection strategy to use.

* *VERSION*: Detect conflicts based on object versions for this resolver.
* *NONE*: Do not detect conflicts when invoking this resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#conflict_detection AppsyncResolver#conflict_detection}

---

###### `conflict_handler`<sup>Optional</sup> <a name="conflict_handler" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putSyncConfig.parameter.conflictHandler"></a>

- *Type:* str

The Conflict Resolution strategy to perform in the event of a conflict.

* *OPTIMISTIC_CONCURRENCY*: Resolve conflicts by rejecting mutations when versions don't match the latest version at the server.
* *AUTOMERGE*: Resolve conflicts with the Automerge conflict resolution strategy.
* *LAMBDA*: Resolve conflicts with an LAMlong function supplied in the `LambdaConflictHandlerConfig`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#conflict_handler AppsyncResolver#conflict_handler}

---

###### `lambda_conflict_handler_config`<sup>Optional</sup> <a name="lambda_conflict_handler_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putSyncConfig.parameter.lambdaConflictHandlerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

The ``LambdaConflictHandlerConfig`` when configuring ``LAMBDA`` as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#lambda_conflict_handler_config AppsyncResolver#lambda_conflict_handler_config}

---

##### `reset_caching_config` <a name="reset_caching_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCachingConfig"></a>

```python
def reset_caching_config() -> None
```

##### `reset_code` <a name="reset_code" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_code_s3_location` <a name="reset_code_s3_location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCodeS3Location"></a>

```python
def reset_code_s3_location() -> None
```

##### `reset_data_source_name` <a name="reset_data_source_name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetDataSourceName"></a>

```python
def reset_data_source_name() -> None
```

##### `reset_kind` <a name="reset_kind" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetKind"></a>

```python
def reset_kind() -> None
```

##### `reset_max_batch_size` <a name="reset_max_batch_size" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetMaxBatchSize"></a>

```python
def reset_max_batch_size() -> None
```

##### `reset_metrics_config` <a name="reset_metrics_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetMetricsConfig"></a>

```python
def reset_metrics_config() -> None
```

##### `reset_pipeline_config` <a name="reset_pipeline_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetPipelineConfig"></a>

```python
def reset_pipeline_config() -> None
```

##### `reset_request_mapping_template` <a name="reset_request_mapping_template" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRequestMappingTemplate"></a>

```python
def reset_request_mapping_template() -> None
```

##### `reset_request_mapping_template_s3_location` <a name="reset_request_mapping_template_s3_location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRequestMappingTemplateS3Location"></a>

```python
def reset_request_mapping_template_s3_location() -> None
```

##### `reset_response_mapping_template` <a name="reset_response_mapping_template" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetResponseMappingTemplate"></a>

```python
def reset_response_mapping_template() -> None
```

##### `reset_response_mapping_template_s3_location` <a name="reset_response_mapping_template_s3_location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetResponseMappingTemplateS3Location"></a>

```python
def reset_response_mapping_template_s3_location() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRuntime"></a>

```python
def reset_runtime() -> None
```

##### `reset_sync_config` <a name="reset_sync_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetSyncConfig"></a>

```python
def reset_sync_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppsyncResolver resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isConstruct"></a>

```python
from cdktn_provider_awscc import appsync_resolver

appsyncResolver.AppsyncResolver.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appsync_resolver

appsyncResolver.AppsyncResolver.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appsync_resolver

appsyncResolver.AppsyncResolver.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appsync_resolver

appsyncResolver.AppsyncResolver.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppsyncResolver resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppsyncResolver to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppsyncResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cachingConfig">caching_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference">AppsyncResolverCachingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.pipelineConfig">pipeline_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference">AppsyncResolverPipelineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.resolverArn">resolver_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.runtime">runtime</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference">AppsyncResolverRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.syncConfig">sync_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference">AppsyncResolverSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cachingConfigInput">caching_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeInput">code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeS3LocationInput">code_s3_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dataSourceNameInput">data_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.maxBatchSizeInput">max_batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.metricsConfigInput">metrics_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.pipelineConfigInput">pipeline_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateInput">request_mapping_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateS3LocationInput">request_mapping_template_s3_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateInput">response_mapping_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateS3LocationInput">response_mapping_template_s3_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.runtimeInput">runtime_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.syncConfigInput">sync_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeS3Location">code_s3_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dataSourceName">data_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.maxBatchSize">max_batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.metricsConfig">metrics_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplate">request_mapping_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateS3Location">request_mapping_template_s3_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplate">response_mapping_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateS3Location">response_mapping_template_s3_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `caching_config`<sup>Required</sup> <a name="caching_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cachingConfig"></a>

```python
caching_config: AppsyncResolverCachingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference">AppsyncResolverCachingConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pipeline_config`<sup>Required</sup> <a name="pipeline_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.pipelineConfig"></a>

```python
pipeline_config: AppsyncResolverPipelineConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference">AppsyncResolverPipelineConfigOutputReference</a>

---

##### `resolver_arn`<sup>Required</sup> <a name="resolver_arn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.resolverArn"></a>

```python
resolver_arn: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.runtime"></a>

```python
runtime: AppsyncResolverRuntimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference">AppsyncResolverRuntimeOutputReference</a>

---

##### `sync_config`<sup>Required</sup> <a name="sync_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.syncConfig"></a>

```python
sync_config: AppsyncResolverSyncConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference">AppsyncResolverSyncConfigOutputReference</a>

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `caching_config_input`<sup>Optional</sup> <a name="caching_config_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cachingConfigInput"></a>

```python
caching_config_input: IResolvable | AppsyncResolverCachingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeInput"></a>

```python
code_input: str
```

- *Type:* str

---

##### `code_s3_location_input`<sup>Optional</sup> <a name="code_s3_location_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeS3LocationInput"></a>

```python
code_s3_location_input: str
```

- *Type:* str

---

##### `data_source_name_input`<sup>Optional</sup> <a name="data_source_name_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dataSourceNameInput"></a>

```python
data_source_name_input: str
```

- *Type:* str

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `max_batch_size_input`<sup>Optional</sup> <a name="max_batch_size_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.maxBatchSizeInput"></a>

```python
max_batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_config_input`<sup>Optional</sup> <a name="metrics_config_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.metricsConfigInput"></a>

```python
metrics_config_input: str
```

- *Type:* str

---

##### `pipeline_config_input`<sup>Optional</sup> <a name="pipeline_config_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.pipelineConfigInput"></a>

```python
pipeline_config_input: IResolvable | AppsyncResolverPipelineConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

---

##### `request_mapping_template_input`<sup>Optional</sup> <a name="request_mapping_template_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateInput"></a>

```python
request_mapping_template_input: str
```

- *Type:* str

---

##### `request_mapping_template_s3_location_input`<sup>Optional</sup> <a name="request_mapping_template_s3_location_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateS3LocationInput"></a>

```python
request_mapping_template_s3_location_input: str
```

- *Type:* str

---

##### `response_mapping_template_input`<sup>Optional</sup> <a name="response_mapping_template_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateInput"></a>

```python
response_mapping_template_input: str
```

- *Type:* str

---

##### `response_mapping_template_s3_location_input`<sup>Optional</sup> <a name="response_mapping_template_s3_location_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateS3LocationInput"></a>

```python
response_mapping_template_s3_location_input: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.runtimeInput"></a>

```python
runtime_input: IResolvable | AppsyncResolverRuntime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

---

##### `sync_config_input`<sup>Optional</sup> <a name="sync_config_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.syncConfigInput"></a>

```python
sync_config_input: IResolvable | AppsyncResolverSyncConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `code_s3_location`<sup>Required</sup> <a name="code_s3_location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeS3Location"></a>

```python
code_s3_location: str
```

- *Type:* str

---

##### `data_source_name`<sup>Required</sup> <a name="data_source_name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dataSourceName"></a>

```python
data_source_name: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `max_batch_size`<sup>Required</sup> <a name="max_batch_size" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.maxBatchSize"></a>

```python
max_batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_config`<sup>Required</sup> <a name="metrics_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.metricsConfig"></a>

```python
metrics_config: str
```

- *Type:* str

---

##### `request_mapping_template`<sup>Required</sup> <a name="request_mapping_template" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplate"></a>

```python
request_mapping_template: str
```

- *Type:* str

---

##### `request_mapping_template_s3_location`<sup>Required</sup> <a name="request_mapping_template_s3_location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateS3Location"></a>

```python
request_mapping_template_s3_location: str
```

- *Type:* str

---

##### `response_mapping_template`<sup>Required</sup> <a name="response_mapping_template" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplate"></a>

```python
response_mapping_template: str
```

- *Type:* str

---

##### `response_mapping_template_s3_location`<sup>Required</sup> <a name="response_mapping_template_s3_location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateS3Location"></a>

```python
response_mapping_template_s3_location: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncResolverCachingConfig <a name="AppsyncResolverCachingConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_resolver

appsyncResolver.AppsyncResolverCachingConfig(
  caching_keys: typing.List[str] = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig.property.cachingKeys">caching_keys</a></code> | <code>typing.List[str]</code> | The caching keys for a resolver that has caching activated. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL in seconds for a resolver that has caching activated.  Valid values are 1?3,600 seconds. |

---

##### `caching_keys`<sup>Optional</sup> <a name="caching_keys" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig.property.cachingKeys"></a>

```python
caching_keys: typing.List[str]
```

- *Type:* typing.List[str]

The caching keys for a resolver that has caching activated.

Valid values are entries from the `$context.arguments`, `$context.source`, and `$context.identity` maps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#caching_keys AppsyncResolver#caching_keys}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TTL in seconds for a resolver that has caching activated.  Valid values are 1?3,600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#ttl AppsyncResolver#ttl}

---

### AppsyncResolverConfig <a name="AppsyncResolverConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_resolver

appsyncResolver.AppsyncResolverConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_id: str,
  field_name: str,
  type_name: str,
  caching_config: AppsyncResolverCachingConfig = None,
  code: str = None,
  code_s3_location: str = None,
  data_source_name: str = None,
  kind: str = None,
  max_batch_size: typing.Union[int, float] = None,
  metrics_config: str = None,
  pipeline_config: AppsyncResolverPipelineConfig = None,
  request_mapping_template: str = None,
  request_mapping_template_s3_location: str = None,
  response_mapping_template: str = None,
  response_mapping_template_s3_location: str = None,
  runtime: AppsyncResolverRuntime = None,
  sync_config: AppsyncResolverSyncConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.apiId">api_id</a></code> | <code>str</code> | The APSYlong GraphQL API to which you want to attach this resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.fieldName">field_name</a></code> | <code>str</code> | The GraphQL field on a type that invokes the resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.typeName">type_name</a></code> | <code>str</code> | The GraphQL type that invokes this resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.cachingConfig">caching_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | The caching configuration for the resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.code">code</a></code> | <code>str</code> | The ``resolver`` code that contains the request and response functions. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.codeS3Location">code_s3_location</a></code> | <code>str</code> | The Amazon S3 endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.dataSourceName">data_source_name</a></code> | <code>str</code> | The resolver data source name. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.kind">kind</a></code> | <code>str</code> | The resolver type. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.maxBatchSize">max_batch_size</a></code> | <code>typing.Union[int, float]</code> | The maximum number of resolver request inputs that will be sent to a single LAMlong function in a ``BatchInvoke`` operation. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.metricsConfig">metrics_config</a></code> | <code>str</code> | Enables or disables enhanced resolver metrics for specified resolvers. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.pipelineConfig">pipeline_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | Functions linked with the pipeline resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.requestMappingTemplate">request_mapping_template</a></code> | <code>str</code> | The request mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.requestMappingTemplateS3Location">request_mapping_template_s3_location</a></code> | <code>str</code> | The location of a request mapping template in an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.responseMappingTemplate">response_mapping_template</a></code> | <code>str</code> | The response mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.responseMappingTemplateS3Location">response_mapping_template_s3_location</a></code> | <code>str</code> | The location of a response mapping template in an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.runtime">runtime</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | Describes a runtime used by an APSYlong resolver or APSYlong function. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.syncConfig">sync_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | The ``SyncConfig`` for a resolver attached to a versioned data source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

The APSYlong GraphQL API to which you want to attach this resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#api_id AppsyncResolver#api_id}

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

The GraphQL field on a type that invokes the resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#field_name AppsyncResolver#field_name}

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

The GraphQL type that invokes this resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#type_name AppsyncResolver#type_name}

---

##### `caching_config`<sup>Optional</sup> <a name="caching_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.cachingConfig"></a>

```python
caching_config: AppsyncResolverCachingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

The caching configuration for the resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#caching_config AppsyncResolver#caching_config}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.code"></a>

```python
code: str
```

- *Type:* str

The ``resolver`` code that contains the request and response functions.

When code is used, the `runtime` is required. The runtime value must be `APPSYNC_JS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#code AppsyncResolver#code}

---

##### `code_s3_location`<sup>Optional</sup> <a name="code_s3_location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.codeS3Location"></a>

```python
code_s3_location: str
```

- *Type:* str

The Amazon S3 endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#code_s3_location AppsyncResolver#code_s3_location}

---

##### `data_source_name`<sup>Optional</sup> <a name="data_source_name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.dataSourceName"></a>

```python
data_source_name: str
```

- *Type:* str

The resolver data source name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#data_source_name AppsyncResolver#data_source_name}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

The resolver type.

* *UNIT*: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.
* *PIPELINE*: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of `Function` objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#kind AppsyncResolver#kind}

---

##### `max_batch_size`<sup>Optional</sup> <a name="max_batch_size" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.maxBatchSize"></a>

```python
max_batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of resolver request inputs that will be sent to a single LAMlong function in a ``BatchInvoke`` operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#max_batch_size AppsyncResolver#max_batch_size}

---

##### `metrics_config`<sup>Optional</sup> <a name="metrics_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.metricsConfig"></a>

```python
metrics_config: str
```

- *Type:* str

Enables or disables enhanced resolver metrics for specified resolvers.

Note that `MetricsConfig` won't be used unless the `resolverLevelMetricsBehavior` value is set to `PER_RESOLVER_METRICS`. If the `resolverLevelMetricsBehavior` is set to `FULL_REQUEST_RESOLVER_METRICS` instead, `MetricsConfig` will be ignored. However, you can still set its value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#metrics_config AppsyncResolver#metrics_config}

---

##### `pipeline_config`<sup>Optional</sup> <a name="pipeline_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.pipelineConfig"></a>

```python
pipeline_config: AppsyncResolverPipelineConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

Functions linked with the pipeline resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#pipeline_config AppsyncResolver#pipeline_config}

---

##### `request_mapping_template`<sup>Optional</sup> <a name="request_mapping_template" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.requestMappingTemplate"></a>

```python
request_mapping_template: str
```

- *Type:* str

The request mapping template.

Request mapping templates are optional when using a Lambda data source. For all other data sources, a request mapping template is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#request_mapping_template AppsyncResolver#request_mapping_template}

---

##### `request_mapping_template_s3_location`<sup>Optional</sup> <a name="request_mapping_template_s3_location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.requestMappingTemplateS3Location"></a>

```python
request_mapping_template_s3_location: str
```

- *Type:* str

The location of a request mapping template in an S3 bucket.

Use this if you want to provision with a template file in S3 rather than embedding it in your CFNshort template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#request_mapping_template_s3_location AppsyncResolver#request_mapping_template_s3_location}

---

##### `response_mapping_template`<sup>Optional</sup> <a name="response_mapping_template" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.responseMappingTemplate"></a>

```python
response_mapping_template: str
```

- *Type:* str

The response mapping template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#response_mapping_template AppsyncResolver#response_mapping_template}

---

##### `response_mapping_template_s3_location`<sup>Optional</sup> <a name="response_mapping_template_s3_location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.responseMappingTemplateS3Location"></a>

```python
response_mapping_template_s3_location: str
```

- *Type:* str

The location of a response mapping template in an S3 bucket.

Use this if you want to provision with a template file in S3 rather than embedding it in your CFNshort template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#response_mapping_template_s3_location AppsyncResolver#response_mapping_template_s3_location}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.runtime"></a>

```python
runtime: AppsyncResolverRuntime
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

Describes a runtime used by an APSYlong resolver or APSYlong function.

Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#runtime AppsyncResolver#runtime}

---

##### `sync_config`<sup>Optional</sup> <a name="sync_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.syncConfig"></a>

```python
sync_config: AppsyncResolverSyncConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

The ``SyncConfig`` for a resolver attached to a versioned data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#sync_config AppsyncResolver#sync_config}

---

### AppsyncResolverPipelineConfig <a name="AppsyncResolverPipelineConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_resolver

appsyncResolver.AppsyncResolverPipelineConfig(
  functions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig.property.functions">functions</a></code> | <code>typing.List[str]</code> | A list of ``Function`` objects. |

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig.property.functions"></a>

```python
functions: typing.List[str]
```

- *Type:* typing.List[str]

A list of ``Function`` objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#functions AppsyncResolver#functions}

---

### AppsyncResolverRuntime <a name="AppsyncResolverRuntime" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_resolver

appsyncResolver.AppsyncResolverRuntime(
  name: str = None,
  runtime_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime.property.name">name</a></code> | <code>str</code> | The ``name`` of the runtime to use. Currently, the only allowed value is ``APPSYNC_JS``. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | The ``version`` of the runtime to use. Currently, the only allowed version is ``1.0.0``. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime.property.name"></a>

```python
name: str
```

- *Type:* str

The ``name`` of the runtime to use. Currently, the only allowed value is ``APPSYNC_JS``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#name AppsyncResolver#name}

---

##### `runtime_version`<sup>Optional</sup> <a name="runtime_version" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

The ``version`` of the runtime to use. Currently, the only allowed version is ``1.0.0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#runtime_version AppsyncResolver#runtime_version}

---

### AppsyncResolverSyncConfig <a name="AppsyncResolverSyncConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_resolver

appsyncResolver.AppsyncResolverSyncConfig(
  conflict_detection: str = None,
  conflict_handler: str = None,
  lambda_conflict_handler_config: AppsyncResolverSyncConfigLambdaConflictHandlerConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.conflictDetection">conflict_detection</a></code> | <code>str</code> | The Conflict Detection strategy to use. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.conflictHandler">conflict_handler</a></code> | <code>str</code> | The Conflict Resolution strategy to perform in the event of a conflict. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.lambdaConflictHandlerConfig">lambda_conflict_handler_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | The ``LambdaConflictHandlerConfig`` when configuring ``LAMBDA`` as the Conflict Handler. |

---

##### `conflict_detection`<sup>Optional</sup> <a name="conflict_detection" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.conflictDetection"></a>

```python
conflict_detection: str
```

- *Type:* str

The Conflict Detection strategy to use.

* *VERSION*: Detect conflicts based on object versions for this resolver.
* *NONE*: Do not detect conflicts when invoking this resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#conflict_detection AppsyncResolver#conflict_detection}

---

##### `conflict_handler`<sup>Optional</sup> <a name="conflict_handler" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.conflictHandler"></a>

```python
conflict_handler: str
```

- *Type:* str

The Conflict Resolution strategy to perform in the event of a conflict.

* *OPTIMISTIC_CONCURRENCY*: Resolve conflicts by rejecting mutations when versions don't match the latest version at the server.
* *AUTOMERGE*: Resolve conflicts with the Automerge conflict resolution strategy.
* *LAMBDA*: Resolve conflicts with an LAMlong function supplied in the `LambdaConflictHandlerConfig`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#conflict_handler AppsyncResolver#conflict_handler}

---

##### `lambda_conflict_handler_config`<sup>Optional</sup> <a name="lambda_conflict_handler_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.lambdaConflictHandlerConfig"></a>

```python
lambda_conflict_handler_config: AppsyncResolverSyncConfigLambdaConflictHandlerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

The ``LambdaConflictHandlerConfig`` when configuring ``LAMBDA`` as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#lambda_conflict_handler_config AppsyncResolver#lambda_conflict_handler_config}

---

### AppsyncResolverSyncConfigLambdaConflictHandlerConfig <a name="AppsyncResolverSyncConfigLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_resolver

appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig(
  lambda_conflict_handler_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn">lambda_conflict_handler_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler. |

---

##### `lambda_conflict_handler_arn`<sup>Optional</sup> <a name="lambda_conflict_handler_arn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

```python
lambda_conflict_handler_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#lambda_conflict_handler_arn AppsyncResolver#lambda_conflict_handler_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncResolverCachingConfigOutputReference <a name="AppsyncResolverCachingConfigOutputReference" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_resolver

appsyncResolver.AppsyncResolverCachingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetCachingKeys">reset_caching_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_caching_keys` <a name="reset_caching_keys" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetCachingKeys"></a>

```python
def reset_caching_keys() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeysInput">caching_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeys">caching_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `caching_keys_input`<sup>Optional</sup> <a name="caching_keys_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeysInput"></a>

```python
caching_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `caching_keys`<sup>Required</sup> <a name="caching_keys" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeys"></a>

```python
caching_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncResolverCachingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

---


### AppsyncResolverPipelineConfigOutputReference <a name="AppsyncResolverPipelineConfigOutputReference" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_resolver

appsyncResolver.AppsyncResolverPipelineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resetFunctions">reset_functions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_functions` <a name="reset_functions" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resetFunctions"></a>

```python
def reset_functions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functionsInput">functions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functions">functions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `functions_input`<sup>Optional</sup> <a name="functions_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functionsInput"></a>

```python
functions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functions"></a>

```python
functions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncResolverPipelineConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

---


### AppsyncResolverRuntimeOutputReference <a name="AppsyncResolverRuntimeOutputReference" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_resolver

appsyncResolver.AppsyncResolverRuntimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resetRuntimeVersion">reset_runtime_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_runtime_version` <a name="reset_runtime_version" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resetRuntimeVersion"></a>

```python
def reset_runtime_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersionInput">runtime_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `runtime_version_input`<sup>Optional</sup> <a name="runtime_version_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersionInput"></a>

```python
runtime_version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncResolverRuntime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

---


### AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference <a name="AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_resolver

appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn">reset_lambda_conflict_handler_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lambda_conflict_handler_arn` <a name="reset_lambda_conflict_handler_arn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn"></a>

```python
def reset_lambda_conflict_handler_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput">lambda_conflict_handler_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn">lambda_conflict_handler_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_conflict_handler_arn_input`<sup>Optional</sup> <a name="lambda_conflict_handler_arn_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput"></a>

```python
lambda_conflict_handler_arn_input: str
```

- *Type:* str

---

##### `lambda_conflict_handler_arn`<sup>Required</sup> <a name="lambda_conflict_handler_arn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn"></a>

```python
lambda_conflict_handler_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncResolverSyncConfigLambdaConflictHandlerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

---


### AppsyncResolverSyncConfigOutputReference <a name="AppsyncResolverSyncConfigOutputReference" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_resolver

appsyncResolver.AppsyncResolverSyncConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig">put_lambda_conflict_handler_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictDetection">reset_conflict_detection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictHandler">reset_conflict_handler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetLambdaConflictHandlerConfig">reset_lambda_conflict_handler_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lambda_conflict_handler_config` <a name="put_lambda_conflict_handler_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig"></a>

```python
def put_lambda_conflict_handler_config(
  lambda_conflict_handler_arn: str = None
) -> None
```

###### `lambda_conflict_handler_arn`<sup>Optional</sup> <a name="lambda_conflict_handler_arn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig.parameter.lambdaConflictHandlerArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_resolver#lambda_conflict_handler_arn AppsyncResolver#lambda_conflict_handler_arn}

---

##### `reset_conflict_detection` <a name="reset_conflict_detection" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictDetection"></a>

```python
def reset_conflict_detection() -> None
```

##### `reset_conflict_handler` <a name="reset_conflict_handler" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictHandler"></a>

```python
def reset_conflict_handler() -> None
```

##### `reset_lambda_conflict_handler_config` <a name="reset_lambda_conflict_handler_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetLambdaConflictHandlerConfig"></a>

```python
def reset_lambda_conflict_handler_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfig">lambda_conflict_handler_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetectionInput">conflict_detection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandlerInput">conflict_handler_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput">lambda_conflict_handler_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetection">conflict_detection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandler">conflict_handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_conflict_handler_config`<sup>Required</sup> <a name="lambda_conflict_handler_config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfig"></a>

```python
lambda_conflict_handler_config: AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference</a>

---

##### `conflict_detection_input`<sup>Optional</sup> <a name="conflict_detection_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetectionInput"></a>

```python
conflict_detection_input: str
```

- *Type:* str

---

##### `conflict_handler_input`<sup>Optional</sup> <a name="conflict_handler_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandlerInput"></a>

```python
conflict_handler_input: str
```

- *Type:* str

---

##### `lambda_conflict_handler_config_input`<sup>Optional</sup> <a name="lambda_conflict_handler_config_input" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput"></a>

```python
lambda_conflict_handler_config_input: IResolvable | AppsyncResolverSyncConfigLambdaConflictHandlerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

---

##### `conflict_detection`<sup>Required</sup> <a name="conflict_detection" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetection"></a>

```python
conflict_detection: str
```

- *Type:* str

---

##### `conflict_handler`<sup>Required</sup> <a name="conflict_handler" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandler"></a>

```python
conflict_handler: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncResolverSyncConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

---



