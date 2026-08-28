# `apigatewayRestApi` Submodule <a name="`apigatewayRestApi` Submodule" id="@cdktn/provider-awscc.apigatewayRestApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayRestApi <a name="ApigatewayRestApi" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api awscc_apigateway_rest_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_rest_api

apigatewayRestApi.ApigatewayRestApi(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_key_source_type: str = None,
  binary_media_types: typing.List[str] = None,
  body: str = None,
  body_s3_location: ApigatewayRestApiBodyS3Location = None,
  clone_from: str = None,
  description: str = None,
  disable_execute_api_endpoint: bool | IResolvable = None,
  endpoint_access_mode: str = None,
  endpoint_configuration: ApigatewayRestApiEndpointConfiguration = None,
  fail_on_warnings: bool | IResolvable = None,
  minimum_compression_size: typing.Union[int, float] = None,
  mode: str = None,
  name: str = None,
  parameters: str = None,
  policy: str = None,
  security_policy: str = None,
  tags: IResolvable | typing.List[ApigatewayRestApiTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.apiKeySourceType">api_key_source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#api_key_source_type ApigatewayRestApi#api_key_source_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.binaryMediaTypes">binary_media_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#binary_media_types ApigatewayRestApi#binary_media_types}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.body">body</a></code> | <code>str</code> | An OpenAPI specification that defines a set of RESTful APIs in JSON format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.bodyS3Location">body_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a></code> | The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.cloneFrom">clone_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#clone_from ApigatewayRestApi#clone_from}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#description ApigatewayRestApi#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.disableExecuteApiEndpoint">disable_execute_api_endpoint</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#disable_execute_api_endpoint ApigatewayRestApi#disable_execute_api_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.endpointAccessMode">endpoint_access_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_access_mode ApigatewayRestApi#endpoint_access_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.endpointConfiguration">endpoint_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a></code> | A list of the endpoint types and IP address types of the API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.failOnWarnings">fail_on_warnings</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#fail_on_warnings ApigatewayRestApi#fail_on_warnings}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.minimumCompressionSize">minimum_compression_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#minimum_compression_size ApigatewayRestApi#minimum_compression_size}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.mode">mode</a></code> | <code>str</code> | This property applies only when you use OpenAPI to define your REST API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the RestApi. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#parameters ApigatewayRestApi#parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.policy">policy</a></code> | <code>str</code> | A policy document that contains the permissions for the ``RestApi`` resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.securityPolicy">security_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#security_policy ApigatewayRestApi#security_policy}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#tags ApigatewayRestApi#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_key_source_type`<sup>Optional</sup> <a name="api_key_source_type" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.apiKeySourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#api_key_source_type ApigatewayRestApi#api_key_source_type}.

---

##### `binary_media_types`<sup>Optional</sup> <a name="binary_media_types" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.binaryMediaTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#binary_media_types ApigatewayRestApi#binary_media_types}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.body"></a>

- *Type:* str

An OpenAPI specification that defines a set of RESTful APIs in JSON format.

For YAML templates, you can also provide the specification in YAML format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#body ApigatewayRestApi#body}

---

##### `body_s3_location`<sup>Optional</sup> <a name="body_s3_location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.bodyS3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#body_s3_location ApigatewayRestApi#body_s3_location}

---

##### `clone_from`<sup>Optional</sup> <a name="clone_from" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.cloneFrom"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#clone_from ApigatewayRestApi#clone_from}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#description ApigatewayRestApi#description}.

---

##### `disable_execute_api_endpoint`<sup>Optional</sup> <a name="disable_execute_api_endpoint" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.disableExecuteApiEndpoint"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#disable_execute_api_endpoint ApigatewayRestApi#disable_execute_api_endpoint}.

---

##### `endpoint_access_mode`<sup>Optional</sup> <a name="endpoint_access_mode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.endpointAccessMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_access_mode ApigatewayRestApi#endpoint_access_mode}.

---

##### `endpoint_configuration`<sup>Optional</sup> <a name="endpoint_configuration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.endpointConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

A list of the endpoint types and IP address types of the API.

Use this property when creating an API. When importing an existing API, specify the endpoint configuration types using the `Parameters` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_configuration ApigatewayRestApi#endpoint_configuration}

---

##### `fail_on_warnings`<sup>Optional</sup> <a name="fail_on_warnings" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.failOnWarnings"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#fail_on_warnings ApigatewayRestApi#fail_on_warnings}.

---

##### `minimum_compression_size`<sup>Optional</sup> <a name="minimum_compression_size" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.minimumCompressionSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#minimum_compression_size ApigatewayRestApi#minimum_compression_size}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.mode"></a>

- *Type:* str

This property applies only when you use OpenAPI to define your REST API.

The `Mode` determines how API Gateway handles resource updates.
Valid values are `overwrite` or `merge`.
For `overwrite`, the new API definition replaces the existing one. The existing API identifier remains unchanged.
For `merge`, the new API definition is merged with the existing API.
If you don't specify this property, a default value is chosen. For REST APIs created before March 29, 2021, the default is `overwrite`. For REST APIs created after March 29, 2021, the new API definition takes precedence, but any container types such as endpoint configurations and binary media types are merged with the existing API.
Use the default mode to define top-level `RestApi` properties in addition to using OpenAPI. Generally, it's preferred to use API Gateway's OpenAPI extensions to model these properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#mode ApigatewayRestApi#mode}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.name"></a>

- *Type:* str

The name of the RestApi.

A name is required if the REST API is not based on an OpenAPI specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#name ApigatewayRestApi#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.parameters"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#parameters ApigatewayRestApi#parameters}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.policy"></a>

- *Type:* str

A policy document that contains the permissions for the ``RestApi`` resource.

To set the ARN for the policy, use the `!Join` intrinsic function with `""` as delimiter and values of `"execute-api:/"` and `"*"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#policy ApigatewayRestApi#policy}

---

##### `security_policy`<sup>Optional</sup> <a name="security_policy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.securityPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#security_policy ApigatewayRestApi#security_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#tags ApigatewayRestApi#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location">put_body_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putEndpointConfiguration">put_endpoint_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetApiKeySourceType">reset_api_key_source_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBinaryMediaTypes">reset_binary_media_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBodyS3Location">reset_body_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetCloneFrom">reset_clone_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDisableExecuteApiEndpoint">reset_disable_execute_api_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointAccessMode">reset_endpoint_access_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointConfiguration">reset_endpoint_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetFailOnWarnings">reset_fail_on_warnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMinimumCompressionSize">reset_minimum_compression_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetSecurityPolicy">reset_security_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_body_s3_location` <a name="put_body_s3_location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location"></a>

```python
def put_body_s3_location(
  bucket: str = None,
  e_tag: str = None,
  key: str = None,
  version: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location.parameter.bucket"></a>

- *Type:* str

The name of the S3 bucket where the OpenAPI file is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#bucket ApigatewayRestApi#bucket}

---

###### `e_tag`<sup>Optional</sup> <a name="e_tag" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location.parameter.eTag"></a>

- *Type:* str

The Amazon S3 ETag (a file checksum) of the OpenAPI file.

If you don't specify a value, API Gateway skips ETag validation of your OpenAPI file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#e_tag ApigatewayRestApi#e_tag}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location.parameter.key"></a>

- *Type:* str

The file name of the OpenAPI file (Amazon S3 object name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#key ApigatewayRestApi#key}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location.parameter.version"></a>

- *Type:* str

For versioning-enabled buckets, a specific version of the OpenAPI file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#version ApigatewayRestApi#version}

---

##### `put_endpoint_configuration` <a name="put_endpoint_configuration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putEndpointConfiguration"></a>

```python
def put_endpoint_configuration(
  ip_address_type: str = None,
  types: typing.List[str] = None,
  vpc_endpoint_ids: typing.List[str] = None
) -> None
```

###### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putEndpointConfiguration.parameter.ipAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#ip_address_type ApigatewayRestApi#ip_address_type}.

---

###### `types`<sup>Optional</sup> <a name="types" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putEndpointConfiguration.parameter.types"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#types ApigatewayRestApi#types}.

---

###### `vpc_endpoint_ids`<sup>Optional</sup> <a name="vpc_endpoint_ids" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putEndpointConfiguration.parameter.vpcEndpointIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#vpc_endpoint_ids ApigatewayRestApi#vpc_endpoint_ids}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ApigatewayRestApiTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>]

---

##### `reset_api_key_source_type` <a name="reset_api_key_source_type" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetApiKeySourceType"></a>

```python
def reset_api_key_source_type() -> None
```

##### `reset_binary_media_types` <a name="reset_binary_media_types" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBinaryMediaTypes"></a>

```python
def reset_binary_media_types() -> None
```

##### `reset_body` <a name="reset_body" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_body_s3_location` <a name="reset_body_s3_location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBodyS3Location"></a>

```python
def reset_body_s3_location() -> None
```

##### `reset_clone_from` <a name="reset_clone_from" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetCloneFrom"></a>

```python
def reset_clone_from() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_execute_api_endpoint` <a name="reset_disable_execute_api_endpoint" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDisableExecuteApiEndpoint"></a>

```python
def reset_disable_execute_api_endpoint() -> None
```

##### `reset_endpoint_access_mode` <a name="reset_endpoint_access_mode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointAccessMode"></a>

```python
def reset_endpoint_access_mode() -> None
```

##### `reset_endpoint_configuration` <a name="reset_endpoint_configuration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointConfiguration"></a>

```python
def reset_endpoint_configuration() -> None
```

##### `reset_fail_on_warnings` <a name="reset_fail_on_warnings" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetFailOnWarnings"></a>

```python
def reset_fail_on_warnings() -> None
```

##### `reset_minimum_compression_size` <a name="reset_minimum_compression_size" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMinimumCompressionSize"></a>

```python
def reset_minimum_compression_size() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_security_policy` <a name="reset_security_policy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetSecurityPolicy"></a>

```python
def reset_security_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApigatewayRestApi resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isConstruct"></a>

```python
from cdktn_provider_awscc import apigateway_rest_api

apigatewayRestApi.ApigatewayRestApi.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apigateway_rest_api

apigatewayRestApi.ApigatewayRestApi.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apigateway_rest_api

apigatewayRestApi.ApigatewayRestApi.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apigateway_rest_api

apigatewayRestApi.ApigatewayRestApi.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApigatewayRestApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigatewayRestApi to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigatewayRestApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayRestApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3Location">body_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference">ApigatewayRestApiBodyS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfiguration">endpoint_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference">ApigatewayRestApiEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.rootResourceId">root_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList">ApigatewayRestApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceTypeInput">api_key_source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypesInput">binary_media_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3LocationInput">body_s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFromInput">clone_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpointInput">disable_execute_api_endpoint_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessModeInput">endpoint_access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfigurationInput">endpoint_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarningsInput">fail_on_warnings_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSizeInput">minimum_compression_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicyInput">security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceType">api_key_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypes">binary_media_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFrom">clone_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpoint">disable_execute_api_endpoint</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessMode">endpoint_access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarnings">fail_on_warnings</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSize">minimum_compression_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicy">security_policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `body_s3_location`<sup>Required</sup> <a name="body_s3_location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3Location"></a>

```python
body_s3_location: ApigatewayRestApiBodyS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference">ApigatewayRestApiBodyS3LocationOutputReference</a>

---

##### `endpoint_configuration`<sup>Required</sup> <a name="endpoint_configuration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfiguration"></a>

```python
endpoint_configuration: ApigatewayRestApiEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference">ApigatewayRestApiEndpointConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

##### `root_resource_id`<sup>Required</sup> <a name="root_resource_id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.rootResourceId"></a>

```python
root_resource_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tags"></a>

```python
tags: ApigatewayRestApiTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList">ApigatewayRestApiTagsList</a>

---

##### `api_key_source_type_input`<sup>Optional</sup> <a name="api_key_source_type_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceTypeInput"></a>

```python
api_key_source_type_input: str
```

- *Type:* str

---

##### `binary_media_types_input`<sup>Optional</sup> <a name="binary_media_types_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypesInput"></a>

```python
binary_media_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `body_s3_location_input`<sup>Optional</sup> <a name="body_s3_location_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3LocationInput"></a>

```python
body_s3_location_input: IResolvable | ApigatewayRestApiBodyS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

---

##### `clone_from_input`<sup>Optional</sup> <a name="clone_from_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFromInput"></a>

```python
clone_from_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_execute_api_endpoint_input`<sup>Optional</sup> <a name="disable_execute_api_endpoint_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpointInput"></a>

```python
disable_execute_api_endpoint_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint_access_mode_input`<sup>Optional</sup> <a name="endpoint_access_mode_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessModeInput"></a>

```python
endpoint_access_mode_input: str
```

- *Type:* str

---

##### `endpoint_configuration_input`<sup>Optional</sup> <a name="endpoint_configuration_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfigurationInput"></a>

```python
endpoint_configuration_input: IResolvable | ApigatewayRestApiEndpointConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

---

##### `fail_on_warnings_input`<sup>Optional</sup> <a name="fail_on_warnings_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarningsInput"></a>

```python
fail_on_warnings_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `minimum_compression_size_input`<sup>Optional</sup> <a name="minimum_compression_size_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSizeInput"></a>

```python
minimum_compression_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `security_policy_input`<sup>Optional</sup> <a name="security_policy_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicyInput"></a>

```python
security_policy_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ApigatewayRestApiTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>]

---

##### `api_key_source_type`<sup>Required</sup> <a name="api_key_source_type" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceType"></a>

```python
api_key_source_type: str
```

- *Type:* str

---

##### `binary_media_types`<sup>Required</sup> <a name="binary_media_types" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypes"></a>

```python
binary_media_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `clone_from`<sup>Required</sup> <a name="clone_from" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFrom"></a>

```python
clone_from: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_execute_api_endpoint`<sup>Required</sup> <a name="disable_execute_api_endpoint" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpoint"></a>

```python
disable_execute_api_endpoint: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint_access_mode`<sup>Required</sup> <a name="endpoint_access_mode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessMode"></a>

```python
endpoint_access_mode: str
```

- *Type:* str

---

##### `fail_on_warnings`<sup>Required</sup> <a name="fail_on_warnings" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarnings"></a>

```python
fail_on_warnings: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `minimum_compression_size`<sup>Required</sup> <a name="minimum_compression_size" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSize"></a>

```python
minimum_compression_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayRestApiBodyS3Location <a name="ApigatewayRestApiBodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_rest_api

apigatewayRestApi.ApigatewayRestApiBodyS3Location(
  bucket: str = None,
  e_tag: str = None,
  key: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.bucket">bucket</a></code> | <code>str</code> | The name of the S3 bucket where the OpenAPI file is stored. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.eTag">e_tag</a></code> | <code>str</code> | The Amazon S3 ETag (a file checksum) of the OpenAPI file. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.key">key</a></code> | <code>str</code> | The file name of the OpenAPI file (Amazon S3 object name). |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.version">version</a></code> | <code>str</code> | For versioning-enabled buckets, a specific version of the OpenAPI file. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the S3 bucket where the OpenAPI file is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#bucket ApigatewayRestApi#bucket}

---

##### `e_tag`<sup>Optional</sup> <a name="e_tag" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.eTag"></a>

```python
e_tag: str
```

- *Type:* str

The Amazon S3 ETag (a file checksum) of the OpenAPI file.

If you don't specify a value, API Gateway skips ETag validation of your OpenAPI file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#e_tag ApigatewayRestApi#e_tag}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.key"></a>

```python
key: str
```

- *Type:* str

The file name of the OpenAPI file (Amazon S3 object name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#key ApigatewayRestApi#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.version"></a>

```python
version: str
```

- *Type:* str

For versioning-enabled buckets, a specific version of the OpenAPI file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#version ApigatewayRestApi#version}

---

### ApigatewayRestApiConfig <a name="ApigatewayRestApiConfig" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_rest_api

apigatewayRestApi.ApigatewayRestApiConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_key_source_type: str = None,
  binary_media_types: typing.List[str] = None,
  body: str = None,
  body_s3_location: ApigatewayRestApiBodyS3Location = None,
  clone_from: str = None,
  description: str = None,
  disable_execute_api_endpoint: bool | IResolvable = None,
  endpoint_access_mode: str = None,
  endpoint_configuration: ApigatewayRestApiEndpointConfiguration = None,
  fail_on_warnings: bool | IResolvable = None,
  minimum_compression_size: typing.Union[int, float] = None,
  mode: str = None,
  name: str = None,
  parameters: str = None,
  policy: str = None,
  security_policy: str = None,
  tags: IResolvable | typing.List[ApigatewayRestApiTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.apiKeySourceType">api_key_source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#api_key_source_type ApigatewayRestApi#api_key_source_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.binaryMediaTypes">binary_media_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#binary_media_types ApigatewayRestApi#binary_media_types}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.body">body</a></code> | <code>str</code> | An OpenAPI specification that defines a set of RESTful APIs in JSON format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.bodyS3Location">body_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a></code> | The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.cloneFrom">clone_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#clone_from ApigatewayRestApi#clone_from}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#description ApigatewayRestApi#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.disableExecuteApiEndpoint">disable_execute_api_endpoint</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#disable_execute_api_endpoint ApigatewayRestApi#disable_execute_api_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointAccessMode">endpoint_access_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_access_mode ApigatewayRestApi#endpoint_access_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointConfiguration">endpoint_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a></code> | A list of the endpoint types and IP address types of the API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.failOnWarnings">fail_on_warnings</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#fail_on_warnings ApigatewayRestApi#fail_on_warnings}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.minimumCompressionSize">minimum_compression_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#minimum_compression_size ApigatewayRestApi#minimum_compression_size}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.mode">mode</a></code> | <code>str</code> | This property applies only when you use OpenAPI to define your REST API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.name">name</a></code> | <code>str</code> | The name of the RestApi. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#parameters ApigatewayRestApi#parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.policy">policy</a></code> | <code>str</code> | A policy document that contains the permissions for the ``RestApi`` resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.securityPolicy">security_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#security_policy ApigatewayRestApi#security_policy}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#tags ApigatewayRestApi#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_key_source_type`<sup>Optional</sup> <a name="api_key_source_type" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.apiKeySourceType"></a>

```python
api_key_source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#api_key_source_type ApigatewayRestApi#api_key_source_type}.

---

##### `binary_media_types`<sup>Optional</sup> <a name="binary_media_types" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.binaryMediaTypes"></a>

```python
binary_media_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#binary_media_types ApigatewayRestApi#binary_media_types}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.body"></a>

```python
body: str
```

- *Type:* str

An OpenAPI specification that defines a set of RESTful APIs in JSON format.

For YAML templates, you can also provide the specification in YAML format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#body ApigatewayRestApi#body}

---

##### `body_s3_location`<sup>Optional</sup> <a name="body_s3_location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.bodyS3Location"></a>

```python
body_s3_location: ApigatewayRestApiBodyS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#body_s3_location ApigatewayRestApi#body_s3_location}

---

##### `clone_from`<sup>Optional</sup> <a name="clone_from" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.cloneFrom"></a>

```python
clone_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#clone_from ApigatewayRestApi#clone_from}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#description ApigatewayRestApi#description}.

---

##### `disable_execute_api_endpoint`<sup>Optional</sup> <a name="disable_execute_api_endpoint" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.disableExecuteApiEndpoint"></a>

```python
disable_execute_api_endpoint: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#disable_execute_api_endpoint ApigatewayRestApi#disable_execute_api_endpoint}.

---

##### `endpoint_access_mode`<sup>Optional</sup> <a name="endpoint_access_mode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointAccessMode"></a>

```python
endpoint_access_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_access_mode ApigatewayRestApi#endpoint_access_mode}.

---

##### `endpoint_configuration`<sup>Optional</sup> <a name="endpoint_configuration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointConfiguration"></a>

```python
endpoint_configuration: ApigatewayRestApiEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

A list of the endpoint types and IP address types of the API.

Use this property when creating an API. When importing an existing API, specify the endpoint configuration types using the `Parameters` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_configuration ApigatewayRestApi#endpoint_configuration}

---

##### `fail_on_warnings`<sup>Optional</sup> <a name="fail_on_warnings" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.failOnWarnings"></a>

```python
fail_on_warnings: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#fail_on_warnings ApigatewayRestApi#fail_on_warnings}.

---

##### `minimum_compression_size`<sup>Optional</sup> <a name="minimum_compression_size" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.minimumCompressionSize"></a>

```python
minimum_compression_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#minimum_compression_size ApigatewayRestApi#minimum_compression_size}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

This property applies only when you use OpenAPI to define your REST API.

The `Mode` determines how API Gateway handles resource updates.
Valid values are `overwrite` or `merge`.
For `overwrite`, the new API definition replaces the existing one. The existing API identifier remains unchanged.
For `merge`, the new API definition is merged with the existing API.
If you don't specify this property, a default value is chosen. For REST APIs created before March 29, 2021, the default is `overwrite`. For REST APIs created after March 29, 2021, the new API definition takes precedence, but any container types such as endpoint configurations and binary media types are merged with the existing API.
Use the default mode to define top-level `RestApi` properties in addition to using OpenAPI. Generally, it's preferred to use API Gateway's OpenAPI extensions to model these properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#mode ApigatewayRestApi#mode}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the RestApi.

A name is required if the REST API is not based on an OpenAPI specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#name ApigatewayRestApi#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#parameters ApigatewayRestApi#parameters}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

A policy document that contains the permissions for the ``RestApi`` resource.

To set the ARN for the policy, use the `!Join` intrinsic function with `""` as delimiter and values of `"execute-api:/"` and `"*"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#policy ApigatewayRestApi#policy}

---

##### `security_policy`<sup>Optional</sup> <a name="security_policy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#security_policy ApigatewayRestApi#security_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ApigatewayRestApiTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#tags ApigatewayRestApi#tags}.

---

### ApigatewayRestApiEndpointConfiguration <a name="ApigatewayRestApiEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_rest_api

apigatewayRestApi.ApigatewayRestApiEndpointConfiguration(
  ip_address_type: str = None,
  types: typing.List[str] = None,
  vpc_endpoint_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#ip_address_type ApigatewayRestApi#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.types">types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#types ApigatewayRestApi#types}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.vpcEndpointIds">vpc_endpoint_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#vpc_endpoint_ids ApigatewayRestApi#vpc_endpoint_ids}. |

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#ip_address_type ApigatewayRestApi#ip_address_type}.

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#types ApigatewayRestApi#types}.

---

##### `vpc_endpoint_ids`<sup>Optional</sup> <a name="vpc_endpoint_ids" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.vpcEndpointIds"></a>

```python
vpc_endpoint_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#vpc_endpoint_ids ApigatewayRestApi#vpc_endpoint_ids}.

---

### ApigatewayRestApiTags <a name="ApigatewayRestApiTags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_rest_api

apigatewayRestApi.ApigatewayRestApiTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.key">key</a></code> | <code>str</code> | A string you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.value">value</a></code> | <code>str</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.key"></a>

```python
key: str
```

- *Type:* str

A string you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#key ApigatewayRestApi#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#value ApigatewayRestApi#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayRestApiBodyS3LocationOutputReference <a name="ApigatewayRestApiBodyS3LocationOutputReference" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_rest_api

apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetETag">reset_e_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_e_tag` <a name="reset_e_tag" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetETag"></a>

```python
def reset_e_tag() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTagInput">e_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTag">e_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `e_tag_input`<sup>Optional</sup> <a name="e_tag_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTagInput"></a>

```python
e_tag_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `e_tag`<sup>Required</sup> <a name="e_tag" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTag"></a>

```python
e_tag: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayRestApiBodyS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

---


### ApigatewayRestApiEndpointConfigurationOutputReference <a name="ApigatewayRestApiEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_rest_api

apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetTypes">reset_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds">reset_vpc_endpoint_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_types` <a name="reset_types" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetTypes"></a>

```python
def reset_types() -> None
```

##### `reset_vpc_endpoint_ids` <a name="reset_vpc_endpoint_ids" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds"></a>

```python
def reset_vpc_endpoint_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.typesInput">types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput">vpc_endpoint_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.types">types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds">vpc_endpoint_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `types_input`<sup>Optional</sup> <a name="types_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.typesInput"></a>

```python
types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_endpoint_ids_input`<sup>Optional</sup> <a name="vpc_endpoint_ids_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput"></a>

```python
vpc_endpoint_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_endpoint_ids`<sup>Required</sup> <a name="vpc_endpoint_ids" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds"></a>

```python
vpc_endpoint_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayRestApiEndpointConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

---


### ApigatewayRestApiTagsList <a name="ApigatewayRestApiTagsList" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_rest_api

apigatewayRestApi.ApigatewayRestApiTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigatewayRestApiTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApigatewayRestApiTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>]

---


### ApigatewayRestApiTagsOutputReference <a name="ApigatewayRestApiTagsOutputReference" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_rest_api

apigatewayRestApi.ApigatewayRestApiTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayRestApiTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>

---



