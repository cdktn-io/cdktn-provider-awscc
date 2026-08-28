# `apigatewayRestApi` Submodule <a name="`apigatewayRestApi` Submodule" id="@cdktn/provider-awscc.apigatewayRestApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayRestApi <a name="ApigatewayRestApi" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api awscc_apigateway_rest_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_rest_api.ApigatewayRestApi;

ApigatewayRestApi.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .apiKeySourceType(java.lang.String)
//  .binaryMediaTypes(java.util.List<java.lang.String>)
//  .body(java.lang.String)
//  .bodyS3Location(ApigatewayRestApiBodyS3Location)
//  .cloneFrom(java.lang.String)
//  .description(java.lang.String)
//  .disableExecuteApiEndpoint(java.lang.Boolean|IResolvable)
//  .endpointAccessMode(java.lang.String)
//  .endpointConfiguration(ApigatewayRestApiEndpointConfiguration)
//  .failOnWarnings(java.lang.Boolean|IResolvable)
//  .minimumCompressionSize(java.lang.Number)
//  .mode(java.lang.String)
//  .name(java.lang.String)
//  .parameters(java.lang.String)
//  .policy(java.lang.String)
//  .securityPolicy(java.lang.String)
//  .tags(IResolvable|java.util.List<ApigatewayRestApiTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.apiKeySourceType">apiKeySourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#api_key_source_type ApigatewayRestApi#api_key_source_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.binaryMediaTypes">binaryMediaTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#binary_media_types ApigatewayRestApi#binary_media_types}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.body">body</a></code> | <code>java.lang.String</code> | An OpenAPI specification that defines a set of RESTful APIs in JSON format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.bodyS3Location">bodyS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a></code> | The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.cloneFrom">cloneFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#clone_from ApigatewayRestApi#clone_from}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#description ApigatewayRestApi#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.disableExecuteApiEndpoint">disableExecuteApiEndpoint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#disable_execute_api_endpoint ApigatewayRestApi#disable_execute_api_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.endpointAccessMode">endpointAccessMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_access_mode ApigatewayRestApi#endpoint_access_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a></code> | A list of the endpoint types and IP address types of the API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.failOnWarnings">failOnWarnings</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#fail_on_warnings ApigatewayRestApi#fail_on_warnings}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.minimumCompressionSize">minimumCompressionSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#minimum_compression_size ApigatewayRestApi#minimum_compression_size}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | This property applies only when you use OpenAPI to define your REST API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the RestApi. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#parameters ApigatewayRestApi#parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.policy">policy</a></code> | <code>java.lang.String</code> | A policy document that contains the permissions for the ``RestApi`` resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#security_policy ApigatewayRestApi#security_policy}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#tags ApigatewayRestApi#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiKeySourceType`<sup>Optional</sup> <a name="apiKeySourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.apiKeySourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#api_key_source_type ApigatewayRestApi#api_key_source_type}.

---

##### `binaryMediaTypes`<sup>Optional</sup> <a name="binaryMediaTypes" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.binaryMediaTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#binary_media_types ApigatewayRestApi#binary_media_types}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.body"></a>

- *Type:* java.lang.String

An OpenAPI specification that defines a set of RESTful APIs in JSON format.

For YAML templates, you can also provide the specification in YAML format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#body ApigatewayRestApi#body}

---

##### `bodyS3Location`<sup>Optional</sup> <a name="bodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.bodyS3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#body_s3_location ApigatewayRestApi#body_s3_location}

---

##### `cloneFrom`<sup>Optional</sup> <a name="cloneFrom" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.cloneFrom"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#clone_from ApigatewayRestApi#clone_from}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#description ApigatewayRestApi#description}.

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="disableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.disableExecuteApiEndpoint"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#disable_execute_api_endpoint ApigatewayRestApi#disable_execute_api_endpoint}.

---

##### `endpointAccessMode`<sup>Optional</sup> <a name="endpointAccessMode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.endpointAccessMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_access_mode ApigatewayRestApi#endpoint_access_mode}.

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="endpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.endpointConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

A list of the endpoint types and IP address types of the API.

Use this property when creating an API. When importing an existing API, specify the endpoint configuration types using the `Parameters` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_configuration ApigatewayRestApi#endpoint_configuration}

---

##### `failOnWarnings`<sup>Optional</sup> <a name="failOnWarnings" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.failOnWarnings"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#fail_on_warnings ApigatewayRestApi#fail_on_warnings}.

---

##### `minimumCompressionSize`<sup>Optional</sup> <a name="minimumCompressionSize" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.minimumCompressionSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#minimum_compression_size ApigatewayRestApi#minimum_compression_size}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

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

- *Type:* java.lang.String

The name of the RestApi.

A name is required if the REST API is not based on an OpenAPI specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#name ApigatewayRestApi#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.parameters"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#parameters ApigatewayRestApi#parameters}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.policy"></a>

- *Type:* java.lang.String

A policy document that contains the permissions for the ``RestApi`` resource.

To set the ARN for the policy, use the `!Join` intrinsic function with `""` as delimiter and values of `"execute-api:/"` and `"*"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#policy ApigatewayRestApi#policy}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.securityPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#security_policy ApigatewayRestApi#security_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#tags ApigatewayRestApi#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location">putBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putEndpointConfiguration">putEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetApiKeySourceType">resetApiKeySourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBinaryMediaTypes">resetBinaryMediaTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBodyS3Location">resetBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetCloneFrom">resetCloneFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDisableExecuteApiEndpoint">resetDisableExecuteApiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointAccessMode">resetEndpointAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointConfiguration">resetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetFailOnWarnings">resetFailOnWarnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMinimumCompressionSize">resetMinimumCompressionSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBodyS3Location` <a name="putBodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location"></a>

```java
public void putBodyS3Location(ApigatewayRestApiBodyS3Location value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

---

##### `putEndpointConfiguration` <a name="putEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putEndpointConfiguration"></a>

```java
public void putEndpointConfiguration(ApigatewayRestApiEndpointConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ApigatewayRestApiTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>>

---

##### `resetApiKeySourceType` <a name="resetApiKeySourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetApiKeySourceType"></a>

```java
public void resetApiKeySourceType()
```

##### `resetBinaryMediaTypes` <a name="resetBinaryMediaTypes" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBinaryMediaTypes"></a>

```java
public void resetBinaryMediaTypes()
```

##### `resetBody` <a name="resetBody" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBody"></a>

```java
public void resetBody()
```

##### `resetBodyS3Location` <a name="resetBodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBodyS3Location"></a>

```java
public void resetBodyS3Location()
```

##### `resetCloneFrom` <a name="resetCloneFrom" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetCloneFrom"></a>

```java
public void resetCloneFrom()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableExecuteApiEndpoint` <a name="resetDisableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDisableExecuteApiEndpoint"></a>

```java
public void resetDisableExecuteApiEndpoint()
```

##### `resetEndpointAccessMode` <a name="resetEndpointAccessMode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointAccessMode"></a>

```java
public void resetEndpointAccessMode()
```

##### `resetEndpointConfiguration` <a name="resetEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointConfiguration"></a>

```java
public void resetEndpointConfiguration()
```

##### `resetFailOnWarnings` <a name="resetFailOnWarnings" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetFailOnWarnings"></a>

```java
public void resetFailOnWarnings()
```

##### `resetMinimumCompressionSize` <a name="resetMinimumCompressionSize" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMinimumCompressionSize"></a>

```java
public void resetMinimumCompressionSize()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMode"></a>

```java
public void resetMode()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetName"></a>

```java
public void resetName()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetPolicy"></a>

```java
public void resetPolicy()
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetSecurityPolicy"></a>

```java
public void resetSecurityPolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayRestApi resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apigateway_rest_api.ApigatewayRestApi;

ApigatewayRestApi.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apigateway_rest_api.ApigatewayRestApi;

ApigatewayRestApi.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apigateway_rest_api.ApigatewayRestApi;

ApigatewayRestApi.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apigateway_rest_api.ApigatewayRestApi;

ApigatewayRestApi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigatewayRestApi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApigatewayRestApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigatewayRestApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigatewayRestApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayRestApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3Location">bodyS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference">ApigatewayRestApiBodyS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference">ApigatewayRestApiEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.rootResourceId">rootResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList">ApigatewayRestApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceTypeInput">apiKeySourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypesInput">binaryMediaTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3LocationInput">bodyS3LocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFromInput">cloneFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpointInput">disableExecuteApiEndpointInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessModeInput">endpointAccessModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfigurationInput">endpointConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarningsInput">failOnWarningsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSizeInput">minimumCompressionSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicyInput">securityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceType">apiKeySourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypes">binaryMediaTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFrom">cloneFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpoint">disableExecuteApiEndpoint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessMode">endpointAccessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarnings">failOnWarnings</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSize">minimumCompressionSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bodyS3Location`<sup>Required</sup> <a name="bodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3Location"></a>

```java
public ApigatewayRestApiBodyS3LocationOutputReference getBodyS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference">ApigatewayRestApiBodyS3LocationOutputReference</a>

---

##### `endpointConfiguration`<sup>Required</sup> <a name="endpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfiguration"></a>

```java
public ApigatewayRestApiEndpointConfigurationOutputReference getEndpointConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference">ApigatewayRestApiEndpointConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

---

##### `rootResourceId`<sup>Required</sup> <a name="rootResourceId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.rootResourceId"></a>

```java
public java.lang.String getRootResourceId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tags"></a>

```java
public ApigatewayRestApiTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList">ApigatewayRestApiTagsList</a>

---

##### `apiKeySourceTypeInput`<sup>Optional</sup> <a name="apiKeySourceTypeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceTypeInput"></a>

```java
public java.lang.String getApiKeySourceTypeInput();
```

- *Type:* java.lang.String

---

##### `binaryMediaTypesInput`<sup>Optional</sup> <a name="binaryMediaTypesInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypesInput"></a>

```java
public java.util.List<java.lang.String> getBinaryMediaTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `bodyS3LocationInput`<sup>Optional</sup> <a name="bodyS3LocationInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3LocationInput"></a>

```java
public IResolvable|ApigatewayRestApiBodyS3Location getBodyS3LocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

---

##### `cloneFromInput`<sup>Optional</sup> <a name="cloneFromInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFromInput"></a>

```java
public java.lang.String getCloneFromInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableExecuteApiEndpointInput`<sup>Optional</sup> <a name="disableExecuteApiEndpointInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpointInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableExecuteApiEndpointInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpointAccessModeInput`<sup>Optional</sup> <a name="endpointAccessModeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessModeInput"></a>

```java
public java.lang.String getEndpointAccessModeInput();
```

- *Type:* java.lang.String

---

##### `endpointConfigurationInput`<sup>Optional</sup> <a name="endpointConfigurationInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfigurationInput"></a>

```java
public IResolvable|ApigatewayRestApiEndpointConfiguration getEndpointConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

---

##### `failOnWarningsInput`<sup>Optional</sup> <a name="failOnWarningsInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarningsInput"></a>

```java
public java.lang.Boolean|IResolvable getFailOnWarningsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `minimumCompressionSizeInput`<sup>Optional</sup> <a name="minimumCompressionSizeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSizeInput"></a>

```java
public java.lang.Number getMinimumCompressionSizeInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicyInput"></a>

```java
public java.lang.String getSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ApigatewayRestApiTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>>

---

##### `apiKeySourceType`<sup>Required</sup> <a name="apiKeySourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceType"></a>

```java
public java.lang.String getApiKeySourceType();
```

- *Type:* java.lang.String

---

##### `binaryMediaTypes`<sup>Required</sup> <a name="binaryMediaTypes" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypes"></a>

```java
public java.util.List<java.lang.String> getBinaryMediaTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `cloneFrom`<sup>Required</sup> <a name="cloneFrom" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFrom"></a>

```java
public java.lang.String getCloneFrom();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="disableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpoint"></a>

```java
public java.lang.Boolean|IResolvable getDisableExecuteApiEndpoint();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpointAccessMode`<sup>Required</sup> <a name="endpointAccessMode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessMode"></a>

```java
public java.lang.String getEndpointAccessMode();
```

- *Type:* java.lang.String

---

##### `failOnWarnings`<sup>Required</sup> <a name="failOnWarnings" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarnings"></a>

```java
public java.lang.Boolean|IResolvable getFailOnWarnings();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `minimumCompressionSize`<sup>Required</sup> <a name="minimumCompressionSize" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSize"></a>

```java
public java.lang.Number getMinimumCompressionSize();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayRestApiBodyS3Location <a name="ApigatewayRestApiBodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_rest_api.ApigatewayRestApiBodyS3Location;

ApigatewayRestApiBodyS3Location.builder()
//  .bucket(java.lang.String)
//  .eTag(java.lang.String)
//  .key(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the S3 bucket where the OpenAPI file is stored. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.eTag">eTag</a></code> | <code>java.lang.String</code> | The Amazon S3 ETag (a file checksum) of the OpenAPI file. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.key">key</a></code> | <code>java.lang.String</code> | The file name of the OpenAPI file (Amazon S3 object name). |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.version">version</a></code> | <code>java.lang.String</code> | For versioning-enabled buckets, a specific version of the OpenAPI file. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The name of the S3 bucket where the OpenAPI file is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#bucket ApigatewayRestApi#bucket}

---

##### `eTag`<sup>Optional</sup> <a name="eTag" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.eTag"></a>

```java
public java.lang.String getETag();
```

- *Type:* java.lang.String

The Amazon S3 ETag (a file checksum) of the OpenAPI file.

If you don't specify a value, API Gateway skips ETag validation of your OpenAPI file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#e_tag ApigatewayRestApi#e_tag}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The file name of the OpenAPI file (Amazon S3 object name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#key ApigatewayRestApi#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

For versioning-enabled buckets, a specific version of the OpenAPI file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#version ApigatewayRestApi#version}

---

### ApigatewayRestApiConfig <a name="ApigatewayRestApiConfig" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_rest_api.ApigatewayRestApiConfig;

ApigatewayRestApiConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .apiKeySourceType(java.lang.String)
//  .binaryMediaTypes(java.util.List<java.lang.String>)
//  .body(java.lang.String)
//  .bodyS3Location(ApigatewayRestApiBodyS3Location)
//  .cloneFrom(java.lang.String)
//  .description(java.lang.String)
//  .disableExecuteApiEndpoint(java.lang.Boolean|IResolvable)
//  .endpointAccessMode(java.lang.String)
//  .endpointConfiguration(ApigatewayRestApiEndpointConfiguration)
//  .failOnWarnings(java.lang.Boolean|IResolvable)
//  .minimumCompressionSize(java.lang.Number)
//  .mode(java.lang.String)
//  .name(java.lang.String)
//  .parameters(java.lang.String)
//  .policy(java.lang.String)
//  .securityPolicy(java.lang.String)
//  .tags(IResolvable|java.util.List<ApigatewayRestApiTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.apiKeySourceType">apiKeySourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#api_key_source_type ApigatewayRestApi#api_key_source_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.binaryMediaTypes">binaryMediaTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#binary_media_types ApigatewayRestApi#binary_media_types}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.body">body</a></code> | <code>java.lang.String</code> | An OpenAPI specification that defines a set of RESTful APIs in JSON format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.bodyS3Location">bodyS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a></code> | The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.cloneFrom">cloneFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#clone_from ApigatewayRestApi#clone_from}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#description ApigatewayRestApi#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.disableExecuteApiEndpoint">disableExecuteApiEndpoint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#disable_execute_api_endpoint ApigatewayRestApi#disable_execute_api_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointAccessMode">endpointAccessMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_access_mode ApigatewayRestApi#endpoint_access_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a></code> | A list of the endpoint types and IP address types of the API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.failOnWarnings">failOnWarnings</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#fail_on_warnings ApigatewayRestApi#fail_on_warnings}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.minimumCompressionSize">minimumCompressionSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#minimum_compression_size ApigatewayRestApi#minimum_compression_size}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | This property applies only when you use OpenAPI to define your REST API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the RestApi. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#parameters ApigatewayRestApi#parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.policy">policy</a></code> | <code>java.lang.String</code> | A policy document that contains the permissions for the ``RestApi`` resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#security_policy ApigatewayRestApi#security_policy}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#tags ApigatewayRestApi#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiKeySourceType`<sup>Optional</sup> <a name="apiKeySourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.apiKeySourceType"></a>

```java
public java.lang.String getApiKeySourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#api_key_source_type ApigatewayRestApi#api_key_source_type}.

---

##### `binaryMediaTypes`<sup>Optional</sup> <a name="binaryMediaTypes" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.binaryMediaTypes"></a>

```java
public java.util.List<java.lang.String> getBinaryMediaTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#binary_media_types ApigatewayRestApi#binary_media_types}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

An OpenAPI specification that defines a set of RESTful APIs in JSON format.

For YAML templates, you can also provide the specification in YAML format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#body ApigatewayRestApi#body}

---

##### `bodyS3Location`<sup>Optional</sup> <a name="bodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.bodyS3Location"></a>

```java
public ApigatewayRestApiBodyS3Location getBodyS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#body_s3_location ApigatewayRestApi#body_s3_location}

---

##### `cloneFrom`<sup>Optional</sup> <a name="cloneFrom" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.cloneFrom"></a>

```java
public java.lang.String getCloneFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#clone_from ApigatewayRestApi#clone_from}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#description ApigatewayRestApi#description}.

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="disableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.disableExecuteApiEndpoint"></a>

```java
public java.lang.Boolean|IResolvable getDisableExecuteApiEndpoint();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#disable_execute_api_endpoint ApigatewayRestApi#disable_execute_api_endpoint}.

---

##### `endpointAccessMode`<sup>Optional</sup> <a name="endpointAccessMode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointAccessMode"></a>

```java
public java.lang.String getEndpointAccessMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_access_mode ApigatewayRestApi#endpoint_access_mode}.

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="endpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointConfiguration"></a>

```java
public ApigatewayRestApiEndpointConfiguration getEndpointConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

A list of the endpoint types and IP address types of the API.

Use this property when creating an API. When importing an existing API, specify the endpoint configuration types using the `Parameters` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_configuration ApigatewayRestApi#endpoint_configuration}

---

##### `failOnWarnings`<sup>Optional</sup> <a name="failOnWarnings" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.failOnWarnings"></a>

```java
public java.lang.Boolean|IResolvable getFailOnWarnings();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#fail_on_warnings ApigatewayRestApi#fail_on_warnings}.

---

##### `minimumCompressionSize`<sup>Optional</sup> <a name="minimumCompressionSize" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.minimumCompressionSize"></a>

```java
public java.lang.Number getMinimumCompressionSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#minimum_compression_size ApigatewayRestApi#minimum_compression_size}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

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

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the RestApi.

A name is required if the REST API is not based on an OpenAPI specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#name ApigatewayRestApi#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#parameters ApigatewayRestApi#parameters}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

A policy document that contains the permissions for the ``RestApi`` resource.

To set the ARN for the policy, use the `!Join` intrinsic function with `""` as delimiter and values of `"execute-api:/"` and `"*"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#policy ApigatewayRestApi#policy}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#security_policy ApigatewayRestApi#security_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ApigatewayRestApiTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#tags ApigatewayRestApi#tags}.

---

### ApigatewayRestApiEndpointConfiguration <a name="ApigatewayRestApiEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_rest_api.ApigatewayRestApiEndpointConfiguration;

ApigatewayRestApiEndpointConfiguration.builder()
//  .ipAddressType(java.lang.String)
//  .types(java.util.List<java.lang.String>)
//  .vpcEndpointIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#ip_address_type ApigatewayRestApi#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.types">types</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#types ApigatewayRestApi#types}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.vpcEndpointIds">vpcEndpointIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#vpc_endpoint_ids ApigatewayRestApi#vpc_endpoint_ids}. |

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#ip_address_type ApigatewayRestApi#ip_address_type}.

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.types"></a>

```java
public java.util.List<java.lang.String> getTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#types ApigatewayRestApi#types}.

---

##### `vpcEndpointIds`<sup>Optional</sup> <a name="vpcEndpointIds" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.vpcEndpointIds"></a>

```java
public java.util.List<java.lang.String> getVpcEndpointIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#vpc_endpoint_ids ApigatewayRestApi#vpc_endpoint_ids}.

---

### ApigatewayRestApiTags <a name="ApigatewayRestApiTags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_rest_api.ApigatewayRestApiTags;

ApigatewayRestApiTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.key">key</a></code> | <code>java.lang.String</code> | A string you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A string you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#key ApigatewayRestApi#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#value ApigatewayRestApi#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayRestApiBodyS3LocationOutputReference <a name="ApigatewayRestApiBodyS3LocationOutputReference" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_rest_api.ApigatewayRestApiBodyS3LocationOutputReference;

new ApigatewayRestApiBodyS3LocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetETag">resetETag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetETag` <a name="resetETag" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetETag"></a>

```java
public void resetETag()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTagInput">eTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTag">eTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `eTagInput`<sup>Optional</sup> <a name="eTagInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTagInput"></a>

```java
public java.lang.String getETagInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `eTag`<sup>Required</sup> <a name="eTag" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTag"></a>

```java
public java.lang.String getETag();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayRestApiBodyS3Location getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

---


### ApigatewayRestApiEndpointConfigurationOutputReference <a name="ApigatewayRestApiEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_rest_api.ApigatewayRestApiEndpointConfigurationOutputReference;

new ApigatewayRestApiEndpointConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetTypes">resetTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds">resetVpcEndpointIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetTypes` <a name="resetTypes" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetTypes"></a>

```java
public void resetTypes()
```

##### `resetVpcEndpointIds` <a name="resetVpcEndpointIds" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds"></a>

```java
public void resetVpcEndpointIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.typesInput">typesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput">vpcEndpointIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.types">types</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds">vpcEndpointIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.typesInput"></a>

```java
public java.util.List<java.lang.String> getTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcEndpointIdsInput`<sup>Optional</sup> <a name="vpcEndpointIdsInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcEndpointIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.types"></a>

```java
public java.util.List<java.lang.String> getTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcEndpointIds`<sup>Required</sup> <a name="vpcEndpointIds" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds"></a>

```java
public java.util.List<java.lang.String> getVpcEndpointIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayRestApiEndpointConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

---


### ApigatewayRestApiTagsList <a name="ApigatewayRestApiTagsList" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_rest_api.ApigatewayRestApiTagsList;

new ApigatewayRestApiTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.get"></a>

```java
public ApigatewayRestApiTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApigatewayRestApiTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>>

---


### ApigatewayRestApiTagsOutputReference <a name="ApigatewayRestApiTagsOutputReference" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_rest_api.ApigatewayRestApiTagsOutputReference;

new ApigatewayRestApiTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayRestApiTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>

---



