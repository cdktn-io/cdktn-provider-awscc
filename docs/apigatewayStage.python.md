# `apigatewayStage` Submodule <a name="`apigatewayStage` Submodule" id="@cdktn/provider-awscc.apigatewayStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayStage <a name="ApigatewayStage" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage awscc_apigateway_stage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_stage

apigatewayStage.ApigatewayStage(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rest_api_id: str,
  access_log_setting: ApigatewayStageAccessLogSetting = None,
  cache_cluster_enabled: bool | IResolvable = None,
  cache_cluster_size: str = None,
  canary_setting: ApigatewayStageCanarySetting = None,
  client_certificate_id: str = None,
  deployment_id: str = None,
  description: str = None,
  documentation_version: str = None,
  method_settings: IResolvable | typing.List[ApigatewayStageMethodSettings] = None,
  stage_name: str = None,
  tags: IResolvable | typing.List[ApigatewayStageTags] = None,
  tracing_enabled: bool | IResolvable = None,
  variables: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#rest_api_id ApigatewayStage#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.accessLogSetting">access_log_setting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a></code> | The ``AccessLogSetting`` property type specifies settings for logging access in this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.cacheClusterEnabled">cache_cluster_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#cache_cluster_enabled ApigatewayStage#cache_cluster_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.cacheClusterSize">cache_cluster_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#cache_cluster_size ApigatewayStage#cache_cluster_size}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.canarySetting">canary_setting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#canary_setting ApigatewayStage#canary_setting}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.clientCertificateId">client_certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#client_certificate_id ApigatewayStage#client_certificate_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#deployment_id ApigatewayStage#deployment_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#description ApigatewayStage#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.documentationVersion">documentation_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#documentation_version ApigatewayStage#documentation_version}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.methodSettings">method_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#method_settings ApigatewayStage#method_settings}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.stageName">stage_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#stage_name ApigatewayStage#stage_name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#tags ApigatewayStage#tags}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.tracingEnabled">tracing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#tracing_enabled ApigatewayStage#tracing_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.variables">variables</a></code> | <code>typing.Mapping[str]</code> | A map (string-to-string map) that defines the stage variables, where the variable name is the key and the variable value is the value. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.restApiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#rest_api_id ApigatewayStage#rest_api_id}.

---

##### `access_log_setting`<sup>Optional</sup> <a name="access_log_setting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.accessLogSetting"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a>

The ``AccessLogSetting`` property type specifies settings for logging access in this stage.

`AccessLogSetting` is a property of the [AWS::ApiGateway::Stage](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html) resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#access_log_setting ApigatewayStage#access_log_setting}

---

##### `cache_cluster_enabled`<sup>Optional</sup> <a name="cache_cluster_enabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.cacheClusterEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#cache_cluster_enabled ApigatewayStage#cache_cluster_enabled}.

---

##### `cache_cluster_size`<sup>Optional</sup> <a name="cache_cluster_size" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.cacheClusterSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#cache_cluster_size ApigatewayStage#cache_cluster_size}.

---

##### `canary_setting`<sup>Optional</sup> <a name="canary_setting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.canarySetting"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#canary_setting ApigatewayStage#canary_setting}.

---

##### `client_certificate_id`<sup>Optional</sup> <a name="client_certificate_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.clientCertificateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#client_certificate_id ApigatewayStage#client_certificate_id}.

---

##### `deployment_id`<sup>Optional</sup> <a name="deployment_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.deploymentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#deployment_id ApigatewayStage#deployment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#description ApigatewayStage#description}.

---

##### `documentation_version`<sup>Optional</sup> <a name="documentation_version" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.documentationVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#documentation_version ApigatewayStage#documentation_version}.

---

##### `method_settings`<sup>Optional</sup> <a name="method_settings" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.methodSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#method_settings ApigatewayStage#method_settings}.

---

##### `stage_name`<sup>Optional</sup> <a name="stage_name" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.stageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#stage_name ApigatewayStage#stage_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#tags ApigatewayStage#tags}.

---

##### `tracing_enabled`<sup>Optional</sup> <a name="tracing_enabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.tracingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#tracing_enabled ApigatewayStage#tracing_enabled}.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.variables"></a>

- *Type:* typing.Mapping[str]

A map (string-to-string map) that defines the stage variables, where the variable name is the key and the variable value is the value.

Variable names are limited to alphanumeric characters. Values must match the following regular expression: `[A-Za-z0-9-._~:/?#&=,]+`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#variables ApigatewayStage#variables}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putAccessLogSetting">put_access_log_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putCanarySetting">put_canary_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putMethodSettings">put_method_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetAccessLogSetting">reset_access_log_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCacheClusterEnabled">reset_cache_cluster_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCacheClusterSize">reset_cache_cluster_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCanarySetting">reset_canary_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetClientCertificateId">reset_client_certificate_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDeploymentId">reset_deployment_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDocumentationVersion">reset_documentation_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetMethodSettings">reset_method_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetStageName">reset_stage_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetTracingEnabled">reset_tracing_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetVariables">reset_variables</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_log_setting` <a name="put_access_log_setting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putAccessLogSetting"></a>

```python
def put_access_log_setting(
  destination_arn: str = None,
  format: str = None
) -> None
```

###### `destination_arn`<sup>Optional</sup> <a name="destination_arn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putAccessLogSetting.parameter.destinationArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs.

If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with `amazon-apigateway-`. This parameter is required to enable access logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#destination_arn ApigatewayStage#destination_arn}

---

###### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putAccessLogSetting.parameter.format"></a>

- *Type:* str

A single line format of the access logs of data, as specified by selected [$context variables](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#context-variable-reference). The format must include at least ``$context.requestId``. This parameter is required to enable access logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#format ApigatewayStage#format}

---

##### `put_canary_setting` <a name="put_canary_setting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putCanarySetting"></a>

```python
def put_canary_setting(
  deployment_id: str = None,
  percent_traffic: typing.Union[int, float] = None,
  stage_variable_overrides: typing.Mapping[str] = None,
  use_stage_cache: bool | IResolvable = None
) -> None
```

###### `deployment_id`<sup>Optional</sup> <a name="deployment_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putCanarySetting.parameter.deploymentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#deployment_id ApigatewayStage#deployment_id}.

---

###### `percent_traffic`<sup>Optional</sup> <a name="percent_traffic" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putCanarySetting.parameter.percentTraffic"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#percent_traffic ApigatewayStage#percent_traffic}.

---

###### `stage_variable_overrides`<sup>Optional</sup> <a name="stage_variable_overrides" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putCanarySetting.parameter.stageVariableOverrides"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#stage_variable_overrides ApigatewayStage#stage_variable_overrides}.

---

###### `use_stage_cache`<sup>Optional</sup> <a name="use_stage_cache" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putCanarySetting.parameter.useStageCache"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#use_stage_cache ApigatewayStage#use_stage_cache}.

---

##### `put_method_settings` <a name="put_method_settings" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putMethodSettings"></a>

```python
def put_method_settings(
  value: IResolvable | typing.List[ApigatewayStageMethodSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putMethodSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ApigatewayStageTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>]

---

##### `reset_access_log_setting` <a name="reset_access_log_setting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetAccessLogSetting"></a>

```python
def reset_access_log_setting() -> None
```

##### `reset_cache_cluster_enabled` <a name="reset_cache_cluster_enabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCacheClusterEnabled"></a>

```python
def reset_cache_cluster_enabled() -> None
```

##### `reset_cache_cluster_size` <a name="reset_cache_cluster_size" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCacheClusterSize"></a>

```python
def reset_cache_cluster_size() -> None
```

##### `reset_canary_setting` <a name="reset_canary_setting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCanarySetting"></a>

```python
def reset_canary_setting() -> None
```

##### `reset_client_certificate_id` <a name="reset_client_certificate_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetClientCertificateId"></a>

```python
def reset_client_certificate_id() -> None
```

##### `reset_deployment_id` <a name="reset_deployment_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDeploymentId"></a>

```python
def reset_deployment_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_documentation_version` <a name="reset_documentation_version" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDocumentationVersion"></a>

```python
def reset_documentation_version() -> None
```

##### `reset_method_settings` <a name="reset_method_settings" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetMethodSettings"></a>

```python
def reset_method_settings() -> None
```

##### `reset_stage_name` <a name="reset_stage_name" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetStageName"></a>

```python
def reset_stage_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tracing_enabled` <a name="reset_tracing_enabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetTracingEnabled"></a>

```python
def reset_tracing_enabled() -> None
```

##### `reset_variables` <a name="reset_variables" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetVariables"></a>

```python
def reset_variables() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApigatewayStage resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isConstruct"></a>

```python
from cdktn_provider_awscc import apigateway_stage

apigatewayStage.ApigatewayStage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apigateway_stage

apigatewayStage.ApigatewayStage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apigateway_stage

apigatewayStage.ApigatewayStage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apigateway_stage

apigatewayStage.ApigatewayStage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApigatewayStage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigatewayStage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigatewayStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.accessLogSetting">access_log_setting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference">ApigatewayStageAccessLogSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.canarySetting">canary_setting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference">ApigatewayStageCanarySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.methodSettings">method_settings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList">ApigatewayStageMethodSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList">ApigatewayStageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.accessLogSettingInput">access_log_setting_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterEnabledInput">cache_cluster_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterSizeInput">cache_cluster_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.canarySettingInput">canary_setting_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.clientCertificateIdInput">client_certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.deploymentIdInput">deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.documentationVersionInput">documentation_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.methodSettingsInput">method_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.restApiIdInput">rest_api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.stageNameInput">stage_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tracingEnabledInput">tracing_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.variablesInput">variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterEnabled">cache_cluster_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterSize">cache_cluster_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.clientCertificateId">client_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.documentationVersion">documentation_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.stageName">stage_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tracingEnabled">tracing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.variables">variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_log_setting`<sup>Required</sup> <a name="access_log_setting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.accessLogSetting"></a>

```python
access_log_setting: ApigatewayStageAccessLogSettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference">ApigatewayStageAccessLogSettingOutputReference</a>

---

##### `canary_setting`<sup>Required</sup> <a name="canary_setting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.canarySetting"></a>

```python
canary_setting: ApigatewayStageCanarySettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference">ApigatewayStageCanarySettingOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `method_settings`<sup>Required</sup> <a name="method_settings" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.methodSettings"></a>

```python
method_settings: ApigatewayStageMethodSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList">ApigatewayStageMethodSettingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tags"></a>

```python
tags: ApigatewayStageTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList">ApigatewayStageTagsList</a>

---

##### `access_log_setting_input`<sup>Optional</sup> <a name="access_log_setting_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.accessLogSettingInput"></a>

```python
access_log_setting_input: IResolvable | ApigatewayStageAccessLogSetting
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a>

---

##### `cache_cluster_enabled_input`<sup>Optional</sup> <a name="cache_cluster_enabled_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterEnabledInput"></a>

```python
cache_cluster_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_cluster_size_input`<sup>Optional</sup> <a name="cache_cluster_size_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterSizeInput"></a>

```python
cache_cluster_size_input: str
```

- *Type:* str

---

##### `canary_setting_input`<sup>Optional</sup> <a name="canary_setting_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.canarySettingInput"></a>

```python
canary_setting_input: IResolvable | ApigatewayStageCanarySetting
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a>

---

##### `client_certificate_id_input`<sup>Optional</sup> <a name="client_certificate_id_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.clientCertificateIdInput"></a>

```python
client_certificate_id_input: str
```

- *Type:* str

---

##### `deployment_id_input`<sup>Optional</sup> <a name="deployment_id_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.deploymentIdInput"></a>

```python
deployment_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `documentation_version_input`<sup>Optional</sup> <a name="documentation_version_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.documentationVersionInput"></a>

```python
documentation_version_input: str
```

- *Type:* str

---

##### `method_settings_input`<sup>Optional</sup> <a name="method_settings_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.methodSettingsInput"></a>

```python
method_settings_input: IResolvable | typing.List[ApigatewayStageMethodSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>]

---

##### `rest_api_id_input`<sup>Optional</sup> <a name="rest_api_id_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.restApiIdInput"></a>

```python
rest_api_id_input: str
```

- *Type:* str

---

##### `stage_name_input`<sup>Optional</sup> <a name="stage_name_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.stageNameInput"></a>

```python
stage_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ApigatewayStageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>]

---

##### `tracing_enabled_input`<sup>Optional</sup> <a name="tracing_enabled_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tracingEnabledInput"></a>

```python
tracing_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `variables_input`<sup>Optional</sup> <a name="variables_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.variablesInput"></a>

```python
variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cache_cluster_enabled`<sup>Required</sup> <a name="cache_cluster_enabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterEnabled"></a>

```python
cache_cluster_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_cluster_size`<sup>Required</sup> <a name="cache_cluster_size" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterSize"></a>

```python
cache_cluster_size: str
```

- *Type:* str

---

##### `client_certificate_id`<sup>Required</sup> <a name="client_certificate_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.clientCertificateId"></a>

```python
client_certificate_id: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `documentation_version`<sup>Required</sup> <a name="documentation_version" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.documentationVersion"></a>

```python
documentation_version: str
```

- *Type:* str

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

##### `stage_name`<sup>Required</sup> <a name="stage_name" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.stageName"></a>

```python
stage_name: str
```

- *Type:* str

---

##### `tracing_enabled`<sup>Required</sup> <a name="tracing_enabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tracingEnabled"></a>

```python
tracing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.variables"></a>

```python
variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayStageAccessLogSetting <a name="ApigatewayStageAccessLogSetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_stage

apigatewayStage.ApigatewayStageAccessLogSetting(
  destination_arn: str = None,
  format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting.property.destinationArn">destination_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting.property.format">format</a></code> | <code>str</code> | A single line format of the access logs of data, as specified by selected [$context variables](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#context-variable-reference). The format must include at least ``$context.requestId``. This parameter is required to enable access logging. |

---

##### `destination_arn`<sup>Optional</sup> <a name="destination_arn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs.

If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with `amazon-apigateway-`. This parameter is required to enable access logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#destination_arn ApigatewayStage#destination_arn}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting.property.format"></a>

```python
format: str
```

- *Type:* str

A single line format of the access logs of data, as specified by selected [$context variables](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#context-variable-reference). The format must include at least ``$context.requestId``. This parameter is required to enable access logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#format ApigatewayStage#format}

---

### ApigatewayStageCanarySetting <a name="ApigatewayStageCanarySetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_stage

apigatewayStage.ApigatewayStageCanarySetting(
  deployment_id: str = None,
  percent_traffic: typing.Union[int, float] = None,
  stage_variable_overrides: typing.Mapping[str] = None,
  use_stage_cache: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#deployment_id ApigatewayStage#deployment_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.percentTraffic">percent_traffic</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#percent_traffic ApigatewayStage#percent_traffic}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.stageVariableOverrides">stage_variable_overrides</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#stage_variable_overrides ApigatewayStage#stage_variable_overrides}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.useStageCache">use_stage_cache</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#use_stage_cache ApigatewayStage#use_stage_cache}. |

---

##### `deployment_id`<sup>Optional</sup> <a name="deployment_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#deployment_id ApigatewayStage#deployment_id}.

---

##### `percent_traffic`<sup>Optional</sup> <a name="percent_traffic" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.percentTraffic"></a>

```python
percent_traffic: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#percent_traffic ApigatewayStage#percent_traffic}.

---

##### `stage_variable_overrides`<sup>Optional</sup> <a name="stage_variable_overrides" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.stageVariableOverrides"></a>

```python
stage_variable_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#stage_variable_overrides ApigatewayStage#stage_variable_overrides}.

---

##### `use_stage_cache`<sup>Optional</sup> <a name="use_stage_cache" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.useStageCache"></a>

```python
use_stage_cache: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#use_stage_cache ApigatewayStage#use_stage_cache}.

---

### ApigatewayStageConfig <a name="ApigatewayStageConfig" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_stage

apigatewayStage.ApigatewayStageConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rest_api_id: str,
  access_log_setting: ApigatewayStageAccessLogSetting = None,
  cache_cluster_enabled: bool | IResolvable = None,
  cache_cluster_size: str = None,
  canary_setting: ApigatewayStageCanarySetting = None,
  client_certificate_id: str = None,
  deployment_id: str = None,
  description: str = None,
  documentation_version: str = None,
  method_settings: IResolvable | typing.List[ApigatewayStageMethodSettings] = None,
  stage_name: str = None,
  tags: IResolvable | typing.List[ApigatewayStageTags] = None,
  tracing_enabled: bool | IResolvable = None,
  variables: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#rest_api_id ApigatewayStage#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.accessLogSetting">access_log_setting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a></code> | The ``AccessLogSetting`` property type specifies settings for logging access in this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.cacheClusterEnabled">cache_cluster_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#cache_cluster_enabled ApigatewayStage#cache_cluster_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.cacheClusterSize">cache_cluster_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#cache_cluster_size ApigatewayStage#cache_cluster_size}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.canarySetting">canary_setting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#canary_setting ApigatewayStage#canary_setting}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.clientCertificateId">client_certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#client_certificate_id ApigatewayStage#client_certificate_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#deployment_id ApigatewayStage#deployment_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#description ApigatewayStage#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.documentationVersion">documentation_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#documentation_version ApigatewayStage#documentation_version}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.methodSettings">method_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#method_settings ApigatewayStage#method_settings}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.stageName">stage_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#stage_name ApigatewayStage#stage_name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#tags ApigatewayStage#tags}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.tracingEnabled">tracing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#tracing_enabled ApigatewayStage#tracing_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.variables">variables</a></code> | <code>typing.Mapping[str]</code> | A map (string-to-string map) that defines the stage variables, where the variable name is the key and the variable value is the value. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#rest_api_id ApigatewayStage#rest_api_id}.

---

##### `access_log_setting`<sup>Optional</sup> <a name="access_log_setting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.accessLogSetting"></a>

```python
access_log_setting: ApigatewayStageAccessLogSetting
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a>

The ``AccessLogSetting`` property type specifies settings for logging access in this stage.

`AccessLogSetting` is a property of the [AWS::ApiGateway::Stage](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html) resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#access_log_setting ApigatewayStage#access_log_setting}

---

##### `cache_cluster_enabled`<sup>Optional</sup> <a name="cache_cluster_enabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.cacheClusterEnabled"></a>

```python
cache_cluster_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#cache_cluster_enabled ApigatewayStage#cache_cluster_enabled}.

---

##### `cache_cluster_size`<sup>Optional</sup> <a name="cache_cluster_size" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.cacheClusterSize"></a>

```python
cache_cluster_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#cache_cluster_size ApigatewayStage#cache_cluster_size}.

---

##### `canary_setting`<sup>Optional</sup> <a name="canary_setting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.canarySetting"></a>

```python
canary_setting: ApigatewayStageCanarySetting
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#canary_setting ApigatewayStage#canary_setting}.

---

##### `client_certificate_id`<sup>Optional</sup> <a name="client_certificate_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.clientCertificateId"></a>

```python
client_certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#client_certificate_id ApigatewayStage#client_certificate_id}.

---

##### `deployment_id`<sup>Optional</sup> <a name="deployment_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#deployment_id ApigatewayStage#deployment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#description ApigatewayStage#description}.

---

##### `documentation_version`<sup>Optional</sup> <a name="documentation_version" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.documentationVersion"></a>

```python
documentation_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#documentation_version ApigatewayStage#documentation_version}.

---

##### `method_settings`<sup>Optional</sup> <a name="method_settings" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.methodSettings"></a>

```python
method_settings: IResolvable | typing.List[ApigatewayStageMethodSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#method_settings ApigatewayStage#method_settings}.

---

##### `stage_name`<sup>Optional</sup> <a name="stage_name" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.stageName"></a>

```python
stage_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#stage_name ApigatewayStage#stage_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ApigatewayStageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#tags ApigatewayStage#tags}.

---

##### `tracing_enabled`<sup>Optional</sup> <a name="tracing_enabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.tracingEnabled"></a>

```python
tracing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#tracing_enabled ApigatewayStage#tracing_enabled}.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.variables"></a>

```python
variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map (string-to-string map) that defines the stage variables, where the variable name is the key and the variable value is the value.

Variable names are limited to alphanumeric characters. Values must match the following regular expression: `[A-Za-z0-9-._~:/?#&=,]+`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#variables ApigatewayStage#variables}

---

### ApigatewayStageMethodSettings <a name="ApigatewayStageMethodSettings" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_stage

apigatewayStage.ApigatewayStageMethodSettings(
  cache_data_encrypted: bool | IResolvable = None,
  cache_ttl_in_seconds: typing.Union[int, float] = None,
  caching_enabled: bool | IResolvable = None,
  data_trace_enabled: bool | IResolvable = None,
  http_method: str = None,
  logging_level: str = None,
  metrics_enabled: bool | IResolvable = None,
  resource_path: str = None,
  throttling_burst_limit: typing.Union[int, float] = None,
  throttling_rate_limit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cacheDataEncrypted">cache_data_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#cache_data_encrypted ApigatewayStage#cache_data_encrypted}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cacheTtlInSeconds">cache_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#cache_ttl_in_seconds ApigatewayStage#cache_ttl_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cachingEnabled">caching_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#caching_enabled ApigatewayStage#caching_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.dataTraceEnabled">data_trace_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#data_trace_enabled ApigatewayStage#data_trace_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.httpMethod">http_method</a></code> | <code>str</code> | The HTTP method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.loggingLevel">logging_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#logging_level ApigatewayStage#logging_level}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.metricsEnabled">metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#metrics_enabled ApigatewayStage#metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.resourcePath">resource_path</a></code> | <code>str</code> | The resource path for this method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.throttlingBurstLimit">throttling_burst_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#throttling_burst_limit ApigatewayStage#throttling_burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.throttlingRateLimit">throttling_rate_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#throttling_rate_limit ApigatewayStage#throttling_rate_limit}. |

---

##### `cache_data_encrypted`<sup>Optional</sup> <a name="cache_data_encrypted" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cacheDataEncrypted"></a>

```python
cache_data_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#cache_data_encrypted ApigatewayStage#cache_data_encrypted}.

---

##### `cache_ttl_in_seconds`<sup>Optional</sup> <a name="cache_ttl_in_seconds" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cacheTtlInSeconds"></a>

```python
cache_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#cache_ttl_in_seconds ApigatewayStage#cache_ttl_in_seconds}.

---

##### `caching_enabled`<sup>Optional</sup> <a name="caching_enabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cachingEnabled"></a>

```python
caching_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#caching_enabled ApigatewayStage#caching_enabled}.

---

##### `data_trace_enabled`<sup>Optional</sup> <a name="data_trace_enabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.dataTraceEnabled"></a>

```python
data_trace_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#data_trace_enabled ApigatewayStage#data_trace_enabled}.

---

##### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

The HTTP method.

To apply settings to multiple resources and methods, specify an asterisk (`*`) for the `HttpMethod` and `/*` for the `ResourcePath`. This parameter is required when you specify a `MethodSetting`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#http_method ApigatewayStage#http_method}

---

##### `logging_level`<sup>Optional</sup> <a name="logging_level" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#logging_level ApigatewayStage#logging_level}.

---

##### `metrics_enabled`<sup>Optional</sup> <a name="metrics_enabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.metricsEnabled"></a>

```python
metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#metrics_enabled ApigatewayStage#metrics_enabled}.

---

##### `resource_path`<sup>Optional</sup> <a name="resource_path" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.resourcePath"></a>

```python
resource_path: str
```

- *Type:* str

The resource path for this method.

Forward slashes (`/`) are encoded as `~1` and the initial slash must include a forward slash. For example, the path value `/resource/subresource` must be encoded as `/~1resource~1subresource`. To specify the root path, use only a slash (`/`). To apply settings to multiple resources and methods, specify an asterisk (`*`) for the `HttpMethod` and `/*` for the `ResourcePath`. This parameter is required when you specify a `MethodSetting`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#resource_path ApigatewayStage#resource_path}

---

##### `throttling_burst_limit`<sup>Optional</sup> <a name="throttling_burst_limit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.throttlingBurstLimit"></a>

```python
throttling_burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#throttling_burst_limit ApigatewayStage#throttling_burst_limit}.

---

##### `throttling_rate_limit`<sup>Optional</sup> <a name="throttling_rate_limit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.throttlingRateLimit"></a>

```python
throttling_rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#throttling_rate_limit ApigatewayStage#throttling_rate_limit}.

---

### ApigatewayStageTags <a name="ApigatewayStageTags" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_stage

apigatewayStage.ApigatewayStageTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags.property.key">key</a></code> | <code>str</code> | A string you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags.property.value">value</a></code> | <code>str</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags.property.key"></a>

```python
key: str
```

- *Type:* str

A string you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#key ApigatewayStage#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_stage#value ApigatewayStage#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayStageAccessLogSettingOutputReference <a name="ApigatewayStageAccessLogSettingOutputReference" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_stage

apigatewayStage.ApigatewayStageAccessLogSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resetDestinationArn">reset_destination_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resetFormat">reset_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_arn` <a name="reset_destination_arn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resetDestinationArn"></a>

```python
def reset_destination_arn() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.destinationArnInput">destination_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_arn_input`<sup>Optional</sup> <a name="destination_arn_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.destinationArnInput"></a>

```python
destination_arn_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayStageAccessLogSetting
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a>

---


### ApigatewayStageCanarySettingOutputReference <a name="ApigatewayStageCanarySettingOutputReference" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_stage

apigatewayStage.ApigatewayStageCanarySettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetDeploymentId">reset_deployment_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetPercentTraffic">reset_percent_traffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetStageVariableOverrides">reset_stage_variable_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetUseStageCache">reset_use_stage_cache</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deployment_id` <a name="reset_deployment_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetDeploymentId"></a>

```python
def reset_deployment_id() -> None
```

##### `reset_percent_traffic` <a name="reset_percent_traffic" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetPercentTraffic"></a>

```python
def reset_percent_traffic() -> None
```

##### `reset_stage_variable_overrides` <a name="reset_stage_variable_overrides" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetStageVariableOverrides"></a>

```python
def reset_stage_variable_overrides() -> None
```

##### `reset_use_stage_cache` <a name="reset_use_stage_cache" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetUseStageCache"></a>

```python
def reset_use_stage_cache() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.deploymentIdInput">deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.percentTrafficInput">percent_traffic_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.stageVariableOverridesInput">stage_variable_overrides_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.useStageCacheInput">use_stage_cache_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.percentTraffic">percent_traffic</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.stageVariableOverrides">stage_variable_overrides</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.useStageCache">use_stage_cache</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_id_input`<sup>Optional</sup> <a name="deployment_id_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.deploymentIdInput"></a>

```python
deployment_id_input: str
```

- *Type:* str

---

##### `percent_traffic_input`<sup>Optional</sup> <a name="percent_traffic_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.percentTrafficInput"></a>

```python
percent_traffic_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stage_variable_overrides_input`<sup>Optional</sup> <a name="stage_variable_overrides_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.stageVariableOverridesInput"></a>

```python
stage_variable_overrides_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_stage_cache_input`<sup>Optional</sup> <a name="use_stage_cache_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.useStageCacheInput"></a>

```python
use_stage_cache_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `percent_traffic`<sup>Required</sup> <a name="percent_traffic" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.percentTraffic"></a>

```python
percent_traffic: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stage_variable_overrides`<sup>Required</sup> <a name="stage_variable_overrides" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.stageVariableOverrides"></a>

```python
stage_variable_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_stage_cache`<sup>Required</sup> <a name="use_stage_cache" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.useStageCache"></a>

```python
use_stage_cache: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayStageCanarySetting
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a>

---


### ApigatewayStageMethodSettingsList <a name="ApigatewayStageMethodSettingsList" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_stage

apigatewayStage.ApigatewayStageMethodSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigatewayStageMethodSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApigatewayStageMethodSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>]

---


### ApigatewayStageMethodSettingsOutputReference <a name="ApigatewayStageMethodSettingsOutputReference" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_stage

apigatewayStage.ApigatewayStageMethodSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCacheDataEncrypted">reset_cache_data_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCacheTtlInSeconds">reset_cache_ttl_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCachingEnabled">reset_caching_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetDataTraceEnabled">reset_data_trace_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetHttpMethod">reset_http_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetLoggingLevel">reset_logging_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetMetricsEnabled">reset_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetResourcePath">reset_resource_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetThrottlingBurstLimit">reset_throttling_burst_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetThrottlingRateLimit">reset_throttling_rate_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cache_data_encrypted` <a name="reset_cache_data_encrypted" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCacheDataEncrypted"></a>

```python
def reset_cache_data_encrypted() -> None
```

##### `reset_cache_ttl_in_seconds` <a name="reset_cache_ttl_in_seconds" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCacheTtlInSeconds"></a>

```python
def reset_cache_ttl_in_seconds() -> None
```

##### `reset_caching_enabled` <a name="reset_caching_enabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCachingEnabled"></a>

```python
def reset_caching_enabled() -> None
```

##### `reset_data_trace_enabled` <a name="reset_data_trace_enabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetDataTraceEnabled"></a>

```python
def reset_data_trace_enabled() -> None
```

##### `reset_http_method` <a name="reset_http_method" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetHttpMethod"></a>

```python
def reset_http_method() -> None
```

##### `reset_logging_level` <a name="reset_logging_level" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetLoggingLevel"></a>

```python
def reset_logging_level() -> None
```

##### `reset_metrics_enabled` <a name="reset_metrics_enabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetMetricsEnabled"></a>

```python
def reset_metrics_enabled() -> None
```

##### `reset_resource_path` <a name="reset_resource_path" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetResourcePath"></a>

```python
def reset_resource_path() -> None
```

##### `reset_throttling_burst_limit` <a name="reset_throttling_burst_limit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetThrottlingBurstLimit"></a>

```python
def reset_throttling_burst_limit() -> None
```

##### `reset_throttling_rate_limit` <a name="reset_throttling_rate_limit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetThrottlingRateLimit"></a>

```python
def reset_throttling_rate_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheDataEncryptedInput">cache_data_encrypted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheTtlInSecondsInput">cache_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cachingEnabledInput">caching_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.dataTraceEnabledInput">data_trace_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.loggingLevelInput">logging_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.metricsEnabledInput">metrics_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.resourcePathInput">resource_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingBurstLimitInput">throttling_burst_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingRateLimitInput">throttling_rate_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheDataEncrypted">cache_data_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheTtlInSeconds">cache_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cachingEnabled">caching_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.dataTraceEnabled">data_trace_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.loggingLevel">logging_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.metricsEnabled">metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.resourcePath">resource_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingBurstLimit">throttling_burst_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingRateLimit">throttling_rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_data_encrypted_input`<sup>Optional</sup> <a name="cache_data_encrypted_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheDataEncryptedInput"></a>

```python
cache_data_encrypted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_ttl_in_seconds_input`<sup>Optional</sup> <a name="cache_ttl_in_seconds_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheTtlInSecondsInput"></a>

```python
cache_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `caching_enabled_input`<sup>Optional</sup> <a name="caching_enabled_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cachingEnabledInput"></a>

```python
caching_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_trace_enabled_input`<sup>Optional</sup> <a name="data_trace_enabled_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.dataTraceEnabledInput"></a>

```python
data_trace_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `logging_level_input`<sup>Optional</sup> <a name="logging_level_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.loggingLevelInput"></a>

```python
logging_level_input: str
```

- *Type:* str

---

##### `metrics_enabled_input`<sup>Optional</sup> <a name="metrics_enabled_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.metricsEnabledInput"></a>

```python
metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_path_input`<sup>Optional</sup> <a name="resource_path_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.resourcePathInput"></a>

```python
resource_path_input: str
```

- *Type:* str

---

##### `throttling_burst_limit_input`<sup>Optional</sup> <a name="throttling_burst_limit_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```python
throttling_burst_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_rate_limit_input`<sup>Optional</sup> <a name="throttling_rate_limit_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingRateLimitInput"></a>

```python
throttling_rate_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cache_data_encrypted`<sup>Required</sup> <a name="cache_data_encrypted" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheDataEncrypted"></a>

```python
cache_data_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_ttl_in_seconds`<sup>Required</sup> <a name="cache_ttl_in_seconds" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheTtlInSeconds"></a>

```python
cache_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `caching_enabled`<sup>Required</sup> <a name="caching_enabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cachingEnabled"></a>

```python
caching_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_trace_enabled`<sup>Required</sup> <a name="data_trace_enabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.dataTraceEnabled"></a>

```python
data_trace_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `logging_level`<sup>Required</sup> <a name="logging_level" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

---

##### `metrics_enabled`<sup>Required</sup> <a name="metrics_enabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.metricsEnabled"></a>

```python
metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_path`<sup>Required</sup> <a name="resource_path" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.resourcePath"></a>

```python
resource_path: str
```

- *Type:* str

---

##### `throttling_burst_limit`<sup>Required</sup> <a name="throttling_burst_limit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingBurstLimit"></a>

```python
throttling_burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_rate_limit`<sup>Required</sup> <a name="throttling_rate_limit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingRateLimit"></a>

```python
throttling_rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayStageMethodSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>

---


### ApigatewayStageTagsList <a name="ApigatewayStageTagsList" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_stage

apigatewayStage.ApigatewayStageTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigatewayStageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApigatewayStageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>]

---


### ApigatewayStageTagsOutputReference <a name="ApigatewayStageTagsOutputReference" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_stage

apigatewayStage.ApigatewayStageTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayStageTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>

---



