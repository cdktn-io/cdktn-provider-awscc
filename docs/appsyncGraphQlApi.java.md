# `appsyncGraphQlApi` Submodule <a name="`appsyncGraphQlApi` Submodule" id="@cdktn/provider-awscc.appsyncGraphQlApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncGraphQlApi <a name="AppsyncGraphQlApi" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api awscc_appsync_graph_ql_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApi;

AppsyncGraphQlApi.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authenticationType(java.lang.String)
    .name(java.lang.String)
//  .additionalAuthenticationProviders(IResolvable|java.util.List<AppsyncGraphQlApiAdditionalAuthenticationProviders>)
//  .apiType(java.lang.String)
//  .enhancedMetricsConfig(AppsyncGraphQlApiEnhancedMetricsConfig)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .introspectionConfig(java.lang.String)
//  .lambdaAuthorizerConfig(AppsyncGraphQlApiLambdaAuthorizerConfig)
//  .logConfig(AppsyncGraphQlApiLogConfig)
//  .mergedApiExecutionRoleArn(java.lang.String)
//  .openIdConnectConfig(AppsyncGraphQlApiOpenIdConnectConfig)
//  .ownerContact(java.lang.String)
//  .queryDepthLimit(java.lang.Number)
//  .resolverCountLimit(java.lang.Number)
//  .tags(IResolvable|java.util.List<AppsyncGraphQlApiTags>)
//  .userPoolConfig(AppsyncGraphQlApiUserPoolConfig)
//  .visibility(java.lang.String)
//  .xrayEnabled(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Security configuration for your GraphQL API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The API name. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.additionalAuthenticationProviders">additionalAuthenticationProviders</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>></code> | A list of additional authentication providers for the GraphqlApi API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.apiType">apiType</a></code> | <code>java.lang.String</code> | The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED). |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.enhancedMetricsConfig">enhancedMetricsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a></code> | Enables and controls the enhanced metrics feature. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map containing the list of resources with their properties and environment variables. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.introspectionConfig">introspectionConfig</a></code> | <code>java.lang.String</code> | Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a></code> | A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a></code> | The Amazon CloudWatch Logs configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.mergedApiExecutionRoleArn">mergedApiExecutionRoleArn</a></code> | <code>java.lang.String</code> | The AWS Identity and Access Management service role ARN for a merged API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.openIdConnectConfig">openIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a></code> | The OpenID Connect configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.ownerContact">ownerContact</a></code> | <code>java.lang.String</code> | The owner contact information for an API resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.queryDepthLimit">queryDepthLimit</a></code> | <code>java.lang.Number</code> | The maximum depth a query can have in a single request. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.resolverCountLimit">resolverCountLimit</a></code> | <code>java.lang.Number</code> | The maximum number of resolvers that can be invoked in a single request. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>></code> | An arbitrary set of tags (key-value pairs) for this GraphQL API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a></code> | Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.visibility">visibility</a></code> | <code>java.lang.String</code> | Sets the scope of the GraphQL API to public (GLOBAL) or private (PRIVATE). |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.xrayEnabled">xrayEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag indicating whether to use AWS X-Ray tracing for this GraphqlApi. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.authenticationType"></a>

- *Type:* java.lang.String

Security configuration for your GraphQL API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authentication_type AppsyncGraphQlApi#authentication_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The API name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#name AppsyncGraphQlApi#name}

---

##### `additionalAuthenticationProviders`<sup>Optional</sup> <a name="additionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.additionalAuthenticationProviders"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>>

A list of additional authentication providers for the GraphqlApi API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#additional_authentication_providers AppsyncGraphQlApi#additional_authentication_providers}

---

##### `apiType`<sup>Optional</sup> <a name="apiType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.apiType"></a>

- *Type:* java.lang.String

The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#api_type AppsyncGraphQlApi#api_type}

---

##### `enhancedMetricsConfig`<sup>Optional</sup> <a name="enhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.enhancedMetricsConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

Enables and controls the enhanced metrics feature.

Enhanced metrics emit granular data on API usage and performance such as AppSync request and error counts, latency, and cache hits/misses. All enhanced metric data is sent to your CloudWatch account, and you can configure the types of data that will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#enhanced_metrics_config AppsyncGraphQlApi#enhanced_metrics_config}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.environmentVariables"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map containing the list of resources with their properties and environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#environment_variables AppsyncGraphQlApi#environment_variables}

---

##### `introspectionConfig`<sup>Optional</sup> <a name="introspectionConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.introspectionConfig"></a>

- *Type:* java.lang.String

Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection.

If no value is provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#introspection_config AppsyncGraphQlApi#introspection_config}

---

##### `lambdaAuthorizerConfig`<sup>Optional</sup> <a name="lambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.lambdaAuthorizerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode.

Be aware that an AWS AppSync API may have only one Lambda authorizer configured at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#lambda_authorizer_config AppsyncGraphQlApi#lambda_authorizer_config}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

The Amazon CloudWatch Logs configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#log_config AppsyncGraphQlApi#log_config}

---

##### `mergedApiExecutionRoleArn`<sup>Optional</sup> <a name="mergedApiExecutionRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.mergedApiExecutionRoleArn"></a>

- *Type:* java.lang.String

The AWS Identity and Access Management service role ARN for a merged API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#merged_api_execution_role_arn AppsyncGraphQlApi#merged_api_execution_role_arn}

---

##### `openIdConnectConfig`<sup>Optional</sup> <a name="openIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.openIdConnectConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

The OpenID Connect configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#open_id_connect_config AppsyncGraphQlApi#open_id_connect_config}

---

##### `ownerContact`<sup>Optional</sup> <a name="ownerContact" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.ownerContact"></a>

- *Type:* java.lang.String

The owner contact information for an API resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#owner_contact AppsyncGraphQlApi#owner_contact}

---

##### `queryDepthLimit`<sup>Optional</sup> <a name="queryDepthLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.queryDepthLimit"></a>

- *Type:* java.lang.Number

The maximum depth a query can have in a single request.

Depth refers to the amount of nested levels allowed in the body of query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#query_depth_limit AppsyncGraphQlApi#query_depth_limit}

---

##### `resolverCountLimit`<sup>Optional</sup> <a name="resolverCountLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.resolverCountLimit"></a>

- *Type:* java.lang.Number

The maximum number of resolvers that can be invoked in a single request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#resolver_count_limit AppsyncGraphQlApi#resolver_count_limit}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>>

An arbitrary set of tags (key-value pairs) for this GraphQL API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#tags AppsyncGraphQlApi#tags}

---

##### `userPoolConfig`<sup>Optional</sup> <a name="userPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.userPoolConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_config AppsyncGraphQlApi#user_pool_config}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.visibility"></a>

- *Type:* java.lang.String

Sets the scope of the GraphQL API to public (GLOBAL) or private (PRIVATE).

By default, the scope is set to Global if no value is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#visibility AppsyncGraphQlApi#visibility}

---

##### `xrayEnabled`<sup>Optional</sup> <a name="xrayEnabled" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.xrayEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag indicating whether to use AWS X-Ray tracing for this GraphqlApi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#xray_enabled AppsyncGraphQlApi#xray_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putAdditionalAuthenticationProviders">putAdditionalAuthenticationProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putEnhancedMetricsConfig">putEnhancedMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLambdaAuthorizerConfig">putLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig">putOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig">putUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetAdditionalAuthenticationProviders">resetAdditionalAuthenticationProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetApiType">resetApiType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnhancedMetricsConfig">resetEnhancedMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetIntrospectionConfig">resetIntrospectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLambdaAuthorizerConfig">resetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetMergedApiExecutionRoleArn">resetMergedApiExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOpenIdConnectConfig">resetOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOwnerContact">resetOwnerContact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetQueryDepthLimit">resetQueryDepthLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetResolverCountLimit">resetResolverCountLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetUserPoolConfig">resetUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetVisibility">resetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetXrayEnabled">resetXrayEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalAuthenticationProviders` <a name="putAdditionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putAdditionalAuthenticationProviders"></a>

```java
public void putAdditionalAuthenticationProviders(IResolvable|java.util.List<AppsyncGraphQlApiAdditionalAuthenticationProviders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putAdditionalAuthenticationProviders.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>>

---

##### `putEnhancedMetricsConfig` <a name="putEnhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putEnhancedMetricsConfig"></a>

```java
public void putEnhancedMetricsConfig(AppsyncGraphQlApiEnhancedMetricsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putEnhancedMetricsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

---

##### `putLambdaAuthorizerConfig` <a name="putLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLambdaAuthorizerConfig"></a>

```java
public void putLambdaAuthorizerConfig(AppsyncGraphQlApiLambdaAuthorizerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLogConfig"></a>

```java
public void putLogConfig(AppsyncGraphQlApiLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

---

##### `putOpenIdConnectConfig` <a name="putOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig"></a>

```java
public void putOpenIdConnectConfig(AppsyncGraphQlApiOpenIdConnectConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AppsyncGraphQlApiTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>>

---

##### `putUserPoolConfig` <a name="putUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig"></a>

```java
public void putUserPoolConfig(AppsyncGraphQlApiUserPoolConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

---

##### `resetAdditionalAuthenticationProviders` <a name="resetAdditionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetAdditionalAuthenticationProviders"></a>

```java
public void resetAdditionalAuthenticationProviders()
```

##### `resetApiType` <a name="resetApiType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetApiType"></a>

```java
public void resetApiType()
```

##### `resetEnhancedMetricsConfig` <a name="resetEnhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnhancedMetricsConfig"></a>

```java
public void resetEnhancedMetricsConfig()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetIntrospectionConfig` <a name="resetIntrospectionConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetIntrospectionConfig"></a>

```java
public void resetIntrospectionConfig()
```

##### `resetLambdaAuthorizerConfig` <a name="resetLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLambdaAuthorizerConfig"></a>

```java
public void resetLambdaAuthorizerConfig()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLogConfig"></a>

```java
public void resetLogConfig()
```

##### `resetMergedApiExecutionRoleArn` <a name="resetMergedApiExecutionRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetMergedApiExecutionRoleArn"></a>

```java
public void resetMergedApiExecutionRoleArn()
```

##### `resetOpenIdConnectConfig` <a name="resetOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOpenIdConnectConfig"></a>

```java
public void resetOpenIdConnectConfig()
```

##### `resetOwnerContact` <a name="resetOwnerContact" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOwnerContact"></a>

```java
public void resetOwnerContact()
```

##### `resetQueryDepthLimit` <a name="resetQueryDepthLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetQueryDepthLimit"></a>

```java
public void resetQueryDepthLimit()
```

##### `resetResolverCountLimit` <a name="resetResolverCountLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetResolverCountLimit"></a>

```java
public void resetResolverCountLimit()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetTags"></a>

```java
public void resetTags()
```

##### `resetUserPoolConfig` <a name="resetUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetUserPoolConfig"></a>

```java
public void resetUserPoolConfig()
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetVisibility"></a>

```java
public void resetVisibility()
```

##### `resetXrayEnabled` <a name="resetXrayEnabled" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetXrayEnabled"></a>

```java
public void resetXrayEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncGraphQlApi resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isConstruct"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApi;

AppsyncGraphQlApi.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApi;

AppsyncGraphQlApi.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApi;

AppsyncGraphQlApi.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApi;

AppsyncGraphQlApi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppsyncGraphQlApi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppsyncGraphQlApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppsyncGraphQlApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppsyncGraphQlApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncGraphQlApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProviders">additionalAuthenticationProviders</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList">AppsyncGraphQlApiAdditionalAuthenticationProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfig">enhancedMetricsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference">AppsyncGraphQlApiEnhancedMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlDns">graphQlDns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlEndpointArn">graphQlEndpointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlUrl">graphQlUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference">AppsyncGraphQlApiLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfig">openIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference">AppsyncGraphQlApiOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeDns">realtimeDns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeUrl">realtimeUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList">AppsyncGraphQlApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference">AppsyncGraphQlApiUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProvidersInput">additionalAuthenticationProvidersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiTypeInput">apiTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfigInput">enhancedMetricsConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfigInput">introspectionConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfigInput">lambdaAuthorizerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfigInput">logConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArnInput">mergedApiExecutionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfigInput">openIdConnectConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContactInput">ownerContactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimitInput">queryDepthLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimitInput">resolverCountLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfigInput">userPoolConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabledInput">xrayEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiType">apiType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfig">introspectionConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArn">mergedApiExecutionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContact">ownerContact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimit">queryDepthLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimit">resolverCountLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabled">xrayEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `additionalAuthenticationProviders`<sup>Required</sup> <a name="additionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProviders"></a>

```java
public AppsyncGraphQlApiAdditionalAuthenticationProvidersList getAdditionalAuthenticationProviders();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList">AppsyncGraphQlApiAdditionalAuthenticationProvidersList</a>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `enhancedMetricsConfig`<sup>Required</sup> <a name="enhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfig"></a>

```java
public AppsyncGraphQlApiEnhancedMetricsConfigOutputReference getEnhancedMetricsConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference">AppsyncGraphQlApiEnhancedMetricsConfigOutputReference</a>

---

##### `graphQlDns`<sup>Required</sup> <a name="graphQlDns" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlDns"></a>

```java
public java.lang.String getGraphQlDns();
```

- *Type:* java.lang.String

---

##### `graphQlEndpointArn`<sup>Required</sup> <a name="graphQlEndpointArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlEndpointArn"></a>

```java
public java.lang.String getGraphQlEndpointArn();
```

- *Type:* java.lang.String

---

##### `graphQlUrl`<sup>Required</sup> <a name="graphQlUrl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlUrl"></a>

```java
public java.lang.String getGraphQlUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lambdaAuthorizerConfig`<sup>Required</sup> <a name="lambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfig"></a>

```java
public AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference getLambdaAuthorizerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfig"></a>

```java
public AppsyncGraphQlApiLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference">AppsyncGraphQlApiLogConfigOutputReference</a>

---

##### `openIdConnectConfig`<sup>Required</sup> <a name="openIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfig"></a>

```java
public AppsyncGraphQlApiOpenIdConnectConfigOutputReference getOpenIdConnectConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference">AppsyncGraphQlApiOpenIdConnectConfigOutputReference</a>

---

##### `realtimeDns`<sup>Required</sup> <a name="realtimeDns" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeDns"></a>

```java
public java.lang.String getRealtimeDns();
```

- *Type:* java.lang.String

---

##### `realtimeUrl`<sup>Required</sup> <a name="realtimeUrl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeUrl"></a>

```java
public java.lang.String getRealtimeUrl();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tags"></a>

```java
public AppsyncGraphQlApiTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList">AppsyncGraphQlApiTagsList</a>

---

##### `userPoolConfig`<sup>Required</sup> <a name="userPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfig"></a>

```java
public AppsyncGraphQlApiUserPoolConfigOutputReference getUserPoolConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference">AppsyncGraphQlApiUserPoolConfigOutputReference</a>

---

##### `additionalAuthenticationProvidersInput`<sup>Optional</sup> <a name="additionalAuthenticationProvidersInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProvidersInput"></a>

```java
public IResolvable|java.util.List<AppsyncGraphQlApiAdditionalAuthenticationProviders> getAdditionalAuthenticationProvidersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>>

---

##### `apiTypeInput`<sup>Optional</sup> <a name="apiTypeInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiTypeInput"></a>

```java
public java.lang.String getApiTypeInput();
```

- *Type:* java.lang.String

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `enhancedMetricsConfigInput`<sup>Optional</sup> <a name="enhancedMetricsConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfigInput"></a>

```java
public IResolvable|AppsyncGraphQlApiEnhancedMetricsConfig getEnhancedMetricsConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `introspectionConfigInput`<sup>Optional</sup> <a name="introspectionConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfigInput"></a>

```java
public java.lang.String getIntrospectionConfigInput();
```

- *Type:* java.lang.String

---

##### `lambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="lambdaAuthorizerConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfigInput"></a>

```java
public IResolvable|AppsyncGraphQlApiLambdaAuthorizerConfig getLambdaAuthorizerConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfigInput"></a>

```java
public IResolvable|AppsyncGraphQlApiLogConfig getLogConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

---

##### `mergedApiExecutionRoleArnInput`<sup>Optional</sup> <a name="mergedApiExecutionRoleArnInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArnInput"></a>

```java
public java.lang.String getMergedApiExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `openIdConnectConfigInput`<sup>Optional</sup> <a name="openIdConnectConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfigInput"></a>

```java
public IResolvable|AppsyncGraphQlApiOpenIdConnectConfig getOpenIdConnectConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

---

##### `ownerContactInput`<sup>Optional</sup> <a name="ownerContactInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContactInput"></a>

```java
public java.lang.String getOwnerContactInput();
```

- *Type:* java.lang.String

---

##### `queryDepthLimitInput`<sup>Optional</sup> <a name="queryDepthLimitInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimitInput"></a>

```java
public java.lang.Number getQueryDepthLimitInput();
```

- *Type:* java.lang.Number

---

##### `resolverCountLimitInput`<sup>Optional</sup> <a name="resolverCountLimitInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimitInput"></a>

```java
public java.lang.Number getResolverCountLimitInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AppsyncGraphQlApiTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>>

---

##### `userPoolConfigInput`<sup>Optional</sup> <a name="userPoolConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfigInput"></a>

```java
public IResolvable|AppsyncGraphQlApiUserPoolConfig getUserPoolConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `xrayEnabledInput`<sup>Optional</sup> <a name="xrayEnabledInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getXrayEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `apiType`<sup>Required</sup> <a name="apiType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiType"></a>

```java
public java.lang.String getApiType();
```

- *Type:* java.lang.String

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `introspectionConfig`<sup>Required</sup> <a name="introspectionConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfig"></a>

```java
public java.lang.String getIntrospectionConfig();
```

- *Type:* java.lang.String

---

##### `mergedApiExecutionRoleArn`<sup>Required</sup> <a name="mergedApiExecutionRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArn"></a>

```java
public java.lang.String getMergedApiExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ownerContact`<sup>Required</sup> <a name="ownerContact" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContact"></a>

```java
public java.lang.String getOwnerContact();
```

- *Type:* java.lang.String

---

##### `queryDepthLimit`<sup>Required</sup> <a name="queryDepthLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimit"></a>

```java
public java.lang.Number getQueryDepthLimit();
```

- *Type:* java.lang.Number

---

##### `resolverCountLimit`<sup>Required</sup> <a name="resolverCountLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimit"></a>

```java
public java.lang.Number getResolverCountLimit();
```

- *Type:* java.lang.Number

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

##### `xrayEnabled`<sup>Required</sup> <a name="xrayEnabled" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabled"></a>

```java
public java.lang.Boolean|IResolvable getXrayEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncGraphQlApiAdditionalAuthenticationProviders <a name="AppsyncGraphQlApiAdditionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiAdditionalAuthenticationProviders;

AppsyncGraphQlApiAdditionalAuthenticationProviders.builder()
//  .authenticationType(java.lang.String)
//  .lambdaAuthorizerConfig(AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig)
//  .openIdConnectConfig(AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig)
//  .userPoolConfig(AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | The authentication type for API key, AWS Identity and Access Management, OIDC, Amazon Cognito user pools, or AWS Lambda. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#lambda_authorizer_config AppsyncGraphQlApi#lambda_authorizer_config}. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.openIdConnectConfig">openIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#open_id_connect_config AppsyncGraphQlApi#open_id_connect_config}. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_config AppsyncGraphQlApi#user_pool_config}. |

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

The authentication type for API key, AWS Identity and Access Management, OIDC, Amazon Cognito user pools, or AWS Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authentication_type AppsyncGraphQlApi#authentication_type}

---

##### `lambdaAuthorizerConfig`<sup>Optional</sup> <a name="lambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.lambdaAuthorizerConfig"></a>

```java
public AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig getLambdaAuthorizerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#lambda_authorizer_config AppsyncGraphQlApi#lambda_authorizer_config}.

---

##### `openIdConnectConfig`<sup>Optional</sup> <a name="openIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.openIdConnectConfig"></a>

```java
public AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig getOpenIdConnectConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#open_id_connect_config AppsyncGraphQlApi#open_id_connect_config}.

---

##### `userPoolConfig`<sup>Optional</sup> <a name="userPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.userPoolConfig"></a>

```java
public AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig getUserPoolConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_config AppsyncGraphQlApi#user_pool_config}.

---

### AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig;

AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.builder()
//  .authorizerResultTtlInSeconds(java.lang.Number)
//  .authorizerUri(java.lang.String)
//  .identityValidationExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | The number of seconds a response should be cached for. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | The ARN of the Lambda function to be called for authorization. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | A regular expression for validation of tokens before the Lambda function is called. |

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

The number of seconds a response should be cached for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authorizer_result_ttl_in_seconds AppsyncGraphQlApi#authorizer_result_ttl_in_seconds}

---

##### `authorizerUri`<sup>Optional</sup> <a name="authorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

The ARN of the Lambda function to be called for authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authorizer_uri AppsyncGraphQlApi#authorizer_uri}

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="identityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```java
public java.lang.String getIdentityValidationExpression();
```

- *Type:* java.lang.String

A regular expression for validation of tokens before the Lambda function is called.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#identity_validation_expression AppsyncGraphQlApi#identity_validation_expression}

---

### AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig;

AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.builder()
//  .authTtl(java.lang.Number)
//  .clientId(java.lang.String)
//  .iatTtl(java.lang.Number)
//  .issuer(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.authTtl">authTtl</a></code> | <code>java.lang.Number</code> | The number of milliseconds that a token is valid after being authenticated. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client identifier of the Relying party at the OpenID identity provider. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.iatTtl">iatTtl</a></code> | <code>java.lang.Number</code> | The number of milliseconds that a token is valid after it's issued to a user. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | The issuer for the OIDC configuration. |

---

##### `authTtl`<sup>Optional</sup> <a name="authTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.authTtl"></a>

```java
public java.lang.Number getAuthTtl();
```

- *Type:* java.lang.Number

The number of milliseconds that a token is valid after being authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#auth_ttl AppsyncGraphQlApi#auth_ttl}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client identifier of the Relying party at the OpenID identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#client_id AppsyncGraphQlApi#client_id}

---

##### `iatTtl`<sup>Optional</sup> <a name="iatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.iatTtl"></a>

```java
public java.lang.Number getIatTtl();
```

- *Type:* java.lang.Number

The number of milliseconds that a token is valid after it's issued to a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#iat_ttl AppsyncGraphQlApi#iat_ttl}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

The issuer for the OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#issuer AppsyncGraphQlApi#issuer}

---

### AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig;

AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.builder()
//  .appIdClientRegex(java.lang.String)
//  .awsRegion(java.lang.String)
//  .userPoolId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.appIdClientRegex">appIdClientRegex</a></code> | <code>java.lang.String</code> | A regular expression for validating the incoming Amazon Cognito user pool app client ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | The AWS Region in which the user pool was created. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | The user pool ID. |

---

##### `appIdClientRegex`<sup>Optional</sup> <a name="appIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.appIdClientRegex"></a>

```java
public java.lang.String getAppIdClientRegex();
```

- *Type:* java.lang.String

A regular expression for validating the incoming Amazon Cognito user pool app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#app_id_client_regex AppsyncGraphQlApi#app_id_client_regex}

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

The AWS Region in which the user pool was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#aws_region AppsyncGraphQlApi#aws_region}

---

##### `userPoolId`<sup>Optional</sup> <a name="userPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

The user pool ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_id AppsyncGraphQlApi#user_pool_id}

---

### AppsyncGraphQlApiConfig <a name="AppsyncGraphQlApiConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiConfig;

AppsyncGraphQlApiConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authenticationType(java.lang.String)
    .name(java.lang.String)
//  .additionalAuthenticationProviders(IResolvable|java.util.List<AppsyncGraphQlApiAdditionalAuthenticationProviders>)
//  .apiType(java.lang.String)
//  .enhancedMetricsConfig(AppsyncGraphQlApiEnhancedMetricsConfig)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .introspectionConfig(java.lang.String)
//  .lambdaAuthorizerConfig(AppsyncGraphQlApiLambdaAuthorizerConfig)
//  .logConfig(AppsyncGraphQlApiLogConfig)
//  .mergedApiExecutionRoleArn(java.lang.String)
//  .openIdConnectConfig(AppsyncGraphQlApiOpenIdConnectConfig)
//  .ownerContact(java.lang.String)
//  .queryDepthLimit(java.lang.Number)
//  .resolverCountLimit(java.lang.Number)
//  .tags(IResolvable|java.util.List<AppsyncGraphQlApiTags>)
//  .userPoolConfig(AppsyncGraphQlApiUserPoolConfig)
//  .visibility(java.lang.String)
//  .xrayEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Security configuration for your GraphQL API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.name">name</a></code> | <code>java.lang.String</code> | The API name. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.additionalAuthenticationProviders">additionalAuthenticationProviders</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>></code> | A list of additional authentication providers for the GraphqlApi API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.apiType">apiType</a></code> | <code>java.lang.String</code> | The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED). |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.enhancedMetricsConfig">enhancedMetricsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a></code> | Enables and controls the enhanced metrics feature. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map containing the list of resources with their properties and environment variables. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.introspectionConfig">introspectionConfig</a></code> | <code>java.lang.String</code> | Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a></code> | A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a></code> | The Amazon CloudWatch Logs configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.mergedApiExecutionRoleArn">mergedApiExecutionRoleArn</a></code> | <code>java.lang.String</code> | The AWS Identity and Access Management service role ARN for a merged API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.openIdConnectConfig">openIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a></code> | The OpenID Connect configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.ownerContact">ownerContact</a></code> | <code>java.lang.String</code> | The owner contact information for an API resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.queryDepthLimit">queryDepthLimit</a></code> | <code>java.lang.Number</code> | The maximum depth a query can have in a single request. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.resolverCountLimit">resolverCountLimit</a></code> | <code>java.lang.Number</code> | The maximum number of resolvers that can be invoked in a single request. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>></code> | An arbitrary set of tags (key-value pairs) for this GraphQL API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a></code> | Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | Sets the scope of the GraphQL API to public (GLOBAL) or private (PRIVATE). |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.xrayEnabled">xrayEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag indicating whether to use AWS X-Ray tracing for this GraphqlApi. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Security configuration for your GraphQL API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authentication_type AppsyncGraphQlApi#authentication_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The API name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#name AppsyncGraphQlApi#name}

---

##### `additionalAuthenticationProviders`<sup>Optional</sup> <a name="additionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.additionalAuthenticationProviders"></a>

```java
public IResolvable|java.util.List<AppsyncGraphQlApiAdditionalAuthenticationProviders> getAdditionalAuthenticationProviders();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>>

A list of additional authentication providers for the GraphqlApi API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#additional_authentication_providers AppsyncGraphQlApi#additional_authentication_providers}

---

##### `apiType`<sup>Optional</sup> <a name="apiType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.apiType"></a>

```java
public java.lang.String getApiType();
```

- *Type:* java.lang.String

The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#api_type AppsyncGraphQlApi#api_type}

---

##### `enhancedMetricsConfig`<sup>Optional</sup> <a name="enhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.enhancedMetricsConfig"></a>

```java
public AppsyncGraphQlApiEnhancedMetricsConfig getEnhancedMetricsConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

Enables and controls the enhanced metrics feature.

Enhanced metrics emit granular data on API usage and performance such as AppSync request and error counts, latency, and cache hits/misses. All enhanced metric data is sent to your CloudWatch account, and you can configure the types of data that will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#enhanced_metrics_config AppsyncGraphQlApi#enhanced_metrics_config}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map containing the list of resources with their properties and environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#environment_variables AppsyncGraphQlApi#environment_variables}

---

##### `introspectionConfig`<sup>Optional</sup> <a name="introspectionConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.introspectionConfig"></a>

```java
public java.lang.String getIntrospectionConfig();
```

- *Type:* java.lang.String

Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection.

If no value is provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#introspection_config AppsyncGraphQlApi#introspection_config}

---

##### `lambdaAuthorizerConfig`<sup>Optional</sup> <a name="lambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lambdaAuthorizerConfig"></a>

```java
public AppsyncGraphQlApiLambdaAuthorizerConfig getLambdaAuthorizerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode.

Be aware that an AWS AppSync API may have only one Lambda authorizer configured at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#lambda_authorizer_config AppsyncGraphQlApi#lambda_authorizer_config}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.logConfig"></a>

```java
public AppsyncGraphQlApiLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

The Amazon CloudWatch Logs configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#log_config AppsyncGraphQlApi#log_config}

---

##### `mergedApiExecutionRoleArn`<sup>Optional</sup> <a name="mergedApiExecutionRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.mergedApiExecutionRoleArn"></a>

```java
public java.lang.String getMergedApiExecutionRoleArn();
```

- *Type:* java.lang.String

The AWS Identity and Access Management service role ARN for a merged API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#merged_api_execution_role_arn AppsyncGraphQlApi#merged_api_execution_role_arn}

---

##### `openIdConnectConfig`<sup>Optional</sup> <a name="openIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.openIdConnectConfig"></a>

```java
public AppsyncGraphQlApiOpenIdConnectConfig getOpenIdConnectConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

The OpenID Connect configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#open_id_connect_config AppsyncGraphQlApi#open_id_connect_config}

---

##### `ownerContact`<sup>Optional</sup> <a name="ownerContact" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.ownerContact"></a>

```java
public java.lang.String getOwnerContact();
```

- *Type:* java.lang.String

The owner contact information for an API resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#owner_contact AppsyncGraphQlApi#owner_contact}

---

##### `queryDepthLimit`<sup>Optional</sup> <a name="queryDepthLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.queryDepthLimit"></a>

```java
public java.lang.Number getQueryDepthLimit();
```

- *Type:* java.lang.Number

The maximum depth a query can have in a single request.

Depth refers to the amount of nested levels allowed in the body of query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#query_depth_limit AppsyncGraphQlApi#query_depth_limit}

---

##### `resolverCountLimit`<sup>Optional</sup> <a name="resolverCountLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.resolverCountLimit"></a>

```java
public java.lang.Number getResolverCountLimit();
```

- *Type:* java.lang.Number

The maximum number of resolvers that can be invoked in a single request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#resolver_count_limit AppsyncGraphQlApi#resolver_count_limit}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AppsyncGraphQlApiTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>>

An arbitrary set of tags (key-value pairs) for this GraphQL API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#tags AppsyncGraphQlApi#tags}

---

##### `userPoolConfig`<sup>Optional</sup> <a name="userPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.userPoolConfig"></a>

```java
public AppsyncGraphQlApiUserPoolConfig getUserPoolConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_config AppsyncGraphQlApi#user_pool_config}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

Sets the scope of the GraphQL API to public (GLOBAL) or private (PRIVATE).

By default, the scope is set to Global if no value is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#visibility AppsyncGraphQlApi#visibility}

---

##### `xrayEnabled`<sup>Optional</sup> <a name="xrayEnabled" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.xrayEnabled"></a>

```java
public java.lang.Boolean|IResolvable getXrayEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag indicating whether to use AWS X-Ray tracing for this GraphqlApi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#xray_enabled AppsyncGraphQlApi#xray_enabled}

---

### AppsyncGraphQlApiEnhancedMetricsConfig <a name="AppsyncGraphQlApiEnhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiEnhancedMetricsConfig;

AppsyncGraphQlApiEnhancedMetricsConfig.builder()
//  .dataSourceLevelMetricsBehavior(java.lang.String)
//  .operationLevelMetricsConfig(java.lang.String)
//  .resolverLevelMetricsBehavior(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.dataSourceLevelMetricsBehavior">dataSourceLevelMetricsBehavior</a></code> | <code>java.lang.String</code> | Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.operationLevelMetricsConfig">operationLevelMetricsConfig</a></code> | <code>java.lang.String</code> | Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.resolverLevelMetricsBehavior">resolverLevelMetricsBehavior</a></code> | <code>java.lang.String</code> | Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include:. |

---

##### `dataSourceLevelMetricsBehavior`<sup>Optional</sup> <a name="dataSourceLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.dataSourceLevelMetricsBehavior"></a>

```java
public java.lang.String getDataSourceLevelMetricsBehavior();
```

- *Type:* java.lang.String

Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#data_source_level_metrics_behavior AppsyncGraphQlApi#data_source_level_metrics_behavior}

---

##### `operationLevelMetricsConfig`<sup>Optional</sup> <a name="operationLevelMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.operationLevelMetricsConfig"></a>

```java
public java.lang.String getOperationLevelMetricsConfig();
```

- *Type:* java.lang.String

Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#operation_level_metrics_config AppsyncGraphQlApi#operation_level_metrics_config}

---

##### `resolverLevelMetricsBehavior`<sup>Optional</sup> <a name="resolverLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.resolverLevelMetricsBehavior"></a>

```java
public java.lang.String getResolverLevelMetricsBehavior();
```

- *Type:* java.lang.String

Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#resolver_level_metrics_behavior AppsyncGraphQlApi#resolver_level_metrics_behavior}

---

### AppsyncGraphQlApiLambdaAuthorizerConfig <a name="AppsyncGraphQlApiLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiLambdaAuthorizerConfig;

AppsyncGraphQlApiLambdaAuthorizerConfig.builder()
//  .authorizerResultTtlInSeconds(java.lang.Number)
//  .authorizerUri(java.lang.String)
//  .identityValidationExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | The number of seconds a response should be cached for. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | The ARN of the Lambda function to be called for authorization. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | A regular expression for validation of tokens before the Lambda function is called. |

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

The number of seconds a response should be cached for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authorizer_result_ttl_in_seconds AppsyncGraphQlApi#authorizer_result_ttl_in_seconds}

---

##### `authorizerUri`<sup>Optional</sup> <a name="authorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

The ARN of the Lambda function to be called for authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authorizer_uri AppsyncGraphQlApi#authorizer_uri}

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="identityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```java
public java.lang.String getIdentityValidationExpression();
```

- *Type:* java.lang.String

A regular expression for validation of tokens before the Lambda function is called.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#identity_validation_expression AppsyncGraphQlApi#identity_validation_expression}

---

### AppsyncGraphQlApiLogConfig <a name="AppsyncGraphQlApiLogConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiLogConfig;

AppsyncGraphQlApiLogConfig.builder()
//  .cloudwatchLogsRoleArn(java.lang.String)
//  .excludeVerboseContent(java.lang.Boolean|IResolvable)
//  .fieldLogLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.cloudwatchLogsRoleArn">cloudwatchLogsRoleArn</a></code> | <code>java.lang.String</code> | The service role that AWS AppSync will assume to publish to Amazon CloudWatch Logs in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.excludeVerboseContent">excludeVerboseContent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.fieldLogLevel">fieldLogLevel</a></code> | <code>java.lang.String</code> | The field logging level. Values can be NONE, ERROR, INFO, DEBUG, or ALL. |

---

##### `cloudwatchLogsRoleArn`<sup>Optional</sup> <a name="cloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.cloudwatchLogsRoleArn"></a>

```java
public java.lang.String getCloudwatchLogsRoleArn();
```

- *Type:* java.lang.String

The service role that AWS AppSync will assume to publish to Amazon CloudWatch Logs in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#cloudwatch_logs_role_arn AppsyncGraphQlApi#cloudwatch_logs_role_arn}

---

##### `excludeVerboseContent`<sup>Optional</sup> <a name="excludeVerboseContent" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.excludeVerboseContent"></a>

```java
public java.lang.Boolean|IResolvable getExcludeVerboseContent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#exclude_verbose_content AppsyncGraphQlApi#exclude_verbose_content}

---

##### `fieldLogLevel`<sup>Optional</sup> <a name="fieldLogLevel" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.fieldLogLevel"></a>

```java
public java.lang.String getFieldLogLevel();
```

- *Type:* java.lang.String

The field logging level. Values can be NONE, ERROR, INFO, DEBUG, or ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#field_log_level AppsyncGraphQlApi#field_log_level}

---

### AppsyncGraphQlApiOpenIdConnectConfig <a name="AppsyncGraphQlApiOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiOpenIdConnectConfig;

AppsyncGraphQlApiOpenIdConnectConfig.builder()
//  .authTtl(java.lang.Number)
//  .clientId(java.lang.String)
//  .iatTtl(java.lang.Number)
//  .issuer(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.authTtl">authTtl</a></code> | <code>java.lang.Number</code> | The number of milliseconds that a token is valid after being authenticated. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client identifier of the Relying party at the OpenID identity provider. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.iatTtl">iatTtl</a></code> | <code>java.lang.Number</code> | The number of milliseconds that a token is valid after it's issued to a user. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | The issuer for the OIDC configuration. |

---

##### `authTtl`<sup>Optional</sup> <a name="authTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.authTtl"></a>

```java
public java.lang.Number getAuthTtl();
```

- *Type:* java.lang.Number

The number of milliseconds that a token is valid after being authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#auth_ttl AppsyncGraphQlApi#auth_ttl}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client identifier of the Relying party at the OpenID identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#client_id AppsyncGraphQlApi#client_id}

---

##### `iatTtl`<sup>Optional</sup> <a name="iatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.iatTtl"></a>

```java
public java.lang.Number getIatTtl();
```

- *Type:* java.lang.Number

The number of milliseconds that a token is valid after it's issued to a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#iat_ttl AppsyncGraphQlApi#iat_ttl}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

The issuer for the OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#issuer AppsyncGraphQlApi#issuer}

---

### AppsyncGraphQlApiTags <a name="AppsyncGraphQlApiTags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiTags;

AppsyncGraphQlApiTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#key AppsyncGraphQlApi#key}. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#value AppsyncGraphQlApi#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#key AppsyncGraphQlApi#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#value AppsyncGraphQlApi#value}.

---

### AppsyncGraphQlApiUserPoolConfig <a name="AppsyncGraphQlApiUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiUserPoolConfig;

AppsyncGraphQlApiUserPoolConfig.builder()
//  .appIdClientRegex(java.lang.String)
//  .awsRegion(java.lang.String)
//  .defaultAction(java.lang.String)
//  .userPoolId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.appIdClientRegex">appIdClientRegex</a></code> | <code>java.lang.String</code> | A regular expression for validating the incoming Amazon Cognito user pool app client ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | The AWS Region in which the user pool was created. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | The user pool ID. |

---

##### `appIdClientRegex`<sup>Optional</sup> <a name="appIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.appIdClientRegex"></a>

```java
public java.lang.String getAppIdClientRegex();
```

- *Type:* java.lang.String

A regular expression for validating the incoming Amazon Cognito user pool app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#app_id_client_regex AppsyncGraphQlApi#app_id_client_regex}

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

The AWS Region in which the user pool was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#aws_region AppsyncGraphQlApi#aws_region}

---

##### `defaultAction`<sup>Optional</sup> <a name="defaultAction" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#default_action AppsyncGraphQlApi#default_action}

---

##### `userPoolId`<sup>Optional</sup> <a name="userPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

The user pool ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_id AppsyncGraphQlApi#user_pool_id}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference;

new AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">resetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri">resetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">resetIdentityValidationExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizerResultTtlInSeconds` <a name="resetAuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```java
public void resetAuthorizerResultTtlInSeconds()
```

##### `resetAuthorizerUri` <a name="resetAuthorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri"></a>

```java
public void resetAuthorizerUri()
```

##### `resetIdentityValidationExpression` <a name="resetIdentityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```java
public void resetIdentityValidationExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">authorizerResultTtlInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">authorizerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">identityValidationExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="authorizerResultTtlInSecondsInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `authorizerUriInput`<sup>Optional</sup> <a name="authorizerUriInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```java
public java.lang.String getAuthorizerUriInput();
```

- *Type:* java.lang.String

---

##### `identityValidationExpressionInput`<sup>Optional</sup> <a name="identityValidationExpressionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```java
public java.lang.String getIdentityValidationExpressionInput();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="authorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

---

##### `identityValidationExpression`<sup>Required</sup> <a name="identityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```java
public java.lang.String getIdentityValidationExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersList <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersList" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiAdditionalAuthenticationProvidersList;

new AppsyncGraphQlApiAdditionalAuthenticationProvidersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.get"></a>

```java
public AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppsyncGraphQlApiAdditionalAuthenticationProviders> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>>

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference;

new AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetAuthTtl">resetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIatTtl">resetIatTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthTtl` <a name="resetAuthTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetAuthTtl"></a>

```java
public void resetAuthTtl()
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetIatTtl` <a name="resetIatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIatTtl"></a>

```java
public void resetIatTtl()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtlInput">authTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput">iatTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtl">authTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtl">iatTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTtlInput`<sup>Optional</sup> <a name="authTtlInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtlInput"></a>

```java
public java.lang.Number getAuthTtlInput();
```

- *Type:* java.lang.Number

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `iatTtlInput`<sup>Optional</sup> <a name="iatTtlInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput"></a>

```java
public java.lang.Number getIatTtlInput();
```

- *Type:* java.lang.Number

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `authTtl`<sup>Required</sup> <a name="authTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtl"></a>

```java
public java.lang.Number getAuthTtl();
```

- *Type:* java.lang.Number

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `iatTtl`<sup>Required</sup> <a name="iatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```java
public java.lang.Number getIatTtl();
```

- *Type:* java.lang.Number

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference;

new AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putLambdaAuthorizerConfig">putLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig">putOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putUserPoolConfig">putUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetLambdaAuthorizerConfig">resetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetOpenIdConnectConfig">resetOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetUserPoolConfig">resetUserPoolConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaAuthorizerConfig` <a name="putLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putLambdaAuthorizerConfig"></a>

```java
public void putLambdaAuthorizerConfig(AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

---

##### `putOpenIdConnectConfig` <a name="putOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig"></a>

```java
public void putOpenIdConnectConfig(AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

---

##### `putUserPoolConfig` <a name="putUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putUserPoolConfig"></a>

```java
public void putUserPoolConfig(AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putUserPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

---

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetAuthenticationType"></a>

```java
public void resetAuthenticationType()
```

##### `resetLambdaAuthorizerConfig` <a name="resetLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetLambdaAuthorizerConfig"></a>

```java
public void resetLambdaAuthorizerConfig()
```

##### `resetOpenIdConnectConfig` <a name="resetOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetOpenIdConnectConfig"></a>

```java
public void resetOpenIdConnectConfig()
```

##### `resetUserPoolConfig` <a name="resetUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetUserPoolConfig"></a>

```java
public void resetUserPoolConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfig">openIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfigInput">lambdaAuthorizerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfigInput">openIdConnectConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfigInput">userPoolConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaAuthorizerConfig`<sup>Required</sup> <a name="lambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfig"></a>

```java
public AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference getLambdaAuthorizerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference</a>

---

##### `openIdConnectConfig`<sup>Required</sup> <a name="openIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfig"></a>

```java
public AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference getOpenIdConnectConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference</a>

---

##### `userPoolConfig`<sup>Required</sup> <a name="userPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfig"></a>

```java
public AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference getUserPoolConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference</a>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `lambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="lambdaAuthorizerConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfigInput"></a>

```java
public IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig getLambdaAuthorizerConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

---

##### `openIdConnectConfigInput`<sup>Optional</sup> <a name="openIdConnectConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfigInput"></a>

```java
public IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig getOpenIdConnectConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

---

##### `userPoolConfigInput`<sup>Optional</sup> <a name="userPoolConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfigInput"></a>

```java
public IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig getUserPoolConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProviders getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference;

new AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAppIdClientRegex">resetAppIdClientRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetUserPoolId">resetUserPoolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppIdClientRegex` <a name="resetAppIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```java
public void resetAppIdClientRegex()
```

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAwsRegion"></a>

```java
public void resetAwsRegion()
```

##### `resetUserPoolId` <a name="resetUserPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetUserPoolId"></a>

```java
public void resetUserPoolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegexInput">appIdClientRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegex">appIdClientRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appIdClientRegexInput`<sup>Optional</sup> <a name="appIdClientRegexInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```java
public java.lang.String getAppIdClientRegexInput();
```

- *Type:* java.lang.String

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `appIdClientRegex`<sup>Required</sup> <a name="appIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```java
public java.lang.String getAppIdClientRegex();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

---


### AppsyncGraphQlApiEnhancedMetricsConfigOutputReference <a name="AppsyncGraphQlApiEnhancedMetricsConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference;

new AppsyncGraphQlApiEnhancedMetricsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetDataSourceLevelMetricsBehavior">resetDataSourceLevelMetricsBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetOperationLevelMetricsConfig">resetOperationLevelMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetResolverLevelMetricsBehavior">resetResolverLevelMetricsBehavior</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataSourceLevelMetricsBehavior` <a name="resetDataSourceLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetDataSourceLevelMetricsBehavior"></a>

```java
public void resetDataSourceLevelMetricsBehavior()
```

##### `resetOperationLevelMetricsConfig` <a name="resetOperationLevelMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetOperationLevelMetricsConfig"></a>

```java
public void resetOperationLevelMetricsConfig()
```

##### `resetResolverLevelMetricsBehavior` <a name="resetResolverLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetResolverLevelMetricsBehavior"></a>

```java
public void resetResolverLevelMetricsBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehaviorInput">dataSourceLevelMetricsBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfigInput">operationLevelMetricsConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehaviorInput">resolverLevelMetricsBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehavior">dataSourceLevelMetricsBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfig">operationLevelMetricsConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehavior">resolverLevelMetricsBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSourceLevelMetricsBehaviorInput`<sup>Optional</sup> <a name="dataSourceLevelMetricsBehaviorInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehaviorInput"></a>

```java
public java.lang.String getDataSourceLevelMetricsBehaviorInput();
```

- *Type:* java.lang.String

---

##### `operationLevelMetricsConfigInput`<sup>Optional</sup> <a name="operationLevelMetricsConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfigInput"></a>

```java
public java.lang.String getOperationLevelMetricsConfigInput();
```

- *Type:* java.lang.String

---

##### `resolverLevelMetricsBehaviorInput`<sup>Optional</sup> <a name="resolverLevelMetricsBehaviorInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehaviorInput"></a>

```java
public java.lang.String getResolverLevelMetricsBehaviorInput();
```

- *Type:* java.lang.String

---

##### `dataSourceLevelMetricsBehavior`<sup>Required</sup> <a name="dataSourceLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehavior"></a>

```java
public java.lang.String getDataSourceLevelMetricsBehavior();
```

- *Type:* java.lang.String

---

##### `operationLevelMetricsConfig`<sup>Required</sup> <a name="operationLevelMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfig"></a>

```java
public java.lang.String getOperationLevelMetricsConfig();
```

- *Type:* java.lang.String

---

##### `resolverLevelMetricsBehavior`<sup>Required</sup> <a name="resolverLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehavior"></a>

```java
public java.lang.String getResolverLevelMetricsBehavior();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncGraphQlApiEnhancedMetricsConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

---


### AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference;

new AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">resetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerUri">resetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">resetIdentityValidationExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizerResultTtlInSeconds` <a name="resetAuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```java
public void resetAuthorizerResultTtlInSeconds()
```

##### `resetAuthorizerUri` <a name="resetAuthorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerUri"></a>

```java
public void resetAuthorizerUri()
```

##### `resetIdentityValidationExpression` <a name="resetIdentityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```java
public void resetIdentityValidationExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">authorizerResultTtlInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">authorizerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">identityValidationExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="authorizerResultTtlInSecondsInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `authorizerUriInput`<sup>Optional</sup> <a name="authorizerUriInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```java
public java.lang.String getAuthorizerUriInput();
```

- *Type:* java.lang.String

---

##### `identityValidationExpressionInput`<sup>Optional</sup> <a name="identityValidationExpressionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```java
public java.lang.String getIdentityValidationExpressionInput();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="authorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

---

##### `identityValidationExpression`<sup>Required</sup> <a name="identityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```java
public java.lang.String getIdentityValidationExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncGraphQlApiLambdaAuthorizerConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

---


### AppsyncGraphQlApiLogConfigOutputReference <a name="AppsyncGraphQlApiLogConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiLogConfigOutputReference;

new AppsyncGraphQlApiLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetCloudwatchLogsRoleArn">resetCloudwatchLogsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetExcludeVerboseContent">resetExcludeVerboseContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetFieldLogLevel">resetFieldLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudwatchLogsRoleArn` <a name="resetCloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetCloudwatchLogsRoleArn"></a>

```java
public void resetCloudwatchLogsRoleArn()
```

##### `resetExcludeVerboseContent` <a name="resetExcludeVerboseContent" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetExcludeVerboseContent"></a>

```java
public void resetExcludeVerboseContent()
```

##### `resetFieldLogLevel` <a name="resetFieldLogLevel" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetFieldLogLevel"></a>

```java
public void resetFieldLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput">cloudwatchLogsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContentInput">excludeVerboseContentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevelInput">fieldLogLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn">cloudwatchLogsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContent">excludeVerboseContent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevel">fieldLogLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsRoleArnInput`<sup>Optional</sup> <a name="cloudwatchLogsRoleArnInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput"></a>

```java
public java.lang.String getCloudwatchLogsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `excludeVerboseContentInput`<sup>Optional</sup> <a name="excludeVerboseContentInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContentInput"></a>

```java
public java.lang.Boolean|IResolvable getExcludeVerboseContentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fieldLogLevelInput`<sup>Optional</sup> <a name="fieldLogLevelInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevelInput"></a>

```java
public java.lang.String getFieldLogLevelInput();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsRoleArn`<sup>Required</sup> <a name="cloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn"></a>

```java
public java.lang.String getCloudwatchLogsRoleArn();
```

- *Type:* java.lang.String

---

##### `excludeVerboseContent`<sup>Required</sup> <a name="excludeVerboseContent" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContent"></a>

```java
public java.lang.Boolean|IResolvable getExcludeVerboseContent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fieldLogLevel`<sup>Required</sup> <a name="fieldLogLevel" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevel"></a>

```java
public java.lang.String getFieldLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncGraphQlApiLogConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

---


### AppsyncGraphQlApiOpenIdConnectConfigOutputReference <a name="AppsyncGraphQlApiOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiOpenIdConnectConfigOutputReference;

new AppsyncGraphQlApiOpenIdConnectConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetAuthTtl">resetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIatTtl">resetIatTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthTtl` <a name="resetAuthTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetAuthTtl"></a>

```java
public void resetAuthTtl()
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetIatTtl` <a name="resetIatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIatTtl"></a>

```java
public void resetIatTtl()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtlInput">authTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtlInput">iatTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtl">authTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtl">iatTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTtlInput`<sup>Optional</sup> <a name="authTtlInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtlInput"></a>

```java
public java.lang.Number getAuthTtlInput();
```

- *Type:* java.lang.Number

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `iatTtlInput`<sup>Optional</sup> <a name="iatTtlInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtlInput"></a>

```java
public java.lang.Number getIatTtlInput();
```

- *Type:* java.lang.Number

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `authTtl`<sup>Required</sup> <a name="authTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtl"></a>

```java
public java.lang.Number getAuthTtl();
```

- *Type:* java.lang.Number

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `iatTtl`<sup>Required</sup> <a name="iatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```java
public java.lang.Number getIatTtl();
```

- *Type:* java.lang.Number

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncGraphQlApiOpenIdConnectConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

---


### AppsyncGraphQlApiTagsList <a name="AppsyncGraphQlApiTagsList" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiTagsList;

new AppsyncGraphQlApiTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.get"></a>

```java
public AppsyncGraphQlApiTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppsyncGraphQlApiTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>>

---


### AppsyncGraphQlApiTagsOutputReference <a name="AppsyncGraphQlApiTagsOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiTagsOutputReference;

new AppsyncGraphQlApiTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncGraphQlApiTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>

---


### AppsyncGraphQlApiUserPoolConfigOutputReference <a name="AppsyncGraphQlApiUserPoolConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_graph_ql_api.AppsyncGraphQlApiUserPoolConfigOutputReference;

new AppsyncGraphQlApiUserPoolConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAppIdClientRegex">resetAppIdClientRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetDefaultAction">resetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetUserPoolId">resetUserPoolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppIdClientRegex` <a name="resetAppIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```java
public void resetAppIdClientRegex()
```

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAwsRegion"></a>

```java
public void resetAwsRegion()
```

##### `resetDefaultAction` <a name="resetDefaultAction" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetDefaultAction"></a>

```java
public void resetDefaultAction()
```

##### `resetUserPoolId` <a name="resetUserPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetUserPoolId"></a>

```java
public void resetUserPoolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegexInput">appIdClientRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultActionInput">defaultActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegex">appIdClientRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appIdClientRegexInput`<sup>Optional</sup> <a name="appIdClientRegexInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```java
public java.lang.String getAppIdClientRegexInput();
```

- *Type:* java.lang.String

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultActionInput"></a>

```java
public java.lang.String getDefaultActionInput();
```

- *Type:* java.lang.String

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `appIdClientRegex`<sup>Required</sup> <a name="appIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```java
public java.lang.String getAppIdClientRegex();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncGraphQlApiUserPoolConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

---



