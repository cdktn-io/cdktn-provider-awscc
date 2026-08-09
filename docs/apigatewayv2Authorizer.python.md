# `apigatewayv2Authorizer` Submodule <a name="`apigatewayv2Authorizer` Submodule" id="@cdktn/provider-awscc.apigatewayv2Authorizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Authorizer <a name="Apigatewayv2Authorizer" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer awscc_apigatewayv2_authorizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_authorizer

apigatewayv2Authorizer.Apigatewayv2Authorizer(
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
  authorizer_type: str,
  name: str,
  authorizer_credentials_arn: str = None,
  authorizer_payload_format_version: str = None,
  authorizer_result_ttl_in_seconds: typing.Union[int, float] = None,
  authorizer_uri: str = None,
  enable_simple_responses: bool | IResolvable = None,
  identity_source: typing.List[str] = None,
  identity_validation_expression: str = None,
  jwt_configuration: Apigatewayv2AuthorizerJwtConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.apiId">api_id</a></code> | <code>str</code> | The API identifier. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerType">authorizer_type</a></code> | <code>str</code> | The authorizer type. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the authorizer. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerCredentialsArn">authorizer_credentials_arn</a></code> | <code>str</code> | Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerPayloadFormatVersion">authorizer_payload_format_version</a></code> | <code>str</code> | Specifies the format of the payload sent to an HTTP API Lambda authorizer. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The time to live (TTL) for cached authorizer results, in seconds. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerUri">authorizer_uri</a></code> | <code>str</code> | The authorizer's Uniform Resource Identifier (URI). |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.enableSimpleResponses">enable_simple_responses</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether a Lambda authorizer returns a response in a simple format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.identitySource">identity_source</a></code> | <code>typing.List[str]</code> | The identity source for which authorization is requested. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | This parameter is not used. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.jwtConfiguration">jwt_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | The ``JWTConfiguration`` property specifies the configuration of a JWT authorizer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.apiId"></a>

- *Type:* str

The API identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#api_id Apigatewayv2Authorizer#api_id}

---

##### `authorizer_type`<sup>Required</sup> <a name="authorizer_type" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerType"></a>

- *Type:* str

The authorizer type.

Specify `REQUEST` for a Lambda function using incoming request parameters. Specify `JWT` to use JSON Web Tokens (supported only for HTTP APIs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#authorizer_type Apigatewayv2Authorizer#authorizer_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.name"></a>

- *Type:* str

The name of the authorizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#name Apigatewayv2Authorizer#name}

---

##### `authorizer_credentials_arn`<sup>Optional</sup> <a name="authorizer_credentials_arn" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerCredentialsArn"></a>

- *Type:* str

Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer.

To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for `REQUEST` authorizers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#authorizer_credentials_arn Apigatewayv2Authorizer#authorizer_credentials_arn}

---

##### `authorizer_payload_format_version`<sup>Optional</sup> <a name="authorizer_payload_format_version" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerPayloadFormatVersion"></a>

- *Type:* str

Specifies the format of the payload sent to an HTTP API Lambda authorizer.

Required for HTTP API Lambda authorizers. Supported values are `1.0` and `2.0`. To learn more, see [Working with Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#authorizer_payload_format_version Apigatewayv2Authorizer#authorizer_payload_format_version}

---

##### `authorizer_result_ttl_in_seconds`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerResultTtlInSeconds"></a>

- *Type:* typing.Union[int, float]

The time to live (TTL) for cached authorizer results, in seconds.

If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#authorizer_result_ttl_in_seconds Apigatewayv2Authorizer#authorizer_result_ttl_in_seconds}

---

##### `authorizer_uri`<sup>Optional</sup> <a name="authorizer_uri" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerUri"></a>

- *Type:* str

The authorizer's Uniform Resource Identifier (URI).

For `REQUEST` authorizers, this must be a well-formed Lambda function URI, for example, `arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations`. In general, the URI has this form: `arn:aws:apigateway:{region}:lambda:path/{service_api}`, where *{region}* is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial `/`. For Lambda functions, this is usually of the form `/2015-03-31/functions/[FunctionARN]/invocations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#authorizer_uri Apigatewayv2Authorizer#authorizer_uri}

---

##### `enable_simple_responses`<sup>Optional</sup> <a name="enable_simple_responses" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.enableSimpleResponses"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether a Lambda authorizer returns a response in a simple format.

By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see [Working with Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#enable_simple_responses Apigatewayv2Authorizer#enable_simple_responses}

---

##### `identity_source`<sup>Optional</sup> <a name="identity_source" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.identitySource"></a>

- *Type:* typing.List[str]

The identity source for which authorization is requested.

For a `REQUEST` authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with `$`, for example, `$request.header.Auth`, `$request.querystring.Name`. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see [Working with Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
For `JWT`, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example `$request.header.Authorization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#identity_source Apigatewayv2Authorizer#identity_source}

---

##### `identity_validation_expression`<sup>Optional</sup> <a name="identity_validation_expression" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.identityValidationExpression"></a>

- *Type:* str

This parameter is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#identity_validation_expression Apigatewayv2Authorizer#identity_validation_expression}

---

##### `jwt_configuration`<sup>Optional</sup> <a name="jwt_configuration" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.jwtConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

The ``JWTConfiguration`` property specifies the configuration of a JWT authorizer.

Required for the `JWT` authorizer type. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#jwt_configuration Apigatewayv2Authorizer#jwt_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.putJwtConfiguration">put_jwt_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerCredentialsArn">reset_authorizer_credentials_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerPayloadFormatVersion">reset_authorizer_payload_format_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerResultTtlInSeconds">reset_authorizer_result_ttl_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerUri">reset_authorizer_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetEnableSimpleResponses">reset_enable_simple_responses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetIdentitySource">reset_identity_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetIdentityValidationExpression">reset_identity_validation_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetJwtConfiguration">reset_jwt_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_jwt_configuration` <a name="put_jwt_configuration" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.putJwtConfiguration"></a>

```python
def put_jwt_configuration(
  audience: typing.List[str] = None,
  issuer: str = None
) -> None
```

###### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.putJwtConfiguration.parameter.audience"></a>

- *Type:* typing.List[str]

A list of the intended recipients of the JWT.

A valid JWT must provide an `aud` that matches at least one entry in this list. See [RFC 7519](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc7519#section-4.1.3). Required for the `JWT` authorizer type. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#audience Apigatewayv2Authorizer#audience}

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.putJwtConfiguration.parameter.issuer"></a>

- *Type:* str

The base domain of the identity provider that issues JSON Web Tokens.

For example, an Amazon Cognito user pool has the following format: `https://cognito-idp.{region}.amazonaws.com/{userPoolId}`. Required for the `JWT` authorizer type. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#issuer Apigatewayv2Authorizer#issuer}

---

##### `reset_authorizer_credentials_arn` <a name="reset_authorizer_credentials_arn" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerCredentialsArn"></a>

```python
def reset_authorizer_credentials_arn() -> None
```

##### `reset_authorizer_payload_format_version` <a name="reset_authorizer_payload_format_version" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerPayloadFormatVersion"></a>

```python
def reset_authorizer_payload_format_version() -> None
```

##### `reset_authorizer_result_ttl_in_seconds` <a name="reset_authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerResultTtlInSeconds"></a>

```python
def reset_authorizer_result_ttl_in_seconds() -> None
```

##### `reset_authorizer_uri` <a name="reset_authorizer_uri" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerUri"></a>

```python
def reset_authorizer_uri() -> None
```

##### `reset_enable_simple_responses` <a name="reset_enable_simple_responses" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetEnableSimpleResponses"></a>

```python
def reset_enable_simple_responses() -> None
```

##### `reset_identity_source` <a name="reset_identity_source" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetIdentitySource"></a>

```python
def reset_identity_source() -> None
```

##### `reset_identity_validation_expression` <a name="reset_identity_validation_expression" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetIdentityValidationExpression"></a>

```python
def reset_identity_validation_expression() -> None
```

##### `reset_jwt_configuration` <a name="reset_jwt_configuration" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetJwtConfiguration"></a>

```python
def reset_jwt_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Apigatewayv2Authorizer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isConstruct"></a>

```python
from cdktn_provider_awscc import apigatewayv2_authorizer

apigatewayv2Authorizer.Apigatewayv2Authorizer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apigatewayv2_authorizer

apigatewayv2Authorizer.Apigatewayv2Authorizer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apigatewayv2_authorizer

apigatewayv2Authorizer.Apigatewayv2Authorizer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apigatewayv2_authorizer

apigatewayv2Authorizer.Apigatewayv2Authorizer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Apigatewayv2Authorizer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Apigatewayv2Authorizer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Apigatewayv2Authorizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2Authorizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerId">authorizer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfiguration">jwt_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference">Apigatewayv2AuthorizerJwtConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArnInput">authorizer_credentials_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersionInput">authorizer_payload_format_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSecondsInput">authorizer_result_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerTypeInput">authorizer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUriInput">authorizer_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponsesInput">enable_simple_responses_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySourceInput">identity_source_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identityValidationExpressionInput">identity_validation_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfigurationInput">jwt_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArn">authorizer_credentials_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersion">authorizer_payload_format_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerType">authorizer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponses">enable_simple_responses</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySource">identity_source</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authorizer_id`<sup>Required</sup> <a name="authorizer_id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `jwt_configuration`<sup>Required</sup> <a name="jwt_configuration" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfiguration"></a>

```python
jwt_configuration: Apigatewayv2AuthorizerJwtConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference">Apigatewayv2AuthorizerJwtConfigurationOutputReference</a>

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `authorizer_credentials_arn_input`<sup>Optional</sup> <a name="authorizer_credentials_arn_input" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArnInput"></a>

```python
authorizer_credentials_arn_input: str
```

- *Type:* str

---

##### `authorizer_payload_format_version_input`<sup>Optional</sup> <a name="authorizer_payload_format_version_input" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersionInput"></a>

```python
authorizer_payload_format_version_input: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds_input`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds_input" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSecondsInput"></a>

```python
authorizer_result_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_type_input`<sup>Optional</sup> <a name="authorizer_type_input" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerTypeInput"></a>

```python
authorizer_type_input: str
```

- *Type:* str

---

##### `authorizer_uri_input`<sup>Optional</sup> <a name="authorizer_uri_input" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUriInput"></a>

```python
authorizer_uri_input: str
```

- *Type:* str

---

##### `enable_simple_responses_input`<sup>Optional</sup> <a name="enable_simple_responses_input" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponsesInput"></a>

```python
enable_simple_responses_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `identity_source_input`<sup>Optional</sup> <a name="identity_source_input" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySourceInput"></a>

```python
identity_source_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_validation_expression_input`<sup>Optional</sup> <a name="identity_validation_expression_input" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identityValidationExpressionInput"></a>

```python
identity_validation_expression_input: str
```

- *Type:* str

---

##### `jwt_configuration_input`<sup>Optional</sup> <a name="jwt_configuration_input" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfigurationInput"></a>

```python
jwt_configuration_input: IResolvable | Apigatewayv2AuthorizerJwtConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `authorizer_credentials_arn`<sup>Required</sup> <a name="authorizer_credentials_arn" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArn"></a>

```python
authorizer_credentials_arn: str
```

- *Type:* str

---

##### `authorizer_payload_format_version`<sup>Required</sup> <a name="authorizer_payload_format_version" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersion"></a>

```python
authorizer_payload_format_version: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds`<sup>Required</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_type`<sup>Required</sup> <a name="authorizer_type" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerType"></a>

```python
authorizer_type: str
```

- *Type:* str

---

##### `authorizer_uri`<sup>Required</sup> <a name="authorizer_uri" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

---

##### `enable_simple_responses`<sup>Required</sup> <a name="enable_simple_responses" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponses"></a>

```python
enable_simple_responses: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `identity_source`<sup>Required</sup> <a name="identity_source" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySource"></a>

```python
identity_source: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_validation_expression`<sup>Required</sup> <a name="identity_validation_expression" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2AuthorizerConfig <a name="Apigatewayv2AuthorizerConfig" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_authorizer

apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_id: str,
  authorizer_type: str,
  name: str,
  authorizer_credentials_arn: str = None,
  authorizer_payload_format_version: str = None,
  authorizer_result_ttl_in_seconds: typing.Union[int, float] = None,
  authorizer_uri: str = None,
  enable_simple_responses: bool | IResolvable = None,
  identity_source: typing.List[str] = None,
  identity_validation_expression: str = None,
  jwt_configuration: Apigatewayv2AuthorizerJwtConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.apiId">api_id</a></code> | <code>str</code> | The API identifier. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerType">authorizer_type</a></code> | <code>str</code> | The authorizer type. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.name">name</a></code> | <code>str</code> | The name of the authorizer. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerCredentialsArn">authorizer_credentials_arn</a></code> | <code>str</code> | Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerPayloadFormatVersion">authorizer_payload_format_version</a></code> | <code>str</code> | Specifies the format of the payload sent to an HTTP API Lambda authorizer. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The time to live (TTL) for cached authorizer results, in seconds. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | The authorizer's Uniform Resource Identifier (URI). |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.enableSimpleResponses">enable_simple_responses</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether a Lambda authorizer returns a response in a simple format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.identitySource">identity_source</a></code> | <code>typing.List[str]</code> | The identity source for which authorization is requested. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | This parameter is not used. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.jwtConfiguration">jwt_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | The ``JWTConfiguration`` property specifies the configuration of a JWT authorizer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

The API identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#api_id Apigatewayv2Authorizer#api_id}

---

##### `authorizer_type`<sup>Required</sup> <a name="authorizer_type" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerType"></a>

```python
authorizer_type: str
```

- *Type:* str

The authorizer type.

Specify `REQUEST` for a Lambda function using incoming request parameters. Specify `JWT` to use JSON Web Tokens (supported only for HTTP APIs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#authorizer_type Apigatewayv2Authorizer#authorizer_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the authorizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#name Apigatewayv2Authorizer#name}

---

##### `authorizer_credentials_arn`<sup>Optional</sup> <a name="authorizer_credentials_arn" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerCredentialsArn"></a>

```python
authorizer_credentials_arn: str
```

- *Type:* str

Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer.

To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for `REQUEST` authorizers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#authorizer_credentials_arn Apigatewayv2Authorizer#authorizer_credentials_arn}

---

##### `authorizer_payload_format_version`<sup>Optional</sup> <a name="authorizer_payload_format_version" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerPayloadFormatVersion"></a>

```python
authorizer_payload_format_version: str
```

- *Type:* str

Specifies the format of the payload sent to an HTTP API Lambda authorizer.

Required for HTTP API Lambda authorizers. Supported values are `1.0` and `2.0`. To learn more, see [Working with Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#authorizer_payload_format_version Apigatewayv2Authorizer#authorizer_payload_format_version}

---

##### `authorizer_result_ttl_in_seconds`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time to live (TTL) for cached authorizer results, in seconds.

If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#authorizer_result_ttl_in_seconds Apigatewayv2Authorizer#authorizer_result_ttl_in_seconds}

---

##### `authorizer_uri`<sup>Optional</sup> <a name="authorizer_uri" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

The authorizer's Uniform Resource Identifier (URI).

For `REQUEST` authorizers, this must be a well-formed Lambda function URI, for example, `arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations`. In general, the URI has this form: `arn:aws:apigateway:{region}:lambda:path/{service_api}`, where *{region}* is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial `/`. For Lambda functions, this is usually of the form `/2015-03-31/functions/[FunctionARN]/invocations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#authorizer_uri Apigatewayv2Authorizer#authorizer_uri}

---

##### `enable_simple_responses`<sup>Optional</sup> <a name="enable_simple_responses" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.enableSimpleResponses"></a>

```python
enable_simple_responses: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether a Lambda authorizer returns a response in a simple format.

By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see [Working with Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#enable_simple_responses Apigatewayv2Authorizer#enable_simple_responses}

---

##### `identity_source`<sup>Optional</sup> <a name="identity_source" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.identitySource"></a>

```python
identity_source: typing.List[str]
```

- *Type:* typing.List[str]

The identity source for which authorization is requested.

For a `REQUEST` authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with `$`, for example, `$request.header.Auth`, `$request.querystring.Name`. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see [Working with Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
For `JWT`, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example `$request.header.Authorization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#identity_source Apigatewayv2Authorizer#identity_source}

---

##### `identity_validation_expression`<sup>Optional</sup> <a name="identity_validation_expression" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

This parameter is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#identity_validation_expression Apigatewayv2Authorizer#identity_validation_expression}

---

##### `jwt_configuration`<sup>Optional</sup> <a name="jwt_configuration" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.jwtConfiguration"></a>

```python
jwt_configuration: Apigatewayv2AuthorizerJwtConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

The ``JWTConfiguration`` property specifies the configuration of a JWT authorizer.

Required for the `JWT` authorizer type. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#jwt_configuration Apigatewayv2Authorizer#jwt_configuration}

---

### Apigatewayv2AuthorizerJwtConfiguration <a name="Apigatewayv2AuthorizerJwtConfiguration" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_authorizer

apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration(
  audience: typing.List[str] = None,
  issuer: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.audience">audience</a></code> | <code>typing.List[str]</code> | A list of the intended recipients of the JWT. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.issuer">issuer</a></code> | <code>str</code> | The base domain of the identity provider that issues JSON Web Tokens. |

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.audience"></a>

```python
audience: typing.List[str]
```

- *Type:* typing.List[str]

A list of the intended recipients of the JWT.

A valid JWT must provide an `aud` that matches at least one entry in this list. See [RFC 7519](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc7519#section-4.1.3). Required for the `JWT` authorizer type. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#audience Apigatewayv2Authorizer#audience}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

The base domain of the identity provider that issues JSON Web Tokens.

For example, an Amazon Cognito user pool has the following format: `https://cognito-idp.{region}.amazonaws.com/{userPoolId}`. Required for the `JWT` authorizer type. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_authorizer#issuer Apigatewayv2Authorizer#issuer}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2AuthorizerJwtConfigurationOutputReference <a name="Apigatewayv2AuthorizerJwtConfigurationOutputReference" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_authorizer

apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetAudience">reset_audience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audience` <a name="reset_audience" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetAudience"></a>

```python
def reset_audience() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audienceInput">audience_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audience">audience</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audienceInput"></a>

```python
audience_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audience"></a>

```python
audience: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2AuthorizerJwtConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

---



