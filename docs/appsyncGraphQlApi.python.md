# `appsyncGraphQlApi` Submodule <a name="`appsyncGraphQlApi` Submodule" id="@cdktn/provider-awscc.appsyncGraphQlApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncGraphQlApi <a name="AppsyncGraphQlApi" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api awscc_appsync_graph_ql_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApi(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication_type: str,
  name: str,
  additional_authentication_providers: IResolvable | typing.List[AppsyncGraphQlApiAdditionalAuthenticationProviders] = None,
  api_type: str = None,
  enhanced_metrics_config: AppsyncGraphQlApiEnhancedMetricsConfig = None,
  environment_variables: typing.Mapping[str] = None,
  introspection_config: str = None,
  lambda_authorizer_config: AppsyncGraphQlApiLambdaAuthorizerConfig = None,
  log_config: AppsyncGraphQlApiLogConfig = None,
  merged_api_execution_role_arn: str = None,
  open_id_connect_config: AppsyncGraphQlApiOpenIdConnectConfig = None,
  owner_contact: str = None,
  query_depth_limit: typing.Union[int, float] = None,
  resolver_count_limit: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[AppsyncGraphQlApiTags] = None,
  user_pool_config: AppsyncGraphQlApiUserPoolConfig = None,
  visibility: str = None,
  xray_enabled: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.authenticationType">authentication_type</a></code> | <code>str</code> | Security configuration for your GraphQL API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.name">name</a></code> | <code>str</code> | The API name. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.additionalAuthenticationProviders">additional_authentication_providers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>]</code> | A list of additional authentication providers for the GraphqlApi API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.apiType">api_type</a></code> | <code>str</code> | The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED). |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.enhancedMetricsConfig">enhanced_metrics_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a></code> | Enables and controls the enhanced metrics feature. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | A map containing the list of resources with their properties and environment variables. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.introspectionConfig">introspection_config</a></code> | <code>str</code> | Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.lambdaAuthorizerConfig">lambda_authorizer_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a></code> | A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a></code> | The Amazon CloudWatch Logs configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.mergedApiExecutionRoleArn">merged_api_execution_role_arn</a></code> | <code>str</code> | The AWS Identity and Access Management service role ARN for a merged API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.openIdConnectConfig">open_id_connect_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a></code> | The OpenID Connect configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.ownerContact">owner_contact</a></code> | <code>str</code> | The owner contact information for an API resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.queryDepthLimit">query_depth_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum depth a query can have in a single request. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.resolverCountLimit">resolver_count_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum number of resolvers that can be invoked in a single request. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this GraphQL API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.userPoolConfig">user_pool_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a></code> | Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | Sets the scope of the GraphQL API to public (GLOBAL) or private (PRIVATE). |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.xrayEnabled">xray_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag indicating whether to use AWS X-Ray tracing for this GraphqlApi. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.authenticationType"></a>

- *Type:* str

Security configuration for your GraphQL API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authentication_type AppsyncGraphQlApi#authentication_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.name"></a>

- *Type:* str

The API name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#name AppsyncGraphQlApi#name}

---

##### `additional_authentication_providers`<sup>Optional</sup> <a name="additional_authentication_providers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.additionalAuthenticationProviders"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>]

A list of additional authentication providers for the GraphqlApi API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#additional_authentication_providers AppsyncGraphQlApi#additional_authentication_providers}

---

##### `api_type`<sup>Optional</sup> <a name="api_type" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.apiType"></a>

- *Type:* str

The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#api_type AppsyncGraphQlApi#api_type}

---

##### `enhanced_metrics_config`<sup>Optional</sup> <a name="enhanced_metrics_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.enhancedMetricsConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

Enables and controls the enhanced metrics feature.

Enhanced metrics emit granular data on API usage and performance such as AppSync request and error counts, latency, and cache hits/misses. All enhanced metric data is sent to your CloudWatch account, and you can configure the types of data that will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#enhanced_metrics_config AppsyncGraphQlApi#enhanced_metrics_config}

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

A map containing the list of resources with their properties and environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#environment_variables AppsyncGraphQlApi#environment_variables}

---

##### `introspection_config`<sup>Optional</sup> <a name="introspection_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.introspectionConfig"></a>

- *Type:* str

Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection.

If no value is provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#introspection_config AppsyncGraphQlApi#introspection_config}

---

##### `lambda_authorizer_config`<sup>Optional</sup> <a name="lambda_authorizer_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.lambdaAuthorizerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode.

Be aware that an AWS AppSync API may have only one Lambda authorizer configured at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#lambda_authorizer_config AppsyncGraphQlApi#lambda_authorizer_config}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

The Amazon CloudWatch Logs configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#log_config AppsyncGraphQlApi#log_config}

---

##### `merged_api_execution_role_arn`<sup>Optional</sup> <a name="merged_api_execution_role_arn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.mergedApiExecutionRoleArn"></a>

- *Type:* str

The AWS Identity and Access Management service role ARN for a merged API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#merged_api_execution_role_arn AppsyncGraphQlApi#merged_api_execution_role_arn}

---

##### `open_id_connect_config`<sup>Optional</sup> <a name="open_id_connect_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.openIdConnectConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

The OpenID Connect configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#open_id_connect_config AppsyncGraphQlApi#open_id_connect_config}

---

##### `owner_contact`<sup>Optional</sup> <a name="owner_contact" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.ownerContact"></a>

- *Type:* str

The owner contact information for an API resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#owner_contact AppsyncGraphQlApi#owner_contact}

---

##### `query_depth_limit`<sup>Optional</sup> <a name="query_depth_limit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.queryDepthLimit"></a>

- *Type:* typing.Union[int, float]

The maximum depth a query can have in a single request.

Depth refers to the amount of nested levels allowed in the body of query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#query_depth_limit AppsyncGraphQlApi#query_depth_limit}

---

##### `resolver_count_limit`<sup>Optional</sup> <a name="resolver_count_limit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.resolverCountLimit"></a>

- *Type:* typing.Union[int, float]

The maximum number of resolvers that can be invoked in a single request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#resolver_count_limit AppsyncGraphQlApi#resolver_count_limit}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>]

An arbitrary set of tags (key-value pairs) for this GraphQL API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#tags AppsyncGraphQlApi#tags}

---

##### `user_pool_config`<sup>Optional</sup> <a name="user_pool_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.userPoolConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_config AppsyncGraphQlApi#user_pool_config}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.visibility"></a>

- *Type:* str

Sets the scope of the GraphQL API to public (GLOBAL) or private (PRIVATE).

By default, the scope is set to Global if no value is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#visibility AppsyncGraphQlApi#visibility}

---

##### `xray_enabled`<sup>Optional</sup> <a name="xray_enabled" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.xrayEnabled"></a>

- *Type:* bool | cdktn.IResolvable

A flag indicating whether to use AWS X-Ray tracing for this GraphqlApi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#xray_enabled AppsyncGraphQlApi#xray_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putAdditionalAuthenticationProviders">put_additional_authentication_providers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putEnhancedMetricsConfig">put_enhanced_metrics_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLambdaAuthorizerConfig">put_lambda_authorizer_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLogConfig">put_log_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig">put_open_id_connect_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig">put_user_pool_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetAdditionalAuthenticationProviders">reset_additional_authentication_providers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetApiType">reset_api_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnhancedMetricsConfig">reset_enhanced_metrics_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetIntrospectionConfig">reset_introspection_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLambdaAuthorizerConfig">reset_lambda_authorizer_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLogConfig">reset_log_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetMergedApiExecutionRoleArn">reset_merged_api_execution_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOpenIdConnectConfig">reset_open_id_connect_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOwnerContact">reset_owner_contact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetQueryDepthLimit">reset_query_depth_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetResolverCountLimit">reset_resolver_count_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetUserPoolConfig">reset_user_pool_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetVisibility">reset_visibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetXrayEnabled">reset_xray_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_additional_authentication_providers` <a name="put_additional_authentication_providers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putAdditionalAuthenticationProviders"></a>

```python
def put_additional_authentication_providers(
  value: IResolvable | typing.List[AppsyncGraphQlApiAdditionalAuthenticationProviders]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putAdditionalAuthenticationProviders.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>]

---

##### `put_enhanced_metrics_config` <a name="put_enhanced_metrics_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putEnhancedMetricsConfig"></a>

```python
def put_enhanced_metrics_config(
  data_source_level_metrics_behavior: str = None,
  operation_level_metrics_config: str = None,
  resolver_level_metrics_behavior: str = None
) -> None
```

###### `data_source_level_metrics_behavior`<sup>Optional</sup> <a name="data_source_level_metrics_behavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putEnhancedMetricsConfig.parameter.dataSourceLevelMetricsBehavior"></a>

- *Type:* str

Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#data_source_level_metrics_behavior AppsyncGraphQlApi#data_source_level_metrics_behavior}

---

###### `operation_level_metrics_config`<sup>Optional</sup> <a name="operation_level_metrics_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putEnhancedMetricsConfig.parameter.operationLevelMetricsConfig"></a>

- *Type:* str

Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#operation_level_metrics_config AppsyncGraphQlApi#operation_level_metrics_config}

---

###### `resolver_level_metrics_behavior`<sup>Optional</sup> <a name="resolver_level_metrics_behavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putEnhancedMetricsConfig.parameter.resolverLevelMetricsBehavior"></a>

- *Type:* str

Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#resolver_level_metrics_behavior AppsyncGraphQlApi#resolver_level_metrics_behavior}

---

##### `put_lambda_authorizer_config` <a name="put_lambda_authorizer_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLambdaAuthorizerConfig"></a>

```python
def put_lambda_authorizer_config(
  authorizer_result_ttl_in_seconds: typing.Union[int, float] = None,
  authorizer_uri: str = None,
  identity_validation_expression: str = None
) -> None
```

###### `authorizer_result_ttl_in_seconds`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLambdaAuthorizerConfig.parameter.authorizerResultTtlInSeconds"></a>

- *Type:* typing.Union[int, float]

The number of seconds a response should be cached for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authorizer_result_ttl_in_seconds AppsyncGraphQlApi#authorizer_result_ttl_in_seconds}

---

###### `authorizer_uri`<sup>Optional</sup> <a name="authorizer_uri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLambdaAuthorizerConfig.parameter.authorizerUri"></a>

- *Type:* str

The ARN of the Lambda function to be called for authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authorizer_uri AppsyncGraphQlApi#authorizer_uri}

---

###### `identity_validation_expression`<sup>Optional</sup> <a name="identity_validation_expression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLambdaAuthorizerConfig.parameter.identityValidationExpression"></a>

- *Type:* str

A regular expression for validation of tokens before the Lambda function is called.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#identity_validation_expression AppsyncGraphQlApi#identity_validation_expression}

---

##### `put_log_config` <a name="put_log_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLogConfig"></a>

```python
def put_log_config(
  cloudwatch_logs_role_arn: str = None,
  exclude_verbose_content: bool | IResolvable = None,
  field_log_level: str = None
) -> None
```

###### `cloudwatch_logs_role_arn`<sup>Optional</sup> <a name="cloudwatch_logs_role_arn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLogConfig.parameter.cloudwatchLogsRoleArn"></a>

- *Type:* str

The service role that AWS AppSync will assume to publish to Amazon CloudWatch Logs in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#cloudwatch_logs_role_arn AppsyncGraphQlApi#cloudwatch_logs_role_arn}

---

###### `exclude_verbose_content`<sup>Optional</sup> <a name="exclude_verbose_content" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLogConfig.parameter.excludeVerboseContent"></a>

- *Type:* bool | cdktn.IResolvable

Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#exclude_verbose_content AppsyncGraphQlApi#exclude_verbose_content}

---

###### `field_log_level`<sup>Optional</sup> <a name="field_log_level" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLogConfig.parameter.fieldLogLevel"></a>

- *Type:* str

The field logging level. Values can be NONE, ERROR, INFO, DEBUG, or ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#field_log_level AppsyncGraphQlApi#field_log_level}

---

##### `put_open_id_connect_config` <a name="put_open_id_connect_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig"></a>

```python
def put_open_id_connect_config(
  auth_ttl: typing.Union[int, float] = None,
  client_id: str = None,
  iat_ttl: typing.Union[int, float] = None,
  issuer: str = None
) -> None
```

###### `auth_ttl`<sup>Optional</sup> <a name="auth_ttl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig.parameter.authTtl"></a>

- *Type:* typing.Union[int, float]

The number of milliseconds that a token is valid after being authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#auth_ttl AppsyncGraphQlApi#auth_ttl}

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig.parameter.clientId"></a>

- *Type:* str

The client identifier of the Relying party at the OpenID identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#client_id AppsyncGraphQlApi#client_id}

---

###### `iat_ttl`<sup>Optional</sup> <a name="iat_ttl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig.parameter.iatTtl"></a>

- *Type:* typing.Union[int, float]

The number of milliseconds that a token is valid after it's issued to a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#iat_ttl AppsyncGraphQlApi#iat_ttl}

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig.parameter.issuer"></a>

- *Type:* str

The issuer for the OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#issuer AppsyncGraphQlApi#issuer}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AppsyncGraphQlApiTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>]

---

##### `put_user_pool_config` <a name="put_user_pool_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig"></a>

```python
def put_user_pool_config(
  app_id_client_regex: str = None,
  aws_region: str = None,
  default_action: str = None,
  user_pool_id: str = None
) -> None
```

###### `app_id_client_regex`<sup>Optional</sup> <a name="app_id_client_regex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig.parameter.appIdClientRegex"></a>

- *Type:* str

A regular expression for validating the incoming Amazon Cognito user pool app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#app_id_client_regex AppsyncGraphQlApi#app_id_client_regex}

---

###### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig.parameter.awsRegion"></a>

- *Type:* str

The AWS Region in which the user pool was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#aws_region AppsyncGraphQlApi#aws_region}

---

###### `default_action`<sup>Optional</sup> <a name="default_action" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig.parameter.defaultAction"></a>

- *Type:* str

The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#default_action AppsyncGraphQlApi#default_action}

---

###### `user_pool_id`<sup>Optional</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig.parameter.userPoolId"></a>

- *Type:* str

The user pool ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_id AppsyncGraphQlApi#user_pool_id}

---

##### `reset_additional_authentication_providers` <a name="reset_additional_authentication_providers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetAdditionalAuthenticationProviders"></a>

```python
def reset_additional_authentication_providers() -> None
```

##### `reset_api_type` <a name="reset_api_type" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetApiType"></a>

```python
def reset_api_type() -> None
```

##### `reset_enhanced_metrics_config` <a name="reset_enhanced_metrics_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnhancedMetricsConfig"></a>

```python
def reset_enhanced_metrics_config() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_introspection_config` <a name="reset_introspection_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetIntrospectionConfig"></a>

```python
def reset_introspection_config() -> None
```

##### `reset_lambda_authorizer_config` <a name="reset_lambda_authorizer_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLambdaAuthorizerConfig"></a>

```python
def reset_lambda_authorizer_config() -> None
```

##### `reset_log_config` <a name="reset_log_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLogConfig"></a>

```python
def reset_log_config() -> None
```

##### `reset_merged_api_execution_role_arn` <a name="reset_merged_api_execution_role_arn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetMergedApiExecutionRoleArn"></a>

```python
def reset_merged_api_execution_role_arn() -> None
```

##### `reset_open_id_connect_config` <a name="reset_open_id_connect_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOpenIdConnectConfig"></a>

```python
def reset_open_id_connect_config() -> None
```

##### `reset_owner_contact` <a name="reset_owner_contact" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOwnerContact"></a>

```python
def reset_owner_contact() -> None
```

##### `reset_query_depth_limit` <a name="reset_query_depth_limit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetQueryDepthLimit"></a>

```python
def reset_query_depth_limit() -> None
```

##### `reset_resolver_count_limit` <a name="reset_resolver_count_limit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetResolverCountLimit"></a>

```python
def reset_resolver_count_limit() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_user_pool_config` <a name="reset_user_pool_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetUserPoolConfig"></a>

```python
def reset_user_pool_config() -> None
```

##### `reset_visibility` <a name="reset_visibility" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetVisibility"></a>

```python
def reset_visibility() -> None
```

##### `reset_xray_enabled` <a name="reset_xray_enabled" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetXrayEnabled"></a>

```python
def reset_xray_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppsyncGraphQlApi resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isConstruct"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApi.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApi.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApi.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApi.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppsyncGraphQlApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppsyncGraphQlApi to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppsyncGraphQlApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncGraphQlApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProviders">additional_authentication_providers</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList">AppsyncGraphQlApiAdditionalAuthenticationProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfig">enhanced_metrics_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference">AppsyncGraphQlApiEnhancedMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlDns">graph_ql_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlEndpointArn">graph_ql_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlUrl">graph_ql_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfig">lambda_authorizer_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference">AppsyncGraphQlApiLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfig">open_id_connect_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference">AppsyncGraphQlApiOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeDns">realtime_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeUrl">realtime_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList">AppsyncGraphQlApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfig">user_pool_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference">AppsyncGraphQlApiUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProvidersInput">additional_authentication_providers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiTypeInput">api_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfigInput">enhanced_metrics_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfigInput">introspection_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfigInput">lambda_authorizer_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfigInput">log_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArnInput">merged_api_execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfigInput">open_id_connect_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContactInput">owner_contact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimitInput">query_depth_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimitInput">resolver_count_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfigInput">user_pool_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabledInput">xray_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiType">api_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfig">introspection_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArn">merged_api_execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContact">owner_contact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimit">query_depth_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimit">resolver_count_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabled">xray_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_authentication_providers`<sup>Required</sup> <a name="additional_authentication_providers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProviders"></a>

```python
additional_authentication_providers: AppsyncGraphQlApiAdditionalAuthenticationProvidersList
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList">AppsyncGraphQlApiAdditionalAuthenticationProvidersList</a>

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `enhanced_metrics_config`<sup>Required</sup> <a name="enhanced_metrics_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfig"></a>

```python
enhanced_metrics_config: AppsyncGraphQlApiEnhancedMetricsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference">AppsyncGraphQlApiEnhancedMetricsConfigOutputReference</a>

---

##### `graph_ql_dns`<sup>Required</sup> <a name="graph_ql_dns" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlDns"></a>

```python
graph_ql_dns: str
```

- *Type:* str

---

##### `graph_ql_endpoint_arn`<sup>Required</sup> <a name="graph_ql_endpoint_arn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlEndpointArn"></a>

```python
graph_ql_endpoint_arn: str
```

- *Type:* str

---

##### `graph_ql_url`<sup>Required</sup> <a name="graph_ql_url" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlUrl"></a>

```python
graph_ql_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lambda_authorizer_config`<sup>Required</sup> <a name="lambda_authorizer_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfig"></a>

```python
lambda_authorizer_config: AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference</a>

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfig"></a>

```python
log_config: AppsyncGraphQlApiLogConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference">AppsyncGraphQlApiLogConfigOutputReference</a>

---

##### `open_id_connect_config`<sup>Required</sup> <a name="open_id_connect_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfig"></a>

```python
open_id_connect_config: AppsyncGraphQlApiOpenIdConnectConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference">AppsyncGraphQlApiOpenIdConnectConfigOutputReference</a>

---

##### `realtime_dns`<sup>Required</sup> <a name="realtime_dns" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeDns"></a>

```python
realtime_dns: str
```

- *Type:* str

---

##### `realtime_url`<sup>Required</sup> <a name="realtime_url" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeUrl"></a>

```python
realtime_url: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tags"></a>

```python
tags: AppsyncGraphQlApiTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList">AppsyncGraphQlApiTagsList</a>

---

##### `user_pool_config`<sup>Required</sup> <a name="user_pool_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfig"></a>

```python
user_pool_config: AppsyncGraphQlApiUserPoolConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference">AppsyncGraphQlApiUserPoolConfigOutputReference</a>

---

##### `additional_authentication_providers_input`<sup>Optional</sup> <a name="additional_authentication_providers_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProvidersInput"></a>

```python
additional_authentication_providers_input: IResolvable | typing.List[AppsyncGraphQlApiAdditionalAuthenticationProviders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>]

---

##### `api_type_input`<sup>Optional</sup> <a name="api_type_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiTypeInput"></a>

```python
api_type_input: str
```

- *Type:* str

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `enhanced_metrics_config_input`<sup>Optional</sup> <a name="enhanced_metrics_config_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfigInput"></a>

```python
enhanced_metrics_config_input: IResolvable | AppsyncGraphQlApiEnhancedMetricsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `introspection_config_input`<sup>Optional</sup> <a name="introspection_config_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfigInput"></a>

```python
introspection_config_input: str
```

- *Type:* str

---

##### `lambda_authorizer_config_input`<sup>Optional</sup> <a name="lambda_authorizer_config_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfigInput"></a>

```python
lambda_authorizer_config_input: IResolvable | AppsyncGraphQlApiLambdaAuthorizerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

---

##### `log_config_input`<sup>Optional</sup> <a name="log_config_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfigInput"></a>

```python
log_config_input: IResolvable | AppsyncGraphQlApiLogConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

---

##### `merged_api_execution_role_arn_input`<sup>Optional</sup> <a name="merged_api_execution_role_arn_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArnInput"></a>

```python
merged_api_execution_role_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `open_id_connect_config_input`<sup>Optional</sup> <a name="open_id_connect_config_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfigInput"></a>

```python
open_id_connect_config_input: IResolvable | AppsyncGraphQlApiOpenIdConnectConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

---

##### `owner_contact_input`<sup>Optional</sup> <a name="owner_contact_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContactInput"></a>

```python
owner_contact_input: str
```

- *Type:* str

---

##### `query_depth_limit_input`<sup>Optional</sup> <a name="query_depth_limit_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimitInput"></a>

```python
query_depth_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resolver_count_limit_input`<sup>Optional</sup> <a name="resolver_count_limit_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimitInput"></a>

```python
resolver_count_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AppsyncGraphQlApiTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>]

---

##### `user_pool_config_input`<sup>Optional</sup> <a name="user_pool_config_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfigInput"></a>

```python
user_pool_config_input: IResolvable | AppsyncGraphQlApiUserPoolConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `xray_enabled_input`<sup>Optional</sup> <a name="xray_enabled_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabledInput"></a>

```python
xray_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `api_type`<sup>Required</sup> <a name="api_type" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiType"></a>

```python
api_type: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `introspection_config`<sup>Required</sup> <a name="introspection_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfig"></a>

```python
introspection_config: str
```

- *Type:* str

---

##### `merged_api_execution_role_arn`<sup>Required</sup> <a name="merged_api_execution_role_arn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArn"></a>

```python
merged_api_execution_role_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner_contact`<sup>Required</sup> <a name="owner_contact" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContact"></a>

```python
owner_contact: str
```

- *Type:* str

---

##### `query_depth_limit`<sup>Required</sup> <a name="query_depth_limit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimit"></a>

```python
query_depth_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resolver_count_limit`<sup>Required</sup> <a name="resolver_count_limit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimit"></a>

```python
resolver_count_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `xray_enabled`<sup>Required</sup> <a name="xray_enabled" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabled"></a>

```python
xray_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncGraphQlApiAdditionalAuthenticationProviders <a name="AppsyncGraphQlApiAdditionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders(
  authentication_type: str = None,
  lambda_authorizer_config: AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig = None,
  open_id_connect_config: AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig = None,
  user_pool_config: AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.authenticationType">authentication_type</a></code> | <code>str</code> | The authentication type for API key, AWS Identity and Access Management, OIDC, Amazon Cognito user pools, or AWS Lambda. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.lambdaAuthorizerConfig">lambda_authorizer_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#lambda_authorizer_config AppsyncGraphQlApi#lambda_authorizer_config}. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.openIdConnectConfig">open_id_connect_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#open_id_connect_config AppsyncGraphQlApi#open_id_connect_config}. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.userPoolConfig">user_pool_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_config AppsyncGraphQlApi#user_pool_config}. |

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

The authentication type for API key, AWS Identity and Access Management, OIDC, Amazon Cognito user pools, or AWS Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authentication_type AppsyncGraphQlApi#authentication_type}

---

##### `lambda_authorizer_config`<sup>Optional</sup> <a name="lambda_authorizer_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.lambdaAuthorizerConfig"></a>

```python
lambda_authorizer_config: AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#lambda_authorizer_config AppsyncGraphQlApi#lambda_authorizer_config}.

---

##### `open_id_connect_config`<sup>Optional</sup> <a name="open_id_connect_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.openIdConnectConfig"></a>

```python
open_id_connect_config: AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#open_id_connect_config AppsyncGraphQlApi#open_id_connect_config}.

---

##### `user_pool_config`<sup>Optional</sup> <a name="user_pool_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.userPoolConfig"></a>

```python
user_pool_config: AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_config AppsyncGraphQlApi#user_pool_config}.

---

### AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig(
  authorizer_result_ttl_in_seconds: typing.Union[int, float] = None,
  authorizer_uri: str = None,
  identity_validation_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The number of seconds a response should be cached for. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | The ARN of the Lambda function to be called for authorization. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | A regular expression for validation of tokens before the Lambda function is called. |

---

##### `authorizer_result_ttl_in_seconds`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds a response should be cached for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authorizer_result_ttl_in_seconds AppsyncGraphQlApi#authorizer_result_ttl_in_seconds}

---

##### `authorizer_uri`<sup>Optional</sup> <a name="authorizer_uri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

The ARN of the Lambda function to be called for authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authorizer_uri AppsyncGraphQlApi#authorizer_uri}

---

##### `identity_validation_expression`<sup>Optional</sup> <a name="identity_validation_expression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

A regular expression for validation of tokens before the Lambda function is called.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#identity_validation_expression AppsyncGraphQlApi#identity_validation_expression}

---

### AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig(
  auth_ttl: typing.Union[int, float] = None,
  client_id: str = None,
  iat_ttl: typing.Union[int, float] = None,
  issuer: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.authTtl">auth_ttl</a></code> | <code>typing.Union[int, float]</code> | The number of milliseconds that a token is valid after being authenticated. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.clientId">client_id</a></code> | <code>str</code> | The client identifier of the Relying party at the OpenID identity provider. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.iatTtl">iat_ttl</a></code> | <code>typing.Union[int, float]</code> | The number of milliseconds that a token is valid after it's issued to a user. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.issuer">issuer</a></code> | <code>str</code> | The issuer for the OIDC configuration. |

---

##### `auth_ttl`<sup>Optional</sup> <a name="auth_ttl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.authTtl"></a>

```python
auth_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of milliseconds that a token is valid after being authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#auth_ttl AppsyncGraphQlApi#auth_ttl}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client identifier of the Relying party at the OpenID identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#client_id AppsyncGraphQlApi#client_id}

---

##### `iat_ttl`<sup>Optional</sup> <a name="iat_ttl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.iatTtl"></a>

```python
iat_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of milliseconds that a token is valid after it's issued to a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#iat_ttl AppsyncGraphQlApi#iat_ttl}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

The issuer for the OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#issuer AppsyncGraphQlApi#issuer}

---

### AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig(
  app_id_client_regex: str = None,
  aws_region: str = None,
  user_pool_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.appIdClientRegex">app_id_client_regex</a></code> | <code>str</code> | A regular expression for validating the incoming Amazon Cognito user pool app client ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.awsRegion">aws_region</a></code> | <code>str</code> | The AWS Region in which the user pool was created. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.userPoolId">user_pool_id</a></code> | <code>str</code> | The user pool ID. |

---

##### `app_id_client_regex`<sup>Optional</sup> <a name="app_id_client_regex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.appIdClientRegex"></a>

```python
app_id_client_regex: str
```

- *Type:* str

A regular expression for validating the incoming Amazon Cognito user pool app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#app_id_client_regex AppsyncGraphQlApi#app_id_client_regex}

---

##### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

The AWS Region in which the user pool was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#aws_region AppsyncGraphQlApi#aws_region}

---

##### `user_pool_id`<sup>Optional</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

The user pool ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_id AppsyncGraphQlApi#user_pool_id}

---

### AppsyncGraphQlApiConfig <a name="AppsyncGraphQlApiConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication_type: str,
  name: str,
  additional_authentication_providers: IResolvable | typing.List[AppsyncGraphQlApiAdditionalAuthenticationProviders] = None,
  api_type: str = None,
  enhanced_metrics_config: AppsyncGraphQlApiEnhancedMetricsConfig = None,
  environment_variables: typing.Mapping[str] = None,
  introspection_config: str = None,
  lambda_authorizer_config: AppsyncGraphQlApiLambdaAuthorizerConfig = None,
  log_config: AppsyncGraphQlApiLogConfig = None,
  merged_api_execution_role_arn: str = None,
  open_id_connect_config: AppsyncGraphQlApiOpenIdConnectConfig = None,
  owner_contact: str = None,
  query_depth_limit: typing.Union[int, float] = None,
  resolver_count_limit: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[AppsyncGraphQlApiTags] = None,
  user_pool_config: AppsyncGraphQlApiUserPoolConfig = None,
  visibility: str = None,
  xray_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.authenticationType">authentication_type</a></code> | <code>str</code> | Security configuration for your GraphQL API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.name">name</a></code> | <code>str</code> | The API name. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.additionalAuthenticationProviders">additional_authentication_providers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>]</code> | A list of additional authentication providers for the GraphqlApi API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.apiType">api_type</a></code> | <code>str</code> | The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED). |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.enhancedMetricsConfig">enhanced_metrics_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a></code> | Enables and controls the enhanced metrics feature. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | A map containing the list of resources with their properties and environment variables. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.introspectionConfig">introspection_config</a></code> | <code>str</code> | Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lambdaAuthorizerConfig">lambda_authorizer_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a></code> | A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a></code> | The Amazon CloudWatch Logs configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.mergedApiExecutionRoleArn">merged_api_execution_role_arn</a></code> | <code>str</code> | The AWS Identity and Access Management service role ARN for a merged API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.openIdConnectConfig">open_id_connect_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a></code> | The OpenID Connect configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.ownerContact">owner_contact</a></code> | <code>str</code> | The owner contact information for an API resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.queryDepthLimit">query_depth_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum depth a query can have in a single request. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.resolverCountLimit">resolver_count_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum number of resolvers that can be invoked in a single request. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this GraphQL API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.userPoolConfig">user_pool_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a></code> | Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.visibility">visibility</a></code> | <code>str</code> | Sets the scope of the GraphQL API to public (GLOBAL) or private (PRIVATE). |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.xrayEnabled">xray_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag indicating whether to use AWS X-Ray tracing for this GraphqlApi. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Security configuration for your GraphQL API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authentication_type AppsyncGraphQlApi#authentication_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The API name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#name AppsyncGraphQlApi#name}

---

##### `additional_authentication_providers`<sup>Optional</sup> <a name="additional_authentication_providers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.additionalAuthenticationProviders"></a>

```python
additional_authentication_providers: IResolvable | typing.List[AppsyncGraphQlApiAdditionalAuthenticationProviders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>]

A list of additional authentication providers for the GraphqlApi API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#additional_authentication_providers AppsyncGraphQlApi#additional_authentication_providers}

---

##### `api_type`<sup>Optional</sup> <a name="api_type" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.apiType"></a>

```python
api_type: str
```

- *Type:* str

The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#api_type AppsyncGraphQlApi#api_type}

---

##### `enhanced_metrics_config`<sup>Optional</sup> <a name="enhanced_metrics_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.enhancedMetricsConfig"></a>

```python
enhanced_metrics_config: AppsyncGraphQlApiEnhancedMetricsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

Enables and controls the enhanced metrics feature.

Enhanced metrics emit granular data on API usage and performance such as AppSync request and error counts, latency, and cache hits/misses. All enhanced metric data is sent to your CloudWatch account, and you can configure the types of data that will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#enhanced_metrics_config AppsyncGraphQlApi#enhanced_metrics_config}

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map containing the list of resources with their properties and environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#environment_variables AppsyncGraphQlApi#environment_variables}

---

##### `introspection_config`<sup>Optional</sup> <a name="introspection_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.introspectionConfig"></a>

```python
introspection_config: str
```

- *Type:* str

Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection.

If no value is provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#introspection_config AppsyncGraphQlApi#introspection_config}

---

##### `lambda_authorizer_config`<sup>Optional</sup> <a name="lambda_authorizer_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lambdaAuthorizerConfig"></a>

```python
lambda_authorizer_config: AppsyncGraphQlApiLambdaAuthorizerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode.

Be aware that an AWS AppSync API may have only one Lambda authorizer configured at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#lambda_authorizer_config AppsyncGraphQlApi#lambda_authorizer_config}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.logConfig"></a>

```python
log_config: AppsyncGraphQlApiLogConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

The Amazon CloudWatch Logs configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#log_config AppsyncGraphQlApi#log_config}

---

##### `merged_api_execution_role_arn`<sup>Optional</sup> <a name="merged_api_execution_role_arn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.mergedApiExecutionRoleArn"></a>

```python
merged_api_execution_role_arn: str
```

- *Type:* str

The AWS Identity and Access Management service role ARN for a merged API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#merged_api_execution_role_arn AppsyncGraphQlApi#merged_api_execution_role_arn}

---

##### `open_id_connect_config`<sup>Optional</sup> <a name="open_id_connect_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.openIdConnectConfig"></a>

```python
open_id_connect_config: AppsyncGraphQlApiOpenIdConnectConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

The OpenID Connect configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#open_id_connect_config AppsyncGraphQlApi#open_id_connect_config}

---

##### `owner_contact`<sup>Optional</sup> <a name="owner_contact" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.ownerContact"></a>

```python
owner_contact: str
```

- *Type:* str

The owner contact information for an API resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#owner_contact AppsyncGraphQlApi#owner_contact}

---

##### `query_depth_limit`<sup>Optional</sup> <a name="query_depth_limit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.queryDepthLimit"></a>

```python
query_depth_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum depth a query can have in a single request.

Depth refers to the amount of nested levels allowed in the body of query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#query_depth_limit AppsyncGraphQlApi#query_depth_limit}

---

##### `resolver_count_limit`<sup>Optional</sup> <a name="resolver_count_limit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.resolverCountLimit"></a>

```python
resolver_count_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of resolvers that can be invoked in a single request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#resolver_count_limit AppsyncGraphQlApi#resolver_count_limit}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AppsyncGraphQlApiTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>]

An arbitrary set of tags (key-value pairs) for this GraphQL API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#tags AppsyncGraphQlApi#tags}

---

##### `user_pool_config`<sup>Optional</sup> <a name="user_pool_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.userPoolConfig"></a>

```python
user_pool_config: AppsyncGraphQlApiUserPoolConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_config AppsyncGraphQlApi#user_pool_config}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

Sets the scope of the GraphQL API to public (GLOBAL) or private (PRIVATE).

By default, the scope is set to Global if no value is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#visibility AppsyncGraphQlApi#visibility}

---

##### `xray_enabled`<sup>Optional</sup> <a name="xray_enabled" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.xrayEnabled"></a>

```python
xray_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A flag indicating whether to use AWS X-Ray tracing for this GraphqlApi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#xray_enabled AppsyncGraphQlApi#xray_enabled}

---

### AppsyncGraphQlApiEnhancedMetricsConfig <a name="AppsyncGraphQlApiEnhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig(
  data_source_level_metrics_behavior: str = None,
  operation_level_metrics_config: str = None,
  resolver_level_metrics_behavior: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.dataSourceLevelMetricsBehavior">data_source_level_metrics_behavior</a></code> | <code>str</code> | Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.operationLevelMetricsConfig">operation_level_metrics_config</a></code> | <code>str</code> | Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.resolverLevelMetricsBehavior">resolver_level_metrics_behavior</a></code> | <code>str</code> | Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include:. |

---

##### `data_source_level_metrics_behavior`<sup>Optional</sup> <a name="data_source_level_metrics_behavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.dataSourceLevelMetricsBehavior"></a>

```python
data_source_level_metrics_behavior: str
```

- *Type:* str

Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#data_source_level_metrics_behavior AppsyncGraphQlApi#data_source_level_metrics_behavior}

---

##### `operation_level_metrics_config`<sup>Optional</sup> <a name="operation_level_metrics_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.operationLevelMetricsConfig"></a>

```python
operation_level_metrics_config: str
```

- *Type:* str

Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#operation_level_metrics_config AppsyncGraphQlApi#operation_level_metrics_config}

---

##### `resolver_level_metrics_behavior`<sup>Optional</sup> <a name="resolver_level_metrics_behavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.resolverLevelMetricsBehavior"></a>

```python
resolver_level_metrics_behavior: str
```

- *Type:* str

Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#resolver_level_metrics_behavior AppsyncGraphQlApi#resolver_level_metrics_behavior}

---

### AppsyncGraphQlApiLambdaAuthorizerConfig <a name="AppsyncGraphQlApiLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig(
  authorizer_result_ttl_in_seconds: typing.Union[int, float] = None,
  authorizer_uri: str = None,
  identity_validation_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The number of seconds a response should be cached for. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | The ARN of the Lambda function to be called for authorization. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | A regular expression for validation of tokens before the Lambda function is called. |

---

##### `authorizer_result_ttl_in_seconds`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds a response should be cached for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authorizer_result_ttl_in_seconds AppsyncGraphQlApi#authorizer_result_ttl_in_seconds}

---

##### `authorizer_uri`<sup>Optional</sup> <a name="authorizer_uri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

The ARN of the Lambda function to be called for authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authorizer_uri AppsyncGraphQlApi#authorizer_uri}

---

##### `identity_validation_expression`<sup>Optional</sup> <a name="identity_validation_expression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

A regular expression for validation of tokens before the Lambda function is called.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#identity_validation_expression AppsyncGraphQlApi#identity_validation_expression}

---

### AppsyncGraphQlApiLogConfig <a name="AppsyncGraphQlApiLogConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiLogConfig(
  cloudwatch_logs_role_arn: str = None,
  exclude_verbose_content: bool | IResolvable = None,
  field_log_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.cloudwatchLogsRoleArn">cloudwatch_logs_role_arn</a></code> | <code>str</code> | The service role that AWS AppSync will assume to publish to Amazon CloudWatch Logs in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.excludeVerboseContent">exclude_verbose_content</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.fieldLogLevel">field_log_level</a></code> | <code>str</code> | The field logging level. Values can be NONE, ERROR, INFO, DEBUG, or ALL. |

---

##### `cloudwatch_logs_role_arn`<sup>Optional</sup> <a name="cloudwatch_logs_role_arn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.cloudwatchLogsRoleArn"></a>

```python
cloudwatch_logs_role_arn: str
```

- *Type:* str

The service role that AWS AppSync will assume to publish to Amazon CloudWatch Logs in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#cloudwatch_logs_role_arn AppsyncGraphQlApi#cloudwatch_logs_role_arn}

---

##### `exclude_verbose_content`<sup>Optional</sup> <a name="exclude_verbose_content" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.excludeVerboseContent"></a>

```python
exclude_verbose_content: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#exclude_verbose_content AppsyncGraphQlApi#exclude_verbose_content}

---

##### `field_log_level`<sup>Optional</sup> <a name="field_log_level" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.fieldLogLevel"></a>

```python
field_log_level: str
```

- *Type:* str

The field logging level. Values can be NONE, ERROR, INFO, DEBUG, or ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#field_log_level AppsyncGraphQlApi#field_log_level}

---

### AppsyncGraphQlApiOpenIdConnectConfig <a name="AppsyncGraphQlApiOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig(
  auth_ttl: typing.Union[int, float] = None,
  client_id: str = None,
  iat_ttl: typing.Union[int, float] = None,
  issuer: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.authTtl">auth_ttl</a></code> | <code>typing.Union[int, float]</code> | The number of milliseconds that a token is valid after being authenticated. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.clientId">client_id</a></code> | <code>str</code> | The client identifier of the Relying party at the OpenID identity provider. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.iatTtl">iat_ttl</a></code> | <code>typing.Union[int, float]</code> | The number of milliseconds that a token is valid after it's issued to a user. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.issuer">issuer</a></code> | <code>str</code> | The issuer for the OIDC configuration. |

---

##### `auth_ttl`<sup>Optional</sup> <a name="auth_ttl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.authTtl"></a>

```python
auth_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of milliseconds that a token is valid after being authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#auth_ttl AppsyncGraphQlApi#auth_ttl}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client identifier of the Relying party at the OpenID identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#client_id AppsyncGraphQlApi#client_id}

---

##### `iat_ttl`<sup>Optional</sup> <a name="iat_ttl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.iatTtl"></a>

```python
iat_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of milliseconds that a token is valid after it's issued to a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#iat_ttl AppsyncGraphQlApi#iat_ttl}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

The issuer for the OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#issuer AppsyncGraphQlApi#issuer}

---

### AppsyncGraphQlApiTags <a name="AppsyncGraphQlApiTags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#key AppsyncGraphQlApi#key}. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#value AppsyncGraphQlApi#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#key AppsyncGraphQlApi#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#value AppsyncGraphQlApi#value}.

---

### AppsyncGraphQlApiUserPoolConfig <a name="AppsyncGraphQlApiUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig(
  app_id_client_regex: str = None,
  aws_region: str = None,
  default_action: str = None,
  user_pool_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.appIdClientRegex">app_id_client_regex</a></code> | <code>str</code> | A regular expression for validating the incoming Amazon Cognito user pool app client ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.awsRegion">aws_region</a></code> | <code>str</code> | The AWS Region in which the user pool was created. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.defaultAction">default_action</a></code> | <code>str</code> | The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.userPoolId">user_pool_id</a></code> | <code>str</code> | The user pool ID. |

---

##### `app_id_client_regex`<sup>Optional</sup> <a name="app_id_client_regex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.appIdClientRegex"></a>

```python
app_id_client_regex: str
```

- *Type:* str

A regular expression for validating the incoming Amazon Cognito user pool app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#app_id_client_regex AppsyncGraphQlApi#app_id_client_regex}

---

##### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

The AWS Region in which the user pool was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#aws_region AppsyncGraphQlApi#aws_region}

---

##### `default_action`<sup>Optional</sup> <a name="default_action" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#default_action AppsyncGraphQlApi#default_action}

---

##### `user_pool_id`<sup>Optional</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

The user pool ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_id AppsyncGraphQlApi#user_pool_id}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">reset_authorizer_result_ttl_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri">reset_authorizer_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">reset_identity_validation_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorizer_result_ttl_in_seconds` <a name="reset_authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```python
def reset_authorizer_result_ttl_in_seconds() -> None
```

##### `reset_authorizer_uri` <a name="reset_authorizer_uri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri"></a>

```python
def reset_authorizer_uri() -> None
```

##### `reset_identity_validation_expression` <a name="reset_identity_validation_expression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```python
def reset_identity_validation_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">authorizer_result_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">authorizer_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">identity_validation_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds_input`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```python
authorizer_result_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_uri_input`<sup>Optional</sup> <a name="authorizer_uri_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```python
authorizer_uri_input: str
```

- *Type:* str

---

##### `identity_validation_expression_input`<sup>Optional</sup> <a name="identity_validation_expression_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```python
identity_validation_expression_input: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds`<sup>Required</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_uri`<sup>Required</sup> <a name="authorizer_uri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

---

##### `identity_validation_expression`<sup>Required</sup> <a name="identity_validation_expression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersList <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersList" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppsyncGraphQlApiAdditionalAuthenticationProviders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>]

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetAuthTtl">reset_auth_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIatTtl">reset_iat_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_ttl` <a name="reset_auth_ttl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetAuthTtl"></a>

```python
def reset_auth_ttl() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_iat_ttl` <a name="reset_iat_ttl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIatTtl"></a>

```python
def reset_iat_ttl() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtlInput">auth_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput">iat_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtl">auth_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtl">iat_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_ttl_input`<sup>Optional</sup> <a name="auth_ttl_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtlInput"></a>

```python
auth_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `iat_ttl_input`<sup>Optional</sup> <a name="iat_ttl_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput"></a>

```python
iat_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `auth_ttl`<sup>Required</sup> <a name="auth_ttl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtl"></a>

```python
auth_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `iat_ttl`<sup>Required</sup> <a name="iat_ttl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```python
iat_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putLambdaAuthorizerConfig">put_lambda_authorizer_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig">put_open_id_connect_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putUserPoolConfig">put_user_pool_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetAuthenticationType">reset_authentication_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetLambdaAuthorizerConfig">reset_lambda_authorizer_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetOpenIdConnectConfig">reset_open_id_connect_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetUserPoolConfig">reset_user_pool_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lambda_authorizer_config` <a name="put_lambda_authorizer_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putLambdaAuthorizerConfig"></a>

```python
def put_lambda_authorizer_config(
  authorizer_result_ttl_in_seconds: typing.Union[int, float] = None,
  authorizer_uri: str = None,
  identity_validation_expression: str = None
) -> None
```

###### `authorizer_result_ttl_in_seconds`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putLambdaAuthorizerConfig.parameter.authorizerResultTtlInSeconds"></a>

- *Type:* typing.Union[int, float]

The number of seconds a response should be cached for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authorizer_result_ttl_in_seconds AppsyncGraphQlApi#authorizer_result_ttl_in_seconds}

---

###### `authorizer_uri`<sup>Optional</sup> <a name="authorizer_uri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putLambdaAuthorizerConfig.parameter.authorizerUri"></a>

- *Type:* str

The ARN of the Lambda function to be called for authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authorizer_uri AppsyncGraphQlApi#authorizer_uri}

---

###### `identity_validation_expression`<sup>Optional</sup> <a name="identity_validation_expression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putLambdaAuthorizerConfig.parameter.identityValidationExpression"></a>

- *Type:* str

A regular expression for validation of tokens before the Lambda function is called.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#identity_validation_expression AppsyncGraphQlApi#identity_validation_expression}

---

##### `put_open_id_connect_config` <a name="put_open_id_connect_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig"></a>

```python
def put_open_id_connect_config(
  auth_ttl: typing.Union[int, float] = None,
  client_id: str = None,
  iat_ttl: typing.Union[int, float] = None,
  issuer: str = None
) -> None
```

###### `auth_ttl`<sup>Optional</sup> <a name="auth_ttl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig.parameter.authTtl"></a>

- *Type:* typing.Union[int, float]

The number of milliseconds that a token is valid after being authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#auth_ttl AppsyncGraphQlApi#auth_ttl}

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig.parameter.clientId"></a>

- *Type:* str

The client identifier of the Relying party at the OpenID identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#client_id AppsyncGraphQlApi#client_id}

---

###### `iat_ttl`<sup>Optional</sup> <a name="iat_ttl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig.parameter.iatTtl"></a>

- *Type:* typing.Union[int, float]

The number of milliseconds that a token is valid after it's issued to a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#iat_ttl AppsyncGraphQlApi#iat_ttl}

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig.parameter.issuer"></a>

- *Type:* str

The issuer for the OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#issuer AppsyncGraphQlApi#issuer}

---

##### `put_user_pool_config` <a name="put_user_pool_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putUserPoolConfig"></a>

```python
def put_user_pool_config(
  app_id_client_regex: str = None,
  aws_region: str = None,
  user_pool_id: str = None
) -> None
```

###### `app_id_client_regex`<sup>Optional</sup> <a name="app_id_client_regex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putUserPoolConfig.parameter.appIdClientRegex"></a>

- *Type:* str

A regular expression for validating the incoming Amazon Cognito user pool app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#app_id_client_regex AppsyncGraphQlApi#app_id_client_regex}

---

###### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putUserPoolConfig.parameter.awsRegion"></a>

- *Type:* str

The AWS Region in which the user pool was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#aws_region AppsyncGraphQlApi#aws_region}

---

###### `user_pool_id`<sup>Optional</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putUserPoolConfig.parameter.userPoolId"></a>

- *Type:* str

The user pool ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_id AppsyncGraphQlApi#user_pool_id}

---

##### `reset_authentication_type` <a name="reset_authentication_type" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetAuthenticationType"></a>

```python
def reset_authentication_type() -> None
```

##### `reset_lambda_authorizer_config` <a name="reset_lambda_authorizer_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetLambdaAuthorizerConfig"></a>

```python
def reset_lambda_authorizer_config() -> None
```

##### `reset_open_id_connect_config` <a name="reset_open_id_connect_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetOpenIdConnectConfig"></a>

```python
def reset_open_id_connect_config() -> None
```

##### `reset_user_pool_config` <a name="reset_user_pool_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetUserPoolConfig"></a>

```python
def reset_user_pool_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfig">lambda_authorizer_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfig">open_id_connect_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfig">user_pool_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfigInput">lambda_authorizer_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfigInput">open_id_connect_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfigInput">user_pool_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_authorizer_config`<sup>Required</sup> <a name="lambda_authorizer_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfig"></a>

```python
lambda_authorizer_config: AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference</a>

---

##### `open_id_connect_config`<sup>Required</sup> <a name="open_id_connect_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfig"></a>

```python
open_id_connect_config: AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference</a>

---

##### `user_pool_config`<sup>Required</sup> <a name="user_pool_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfig"></a>

```python
user_pool_config: AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference</a>

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `lambda_authorizer_config_input`<sup>Optional</sup> <a name="lambda_authorizer_config_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfigInput"></a>

```python
lambda_authorizer_config_input: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

---

##### `open_id_connect_config_input`<sup>Optional</sup> <a name="open_id_connect_config_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfigInput"></a>

```python
open_id_connect_config_input: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

---

##### `user_pool_config_input`<sup>Optional</sup> <a name="user_pool_config_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfigInput"></a>

```python
user_pool_config_input: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProviders
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAppIdClientRegex">reset_app_id_client_regex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAwsRegion">reset_aws_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetUserPoolId">reset_user_pool_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_id_client_regex` <a name="reset_app_id_client_regex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```python
def reset_app_id_client_regex() -> None
```

##### `reset_aws_region` <a name="reset_aws_region" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAwsRegion"></a>

```python
def reset_aws_region() -> None
```

##### `reset_user_pool_id` <a name="reset_user_pool_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetUserPoolId"></a>

```python
def reset_user_pool_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegexInput">app_id_client_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegex">app_id_client_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id_client_regex_input`<sup>Optional</sup> <a name="app_id_client_regex_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```python
app_id_client_regex_input: str
```

- *Type:* str

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `app_id_client_regex`<sup>Required</sup> <a name="app_id_client_regex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```python
app_id_client_regex: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

---


### AppsyncGraphQlApiEnhancedMetricsConfigOutputReference <a name="AppsyncGraphQlApiEnhancedMetricsConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetDataSourceLevelMetricsBehavior">reset_data_source_level_metrics_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetOperationLevelMetricsConfig">reset_operation_level_metrics_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetResolverLevelMetricsBehavior">reset_resolver_level_metrics_behavior</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_source_level_metrics_behavior` <a name="reset_data_source_level_metrics_behavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetDataSourceLevelMetricsBehavior"></a>

```python
def reset_data_source_level_metrics_behavior() -> None
```

##### `reset_operation_level_metrics_config` <a name="reset_operation_level_metrics_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetOperationLevelMetricsConfig"></a>

```python
def reset_operation_level_metrics_config() -> None
```

##### `reset_resolver_level_metrics_behavior` <a name="reset_resolver_level_metrics_behavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetResolverLevelMetricsBehavior"></a>

```python
def reset_resolver_level_metrics_behavior() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehaviorInput">data_source_level_metrics_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfigInput">operation_level_metrics_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehaviorInput">resolver_level_metrics_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehavior">data_source_level_metrics_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfig">operation_level_metrics_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehavior">resolver_level_metrics_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_source_level_metrics_behavior_input`<sup>Optional</sup> <a name="data_source_level_metrics_behavior_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehaviorInput"></a>

```python
data_source_level_metrics_behavior_input: str
```

- *Type:* str

---

##### `operation_level_metrics_config_input`<sup>Optional</sup> <a name="operation_level_metrics_config_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfigInput"></a>

```python
operation_level_metrics_config_input: str
```

- *Type:* str

---

##### `resolver_level_metrics_behavior_input`<sup>Optional</sup> <a name="resolver_level_metrics_behavior_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehaviorInput"></a>

```python
resolver_level_metrics_behavior_input: str
```

- *Type:* str

---

##### `data_source_level_metrics_behavior`<sup>Required</sup> <a name="data_source_level_metrics_behavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehavior"></a>

```python
data_source_level_metrics_behavior: str
```

- *Type:* str

---

##### `operation_level_metrics_config`<sup>Required</sup> <a name="operation_level_metrics_config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfig"></a>

```python
operation_level_metrics_config: str
```

- *Type:* str

---

##### `resolver_level_metrics_behavior`<sup>Required</sup> <a name="resolver_level_metrics_behavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehavior"></a>

```python
resolver_level_metrics_behavior: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncGraphQlApiEnhancedMetricsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

---


### AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">reset_authorizer_result_ttl_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerUri">reset_authorizer_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">reset_identity_validation_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorizer_result_ttl_in_seconds` <a name="reset_authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```python
def reset_authorizer_result_ttl_in_seconds() -> None
```

##### `reset_authorizer_uri` <a name="reset_authorizer_uri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerUri"></a>

```python
def reset_authorizer_uri() -> None
```

##### `reset_identity_validation_expression` <a name="reset_identity_validation_expression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```python
def reset_identity_validation_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">authorizer_result_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">authorizer_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">identity_validation_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds_input`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```python
authorizer_result_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_uri_input`<sup>Optional</sup> <a name="authorizer_uri_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```python
authorizer_uri_input: str
```

- *Type:* str

---

##### `identity_validation_expression_input`<sup>Optional</sup> <a name="identity_validation_expression_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```python
identity_validation_expression_input: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds`<sup>Required</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_uri`<sup>Required</sup> <a name="authorizer_uri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

---

##### `identity_validation_expression`<sup>Required</sup> <a name="identity_validation_expression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncGraphQlApiLambdaAuthorizerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

---


### AppsyncGraphQlApiLogConfigOutputReference <a name="AppsyncGraphQlApiLogConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetCloudwatchLogsRoleArn">reset_cloudwatch_logs_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetExcludeVerboseContent">reset_exclude_verbose_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetFieldLogLevel">reset_field_log_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloudwatch_logs_role_arn` <a name="reset_cloudwatch_logs_role_arn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetCloudwatchLogsRoleArn"></a>

```python
def reset_cloudwatch_logs_role_arn() -> None
```

##### `reset_exclude_verbose_content` <a name="reset_exclude_verbose_content" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetExcludeVerboseContent"></a>

```python
def reset_exclude_verbose_content() -> None
```

##### `reset_field_log_level` <a name="reset_field_log_level" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetFieldLogLevel"></a>

```python
def reset_field_log_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput">cloudwatch_logs_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContentInput">exclude_verbose_content_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevelInput">field_log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn">cloudwatch_logs_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContent">exclude_verbose_content</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevel">field_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs_role_arn_input`<sup>Optional</sup> <a name="cloudwatch_logs_role_arn_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput"></a>

```python
cloudwatch_logs_role_arn_input: str
```

- *Type:* str

---

##### `exclude_verbose_content_input`<sup>Optional</sup> <a name="exclude_verbose_content_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContentInput"></a>

```python
exclude_verbose_content_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `field_log_level_input`<sup>Optional</sup> <a name="field_log_level_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevelInput"></a>

```python
field_log_level_input: str
```

- *Type:* str

---

##### `cloudwatch_logs_role_arn`<sup>Required</sup> <a name="cloudwatch_logs_role_arn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn"></a>

```python
cloudwatch_logs_role_arn: str
```

- *Type:* str

---

##### `exclude_verbose_content`<sup>Required</sup> <a name="exclude_verbose_content" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContent"></a>

```python
exclude_verbose_content: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `field_log_level`<sup>Required</sup> <a name="field_log_level" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevel"></a>

```python
field_log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncGraphQlApiLogConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

---


### AppsyncGraphQlApiOpenIdConnectConfigOutputReference <a name="AppsyncGraphQlApiOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetAuthTtl">reset_auth_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIatTtl">reset_iat_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_ttl` <a name="reset_auth_ttl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetAuthTtl"></a>

```python
def reset_auth_ttl() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_iat_ttl` <a name="reset_iat_ttl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIatTtl"></a>

```python
def reset_iat_ttl() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtlInput">auth_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtlInput">iat_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtl">auth_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtl">iat_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_ttl_input`<sup>Optional</sup> <a name="auth_ttl_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtlInput"></a>

```python
auth_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `iat_ttl_input`<sup>Optional</sup> <a name="iat_ttl_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtlInput"></a>

```python
iat_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `auth_ttl`<sup>Required</sup> <a name="auth_ttl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtl"></a>

```python
auth_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `iat_ttl`<sup>Required</sup> <a name="iat_ttl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```python
iat_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncGraphQlApiOpenIdConnectConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

---


### AppsyncGraphQlApiTagsList <a name="AppsyncGraphQlApiTagsList" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncGraphQlApiTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppsyncGraphQlApiTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>]

---


### AppsyncGraphQlApiTagsOutputReference <a name="AppsyncGraphQlApiTagsOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncGraphQlApiTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>

---


### AppsyncGraphQlApiUserPoolConfigOutputReference <a name="AppsyncGraphQlApiUserPoolConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_graph_ql_api

appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAppIdClientRegex">reset_app_id_client_regex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAwsRegion">reset_aws_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetDefaultAction">reset_default_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetUserPoolId">reset_user_pool_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_id_client_regex` <a name="reset_app_id_client_regex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```python
def reset_app_id_client_regex() -> None
```

##### `reset_aws_region` <a name="reset_aws_region" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAwsRegion"></a>

```python
def reset_aws_region() -> None
```

##### `reset_default_action` <a name="reset_default_action" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetDefaultAction"></a>

```python
def reset_default_action() -> None
```

##### `reset_user_pool_id` <a name="reset_user_pool_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetUserPoolId"></a>

```python
def reset_user_pool_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegexInput">app_id_client_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultActionInput">default_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegex">app_id_client_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id_client_regex_input`<sup>Optional</sup> <a name="app_id_client_regex_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```python
app_id_client_regex_input: str
```

- *Type:* str

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultActionInput"></a>

```python
default_action_input: str
```

- *Type:* str

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `app_id_client_regex`<sup>Required</sup> <a name="app_id_client_regex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```python
app_id_client_regex: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncGraphQlApiUserPoolConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

---



