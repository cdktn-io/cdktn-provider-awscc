# `apigatewayv2Integration` Submodule <a name="`apigatewayv2Integration` Submodule" id="@cdktn/provider-awscc.apigatewayv2Integration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Integration <a name="Apigatewayv2Integration" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration awscc_apigatewayv2_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2Integration(
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
  integration_type: str,
  connection_id: str = None,
  connection_type: str = None,
  content_handling_strategy: str = None,
  credentials_arn: str = None,
  description: str = None,
  integration_method: str = None,
  integration_subtype: str = None,
  integration_uri: str = None,
  passthrough_behavior: str = None,
  payload_format_version: str = None,
  request_parameters: typing.Mapping[str] = None,
  request_templates: typing.Mapping[str] = None,
  response_parameters: IResolvable | typing.Mapping[Apigatewayv2IntegrationResponseParameters] = None,
  template_selection_expression: str = None,
  timeout_in_millis: typing.Union[int, float] = None,
  tls_config: Apigatewayv2IntegrationTlsConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.apiId">api_id</a></code> | <code>str</code> | The API identifier. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationType">integration_type</a></code> | <code>str</code> | The integration type of an integration. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connectionId">connection_id</a></code> | <code>str</code> | The ID of the VPC link for a private integration. Supported only for HTTP APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connectionType">connection_type</a></code> | <code>str</code> | The type of the network connection to the integration endpoint. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.contentHandlingStrategy">content_handling_strategy</a></code> | <code>str</code> | Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.credentialsArn">credentials_arn</a></code> | <code>str</code> | Specifies the credentials required for the integration, if any. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the integration. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationMethod">integration_method</a></code> | <code>str</code> | Specifies the integration's HTTP method type. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationSubtype">integration_subtype</a></code> | <code>str</code> | Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationUri">integration_uri</a></code> | <code>str</code> | For a Lambda integration, specify the URI of a Lambda function. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.passthroughBehavior">passthrough_behavior</a></code> | <code>str</code> | Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.payloadFormatVersion">payload_format_version</a></code> | <code>str</code> | Specifies the format of the payload sent to an integration. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.requestParameters">request_parameters</a></code> | <code>typing.Mapping[str]</code> | A key-value map specifying parameters. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.requestTemplates">request_templates</a></code> | <code>typing.Mapping[str]</code> | A map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.responseParameters">response_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]</code> | Parameters that transform the HTTP response from a backend integration before returning the response to clients. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.templateSelectionExpression">template_selection_expression</a></code> | <code>str</code> | The template selection expression for the integration. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.timeoutInMillis">timeout_in_millis</a></code> | <code>typing.Union[int, float]</code> | Custom timeout between 50 and 29000 milliseconds for WebSocket APIs and between 50 and 30000 milliseconds for HTTP APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | The TLS configuration for a private integration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.apiId"></a>

- *Type:* str

The API identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#api_id Apigatewayv2Integration#api_id}

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationType"></a>

- *Type:* str

The integration type of an integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#integration_type Apigatewayv2Integration#integration_type}

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connectionId"></a>

- *Type:* str

The ID of the VPC link for a private integration. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#connection_id Apigatewayv2Integration#connection_id}

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connectionType"></a>

- *Type:* str

The type of the network connection to the integration endpoint.

Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#connection_type Apigatewayv2Integration#connection_type}

---

##### `content_handling_strategy`<sup>Optional</sup> <a name="content_handling_strategy" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.contentHandlingStrategy"></a>

- *Type:* str

Supported only for WebSocket APIs.

Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}

---

##### `credentials_arn`<sup>Optional</sup> <a name="credentials_arn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.credentialsArn"></a>

- *Type:* str

Specifies the credentials required for the integration, if any.

For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, don't specify this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#credentials_arn Apigatewayv2Integration#credentials_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.description"></a>

- *Type:* str

The description of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#description Apigatewayv2Integration#description}

---

##### `integration_method`<sup>Optional</sup> <a name="integration_method" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationMethod"></a>

- *Type:* str

Specifies the integration's HTTP method type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#integration_method Apigatewayv2Integration#integration_method}

---

##### `integration_subtype`<sup>Optional</sup> <a name="integration_subtype" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationSubtype"></a>

- *Type:* str

Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#integration_subtype Apigatewayv2Integration#integration_subtype}

---

##### `integration_uri`<sup>Optional</sup> <a name="integration_uri" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationUri"></a>

- *Type:* str

For a Lambda integration, specify the URI of a Lambda function.

For an HTTP integration, specify a fully-qualified URL. For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#integration_uri Apigatewayv2Integration#integration_uri}

---

##### `passthrough_behavior`<sup>Optional</sup> <a name="passthrough_behavior" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.passthroughBehavior"></a>

- *Type:* str

Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource.

There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}

---

##### `payload_format_version`<sup>Optional</sup> <a name="payload_format_version" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.payloadFormatVersion"></a>

- *Type:* str

Specifies the format of the payload sent to an integration.

Required for HTTP APIs. For HTTP APIs, supported values for Lambda proxy integrations are 1.0 and 2.0 For all other integrations, 1.0 is the only supported value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#payload_format_version Apigatewayv2Integration#payload_format_version}

---

##### `request_parameters`<sup>Optional</sup> <a name="request_parameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.requestParameters"></a>

- *Type:* typing.Mapping[str]

A key-value map specifying parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#request_parameters Apigatewayv2Integration#request_parameters}

---

##### `request_templates`<sup>Optional</sup> <a name="request_templates" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.requestTemplates"></a>

- *Type:* typing.Mapping[str]

A map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#request_templates Apigatewayv2Integration#request_templates}

---

##### `response_parameters`<sup>Optional</sup> <a name="response_parameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.responseParameters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]

Parameters that transform the HTTP response from a backend integration before returning the response to clients.

Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#response_parameters Apigatewayv2Integration#response_parameters}

---

##### `template_selection_expression`<sup>Optional</sup> <a name="template_selection_expression" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.templateSelectionExpression"></a>

- *Type:* str

The template selection expression for the integration. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#template_selection_expression Apigatewayv2Integration#template_selection_expression}

---

##### `timeout_in_millis`<sup>Optional</sup> <a name="timeout_in_millis" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.timeoutInMillis"></a>

- *Type:* typing.Union[int, float]

Custom timeout between 50 and 29000 milliseconds for WebSocket APIs and between 50 and 30000 milliseconds for HTTP APIs.

The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#timeout_in_millis Apigatewayv2Integration#timeout_in_millis}

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

The TLS configuration for a private integration.

If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#tls_config Apigatewayv2Integration#tls_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters">put_response_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig">put_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionId">reset_connection_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionType">reset_connection_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetContentHandlingStrategy">reset_content_handling_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetCredentialsArn">reset_credentials_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationMethod">reset_integration_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationSubtype">reset_integration_subtype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationUri">reset_integration_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetPassthroughBehavior">reset_passthrough_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetPayloadFormatVersion">reset_payload_format_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetRequestParameters">reset_request_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetRequestTemplates">reset_request_templates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetResponseParameters">reset_response_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetTemplateSelectionExpression">reset_template_selection_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetTimeoutInMillis">reset_timeout_in_millis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetTlsConfig">reset_tls_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_response_parameters` <a name="put_response_parameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters"></a>

```python
def put_response_parameters(
  value: IResolvable | typing.Mapping[Apigatewayv2IntegrationResponseParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]

---

##### `put_tls_config` <a name="put_tls_config" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig"></a>

```python
def put_tls_config(
  server_name_to_verify: str = None
) -> None
```

###### `server_name_to_verify`<sup>Optional</sup> <a name="server_name_to_verify" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig.parameter.serverNameToVerify"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#server_name_to_verify Apigatewayv2Integration#server_name_to_verify}.

---

##### `reset_connection_id` <a name="reset_connection_id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionId"></a>

```python
def reset_connection_id() -> None
```

##### `reset_connection_type` <a name="reset_connection_type" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionType"></a>

```python
def reset_connection_type() -> None
```

##### `reset_content_handling_strategy` <a name="reset_content_handling_strategy" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetContentHandlingStrategy"></a>

```python
def reset_content_handling_strategy() -> None
```

##### `reset_credentials_arn` <a name="reset_credentials_arn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetCredentialsArn"></a>

```python
def reset_credentials_arn() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_integration_method` <a name="reset_integration_method" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationMethod"></a>

```python
def reset_integration_method() -> None
```

##### `reset_integration_subtype` <a name="reset_integration_subtype" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationSubtype"></a>

```python
def reset_integration_subtype() -> None
```

##### `reset_integration_uri` <a name="reset_integration_uri" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationUri"></a>

```python
def reset_integration_uri() -> None
```

##### `reset_passthrough_behavior` <a name="reset_passthrough_behavior" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetPassthroughBehavior"></a>

```python
def reset_passthrough_behavior() -> None
```

##### `reset_payload_format_version` <a name="reset_payload_format_version" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetPayloadFormatVersion"></a>

```python
def reset_payload_format_version() -> None
```

##### `reset_request_parameters` <a name="reset_request_parameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetRequestParameters"></a>

```python
def reset_request_parameters() -> None
```

##### `reset_request_templates` <a name="reset_request_templates" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetRequestTemplates"></a>

```python
def reset_request_templates() -> None
```

##### `reset_response_parameters` <a name="reset_response_parameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetResponseParameters"></a>

```python
def reset_response_parameters() -> None
```

##### `reset_template_selection_expression` <a name="reset_template_selection_expression" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetTemplateSelectionExpression"></a>

```python
def reset_template_selection_expression() -> None
```

##### `reset_timeout_in_millis` <a name="reset_timeout_in_millis" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetTimeoutInMillis"></a>

```python
def reset_timeout_in_millis() -> None
```

##### `reset_tls_config` <a name="reset_tls_config" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetTlsConfig"></a>

```python
def reset_tls_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Apigatewayv2Integration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isConstruct"></a>

```python
from cdktn_provider_awscc import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2Integration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2Integration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2Integration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2Integration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Apigatewayv2Integration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Apigatewayv2Integration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Apigatewayv2Integration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2Integration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationId">integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.responseParameters">response_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap">Apigatewayv2IntegrationResponseParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference">Apigatewayv2IntegrationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategyInput">content_handling_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArnInput">credentials_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethodInput">integration_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtypeInput">integration_subtype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationTypeInput">integration_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUriInput">integration_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehaviorInput">passthrough_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersionInput">payload_format_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.requestParametersInput">request_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplatesInput">request_templates_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.responseParametersInput">response_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpressionInput">template_selection_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutInMillisInput">timeout_in_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfigInput">tls_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategy">content_handling_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArn">credentials_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethod">integration_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtype">integration_subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationType">integration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUri">integration_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehavior">passthrough_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersion">payload_format_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.requestParameters">request_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplates">request_templates</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpression">template_selection_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutInMillis">timeout_in_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

---

##### `response_parameters`<sup>Required</sup> <a name="response_parameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.responseParameters"></a>

```python
response_parameters: Apigatewayv2IntegrationResponseParametersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap">Apigatewayv2IntegrationResponseParametersMap</a>

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfig"></a>

```python
tls_config: Apigatewayv2IntegrationTlsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference">Apigatewayv2IntegrationTlsConfigOutputReference</a>

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `content_handling_strategy_input`<sup>Optional</sup> <a name="content_handling_strategy_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategyInput"></a>

```python
content_handling_strategy_input: str
```

- *Type:* str

---

##### `credentials_arn_input`<sup>Optional</sup> <a name="credentials_arn_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArnInput"></a>

```python
credentials_arn_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `integration_method_input`<sup>Optional</sup> <a name="integration_method_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethodInput"></a>

```python
integration_method_input: str
```

- *Type:* str

---

##### `integration_subtype_input`<sup>Optional</sup> <a name="integration_subtype_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtypeInput"></a>

```python
integration_subtype_input: str
```

- *Type:* str

---

##### `integration_type_input`<sup>Optional</sup> <a name="integration_type_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationTypeInput"></a>

```python
integration_type_input: str
```

- *Type:* str

---

##### `integration_uri_input`<sup>Optional</sup> <a name="integration_uri_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUriInput"></a>

```python
integration_uri_input: str
```

- *Type:* str

---

##### `passthrough_behavior_input`<sup>Optional</sup> <a name="passthrough_behavior_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehaviorInput"></a>

```python
passthrough_behavior_input: str
```

- *Type:* str

---

##### `payload_format_version_input`<sup>Optional</sup> <a name="payload_format_version_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersionInput"></a>

```python
payload_format_version_input: str
```

- *Type:* str

---

##### `request_parameters_input`<sup>Optional</sup> <a name="request_parameters_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.requestParametersInput"></a>

```python
request_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_templates_input`<sup>Optional</sup> <a name="request_templates_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplatesInput"></a>

```python
request_templates_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `response_parameters_input`<sup>Optional</sup> <a name="response_parameters_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.responseParametersInput"></a>

```python
response_parameters_input: IResolvable | typing.Mapping[Apigatewayv2IntegrationResponseParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]

---

##### `template_selection_expression_input`<sup>Optional</sup> <a name="template_selection_expression_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpressionInput"></a>

```python
template_selection_expression_input: str
```

- *Type:* str

---

##### `timeout_in_millis_input`<sup>Optional</sup> <a name="timeout_in_millis_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutInMillisInput"></a>

```python
timeout_in_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tls_config_input`<sup>Optional</sup> <a name="tls_config_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfigInput"></a>

```python
tls_config_input: IResolvable | Apigatewayv2IntegrationTlsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `content_handling_strategy`<sup>Required</sup> <a name="content_handling_strategy" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategy"></a>

```python
content_handling_strategy: str
```

- *Type:* str

---

##### `credentials_arn`<sup>Required</sup> <a name="credentials_arn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArn"></a>

```python
credentials_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `integration_method`<sup>Required</sup> <a name="integration_method" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethod"></a>

```python
integration_method: str
```

- *Type:* str

---

##### `integration_subtype`<sup>Required</sup> <a name="integration_subtype" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtype"></a>

```python
integration_subtype: str
```

- *Type:* str

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationType"></a>

```python
integration_type: str
```

- *Type:* str

---

##### `integration_uri`<sup>Required</sup> <a name="integration_uri" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUri"></a>

```python
integration_uri: str
```

- *Type:* str

---

##### `passthrough_behavior`<sup>Required</sup> <a name="passthrough_behavior" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehavior"></a>

```python
passthrough_behavior: str
```

- *Type:* str

---

##### `payload_format_version`<sup>Required</sup> <a name="payload_format_version" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersion"></a>

```python
payload_format_version: str
```

- *Type:* str

---

##### `request_parameters`<sup>Required</sup> <a name="request_parameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.requestParameters"></a>

```python
request_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_templates`<sup>Required</sup> <a name="request_templates" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplates"></a>

```python
request_templates: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_selection_expression`<sup>Required</sup> <a name="template_selection_expression" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpression"></a>

```python
template_selection_expression: str
```

- *Type:* str

---

##### `timeout_in_millis`<sup>Required</sup> <a name="timeout_in_millis" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutInMillis"></a>

```python
timeout_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2IntegrationConfig <a name="Apigatewayv2IntegrationConfig" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2IntegrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_id: str,
  integration_type: str,
  connection_id: str = None,
  connection_type: str = None,
  content_handling_strategy: str = None,
  credentials_arn: str = None,
  description: str = None,
  integration_method: str = None,
  integration_subtype: str = None,
  integration_uri: str = None,
  passthrough_behavior: str = None,
  payload_format_version: str = None,
  request_parameters: typing.Mapping[str] = None,
  request_templates: typing.Mapping[str] = None,
  response_parameters: IResolvable | typing.Mapping[Apigatewayv2IntegrationResponseParameters] = None,
  template_selection_expression: str = None,
  timeout_in_millis: typing.Union[int, float] = None,
  tls_config: Apigatewayv2IntegrationTlsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.apiId">api_id</a></code> | <code>str</code> | The API identifier. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationType">integration_type</a></code> | <code>str</code> | The integration type of an integration. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionId">connection_id</a></code> | <code>str</code> | The ID of the VPC link for a private integration. Supported only for HTTP APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionType">connection_type</a></code> | <code>str</code> | The type of the network connection to the integration endpoint. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.contentHandlingStrategy">content_handling_strategy</a></code> | <code>str</code> | Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.credentialsArn">credentials_arn</a></code> | <code>str</code> | Specifies the credentials required for the integration, if any. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.description">description</a></code> | <code>str</code> | The description of the integration. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationMethod">integration_method</a></code> | <code>str</code> | Specifies the integration's HTTP method type. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationSubtype">integration_subtype</a></code> | <code>str</code> | Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationUri">integration_uri</a></code> | <code>str</code> | For a Lambda integration, specify the URI of a Lambda function. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.passthroughBehavior">passthrough_behavior</a></code> | <code>str</code> | Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.payloadFormatVersion">payload_format_version</a></code> | <code>str</code> | Specifies the format of the payload sent to an integration. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestParameters">request_parameters</a></code> | <code>typing.Mapping[str]</code> | A key-value map specifying parameters. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestTemplates">request_templates</a></code> | <code>typing.Mapping[str]</code> | A map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.responseParameters">response_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]</code> | Parameters that transform the HTTP response from a backend integration before returning the response to clients. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.templateSelectionExpression">template_selection_expression</a></code> | <code>str</code> | The template selection expression for the integration. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.timeoutInMillis">timeout_in_millis</a></code> | <code>typing.Union[int, float]</code> | Custom timeout between 50 and 29000 milliseconds for WebSocket APIs and between 50 and 30000 milliseconds for HTTP APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | The TLS configuration for a private integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

The API identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#api_id Apigatewayv2Integration#api_id}

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationType"></a>

```python
integration_type: str
```

- *Type:* str

The integration type of an integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#integration_type Apigatewayv2Integration#integration_type}

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

The ID of the VPC link for a private integration. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#connection_id Apigatewayv2Integration#connection_id}

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

The type of the network connection to the integration endpoint.

Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#connection_type Apigatewayv2Integration#connection_type}

---

##### `content_handling_strategy`<sup>Optional</sup> <a name="content_handling_strategy" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.contentHandlingStrategy"></a>

```python
content_handling_strategy: str
```

- *Type:* str

Supported only for WebSocket APIs.

Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}

---

##### `credentials_arn`<sup>Optional</sup> <a name="credentials_arn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.credentialsArn"></a>

```python
credentials_arn: str
```

- *Type:* str

Specifies the credentials required for the integration, if any.

For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, don't specify this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#credentials_arn Apigatewayv2Integration#credentials_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#description Apigatewayv2Integration#description}

---

##### `integration_method`<sup>Optional</sup> <a name="integration_method" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationMethod"></a>

```python
integration_method: str
```

- *Type:* str

Specifies the integration's HTTP method type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#integration_method Apigatewayv2Integration#integration_method}

---

##### `integration_subtype`<sup>Optional</sup> <a name="integration_subtype" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationSubtype"></a>

```python
integration_subtype: str
```

- *Type:* str

Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#integration_subtype Apigatewayv2Integration#integration_subtype}

---

##### `integration_uri`<sup>Optional</sup> <a name="integration_uri" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationUri"></a>

```python
integration_uri: str
```

- *Type:* str

For a Lambda integration, specify the URI of a Lambda function.

For an HTTP integration, specify a fully-qualified URL. For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#integration_uri Apigatewayv2Integration#integration_uri}

---

##### `passthrough_behavior`<sup>Optional</sup> <a name="passthrough_behavior" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.passthroughBehavior"></a>

```python
passthrough_behavior: str
```

- *Type:* str

Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource.

There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}

---

##### `payload_format_version`<sup>Optional</sup> <a name="payload_format_version" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.payloadFormatVersion"></a>

```python
payload_format_version: str
```

- *Type:* str

Specifies the format of the payload sent to an integration.

Required for HTTP APIs. For HTTP APIs, supported values for Lambda proxy integrations are 1.0 and 2.0 For all other integrations, 1.0 is the only supported value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#payload_format_version Apigatewayv2Integration#payload_format_version}

---

##### `request_parameters`<sup>Optional</sup> <a name="request_parameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestParameters"></a>

```python
request_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A key-value map specifying parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#request_parameters Apigatewayv2Integration#request_parameters}

---

##### `request_templates`<sup>Optional</sup> <a name="request_templates" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestTemplates"></a>

```python
request_templates: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#request_templates Apigatewayv2Integration#request_templates}

---

##### `response_parameters`<sup>Optional</sup> <a name="response_parameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.responseParameters"></a>

```python
response_parameters: IResolvable | typing.Mapping[Apigatewayv2IntegrationResponseParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]

Parameters that transform the HTTP response from a backend integration before returning the response to clients.

Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#response_parameters Apigatewayv2Integration#response_parameters}

---

##### `template_selection_expression`<sup>Optional</sup> <a name="template_selection_expression" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.templateSelectionExpression"></a>

```python
template_selection_expression: str
```

- *Type:* str

The template selection expression for the integration. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#template_selection_expression Apigatewayv2Integration#template_selection_expression}

---

##### `timeout_in_millis`<sup>Optional</sup> <a name="timeout_in_millis" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.timeoutInMillis"></a>

```python
timeout_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Custom timeout between 50 and 29000 milliseconds for WebSocket APIs and between 50 and 30000 milliseconds for HTTP APIs.

The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#timeout_in_millis Apigatewayv2Integration#timeout_in_millis}

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.tlsConfig"></a>

```python
tls_config: Apigatewayv2IntegrationTlsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

The TLS configuration for a private integration.

If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#tls_config Apigatewayv2Integration#tls_config}

---

### Apigatewayv2IntegrationResponseParameters <a name="Apigatewayv2IntegrationResponseParameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters(
  response_parameters: IResolvable | typing.List[Apigatewayv2IntegrationResponseParametersResponseParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.responseParameters">response_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a>]</code> | list of response parameters. |

---

##### `response_parameters`<sup>Optional</sup> <a name="response_parameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.responseParameters"></a>

```python
response_parameters: IResolvable | typing.List[Apigatewayv2IntegrationResponseParametersResponseParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a>]

list of response parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#response_parameters Apigatewayv2Integration#response_parameters}

---

### Apigatewayv2IntegrationResponseParametersResponseParameters <a name="Apigatewayv2IntegrationResponseParametersResponseParameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters(
  destination: str = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#destination Apigatewayv2Integration#destination}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#source Apigatewayv2Integration#source}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#destination Apigatewayv2Integration#destination}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#source Apigatewayv2Integration#source}.

---

### Apigatewayv2IntegrationTlsConfig <a name="Apigatewayv2IntegrationTlsConfig" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig(
  server_name_to_verify: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.property.serverNameToVerify">server_name_to_verify</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#server_name_to_verify Apigatewayv2Integration#server_name_to_verify}. |

---

##### `server_name_to_verify`<sup>Optional</sup> <a name="server_name_to_verify" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.property.serverNameToVerify"></a>

```python
server_name_to_verify: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_integration#server_name_to_verify Apigatewayv2Integration#server_name_to_verify}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2IntegrationResponseParametersMap <a name="Apigatewayv2IntegrationResponseParametersMap" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.get"></a>

```python
def get(
  key: str
) -> Apigatewayv2IntegrationResponseParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[Apigatewayv2IntegrationResponseParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]

---


### Apigatewayv2IntegrationResponseParametersOutputReference <a name="Apigatewayv2IntegrationResponseParametersOutputReference" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.putResponseParameters">put_response_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resetResponseParameters">reset_response_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_response_parameters` <a name="put_response_parameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.putResponseParameters"></a>

```python
def put_response_parameters(
  value: IResolvable | typing.List[Apigatewayv2IntegrationResponseParametersResponseParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.putResponseParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a>]

---

##### `reset_response_parameters` <a name="reset_response_parameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resetResponseParameters"></a>

```python
def reset_response_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.responseParameters">response_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList">Apigatewayv2IntegrationResponseParametersResponseParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.responseParametersInput">response_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `response_parameters`<sup>Required</sup> <a name="response_parameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.responseParameters"></a>

```python
response_parameters: Apigatewayv2IntegrationResponseParametersResponseParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList">Apigatewayv2IntegrationResponseParametersResponseParametersList</a>

---

##### `response_parameters_input`<sup>Optional</sup> <a name="response_parameters_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.responseParametersInput"></a>

```python
response_parameters_input: IResolvable | typing.List[Apigatewayv2IntegrationResponseParametersResponseParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2IntegrationResponseParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>

---


### Apigatewayv2IntegrationResponseParametersResponseParametersList <a name="Apigatewayv2IntegrationResponseParametersResponseParametersList" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Apigatewayv2IntegrationResponseParametersResponseParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a>]

---


### Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference <a name="Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2IntegrationResponseParametersResponseParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a>

---


### Apigatewayv2IntegrationTlsConfigOutputReference <a name="Apigatewayv2IntegrationTlsConfigOutputReference" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resetServerNameToVerify">reset_server_name_to_verify</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_server_name_to_verify` <a name="reset_server_name_to_verify" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resetServerNameToVerify"></a>

```python
def reset_server_name_to_verify() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerifyInput">server_name_to_verify_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerify">server_name_to_verify</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `server_name_to_verify_input`<sup>Optional</sup> <a name="server_name_to_verify_input" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerifyInput"></a>

```python
server_name_to_verify_input: str
```

- *Type:* str

---

##### `server_name_to_verify`<sup>Required</sup> <a name="server_name_to_verify" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerify"></a>

```python
server_name_to_verify: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2IntegrationTlsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

---



